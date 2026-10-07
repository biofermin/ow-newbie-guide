(function () {
  "use strict";

  const TABS = [
    { id: "overview", label: "概要" },
    { id: "abilities", label: "アビリティ" },
    { id: "perks", label: "パーク" },
    { id: "techniques", label: "テクニック" },
    { id: "playstyle", label: "立ち回り" },
    { id: "matchups", label: "相性" },
    { id: "patches", label: "パッチ履歴" },
  ];
  const ROLE_ORDER = ["tank", "damage", "support"];

  const $ = (sel) => document.querySelector(sel);
  const view = $("#view");
  let techFilter = "すべて";

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmtDate = (d) => d.replace(/-/g, ".");
  const heroName = (id) => OW.heroes[id]?.name || OW.names[id] || id;
  const heroRole = (id) => OW.heroes[id]?.role || OW.heroRoles[id] || "damage";
  // 表示順は meta.js の heroList 順（読み込みに失敗したヒーローは除外）
  const heroIds = () => OW.heroList.filter((id) => OW.heroes[id]);
  const portrait = (id) => OW.portraits?.[id] || "";
  const avatar = (id, cls = "") =>
    portrait(id) ? `<img class="${cls}" src="${esc(portrait(id))}" alt="" loading="lazy">` : `<span class="${cls} noimg">${esc(heroName(id).slice(0, 1))}</span>`;

  // ---------- 公式統計（data/stats.js）----------
  const STAT_MODES = { comp: "ランク", qp: "クイック" };
  const STAT_REGIONS = { Asia: "アジア", Americas: "南北アメリカ", Europe: "ヨーロッパ" };
  // Tier は勝率のみで機械的に決める（閾値以上ならそのTier）
  const TIERS = [["S", 53], ["A", 51.5], ["B", 50], ["C", 48.5], ["D", 47], ["F", -Infinity]];
  let statKey = "comp-Asia";
  try { statKey = localStorage.getItem("ow-stat-key") || statKey; } catch (e) {}
  if (!OW.stats?.sets?.[statKey]) statKey = Object.keys(OW.stats?.sets || { "comp-Asia": 1 })[0];
  const statLabel = () => {
    const [m, r] = statKey.split("-");
    return `${STAT_MODES[m]}・${STAT_REGIONS[r]}`;
  };
  // stale：リワーク等で旧データが当てにならないヒーロー（次回の統計更新で解除される）
  const isStale = (id) => (OW.stats?.stale || []).includes(id);
  const statOf = (id) => {
    if (isStale(id)) return null;
    const v = OW.stats?.sets?.[statKey]?.[id];
    return v ? { wr: v[0], pr: v[1], br: v[2] } : null;
  };
  const tierOf = (id) => {
    const s = statOf(id);
    return s ? TIERS.find(([, min]) => s.wr >= min)[0] : null;
  };
  const statSource = () =>
    `Blizzard公式 Hero Statistics（${statLabel()}・${OW.stats?.input || "PC"}・全ランク帯／最新パッチ開始以降、${fmtDate(OW.stats?.fetched || "")}取得${OW.stats?.note ? "・" + OW.stats.note : ""}）`;

  function renderStatSwitch() {
    const [m, r] = statKey.split("-");
    const seg = (group, entries, cur) =>
      `<div class="seg-group">${Object.entries(entries)
        .map(([k, l]) => `<button class="chip${k === cur ? " active" : ""}" data-stat-${group}="${k}">${l}</button>`)
        .join("")}</div>`;
    return `<div class="stat-switch">${seg("mode", STAT_MODES, m)}${seg("region", STAT_REGIONS, r)}</div>`;
  }
  function bindStatSwitch() {
    view.querySelectorAll("[data-stat-mode],[data-stat-region]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const [m, r] = statKey.split("-");
        statKey = `${btn.dataset.statMode || m}-${btn.dataset.statRegion || r}`;
        try { localStorage.setItem("ow-stat-key", statKey); } catch (e) {}
        render();
      })
    );
  }

  // ---------- routing: #/<hero>/<tab> | #/select | #/ ----------
  function parseRoute() {
    const [heroId, tab] = location.hash.replace(/^#\/?/, "").split("/");
    return { heroId: heroId || null, tab: TABS.some((t) => t.id === tab) ? tab : "overview" };
  }

  function render() {
    const { heroId, tab } = parseRoute();
    renderNav(heroId);
    $("#sidebar").classList.remove("open");
    const route =
      heroId === "select" ? "select" : heroId === "maps" || heroId === "map" ? "maps" : heroId === "patches" ? "patches" : !heroId ? "home" : "";
    document.querySelectorAll(".topnav a").forEach((a) => a.classList.toggle("active", a.dataset.route === route));
    if (heroId === "patches") {
      document.title = "パッチノート | OW Hero Guide";
      document.documentElement.style.removeProperty("--hero");
      view.innerHTML = renderPatchNotes(location.hash.replace(/^#\/?/, "").split("/")[1]);
      bindPatchNotes();
      return;
    }
    if (heroId === "maps" || heroId === "map") {
      const mapId = location.hash.replace(/^#\/?/, "").split("/")[1];
      const map = heroId === "map" && OW.maps[mapId];
      document.documentElement.style.removeProperty("--hero");
      document.title = `${map ? map.name : "マップ"} | OW Hero Guide`;
      view.innerHTML = map ? renderMap(map) : renderMapList();
      bindStatSwitch();
      if (map) bindRoute(map);
      view.querySelectorAll("[data-map-mode]").forEach((btn) =>
        btn.addEventListener("click", () => {
          mapMode = btn.dataset.mapMode;
          render();
        })
      );
      return;
    }
    if (heroId === "select") {
      document.title = "ヒーロー選択 | OW Hero Guide";
      document.documentElement.style.removeProperty("--hero");
      view.innerHTML = renderSelect();
      bindSelect();
      return;
    }
    const hero = heroId && OW.heroes[heroId];
    if (!hero) {
      document.title = "OW Hero Guide";
      document.documentElement.style.removeProperty("--hero");
      view.innerHTML = renderHome();
      bindHome();
      return;
    }
    document.title = `${hero.name} | OW Hero Guide`;
    document.documentElement.style.setProperty("--hero", hero.color);
    view.innerHTML = renderHeroHead(hero) + renderTabs(hero, tab) + `<section id="tab-body">${renderTab(hero, tab)}</section>` + renderSources(hero);
    bindTab(hero, tab);
  }

  // ---------- sidebar ----------
  function renderNav(activeId) {
    const q = $("#hero-search").value.trim().toLowerCase();
    const html = ROLE_ORDER.map((role) => {
      const heroes = heroIds()
        .map((id) => OW.heroes[id])
        .filter((h) => h.role === role)
        .filter((h) => !q || h.name.includes(q) || h.nameEn.toLowerCase().includes(q));
      if (!heroes.length) return "";
      return (
        `<div class="nav-role">${OW.roles[role].label}</div>` +
        heroes
          .map(
            (h) =>
              `<a class="nav-hero${h.id === activeId ? " active" : ""}" style="--c:${h.color}" href="#/${h.id}">` +
              `${avatar(h.id, "nav-ava")}${esc(h.name)}<small>${esc(h.subrole)}</small></a>`
          )
          .join("")
      );
    }).join("");
    $("#hero-nav").innerHTML = html || `<p class="empty">該当なし</p>`;
  }

  // ---------- home ----------
  let homeRole = "all";

  function renderHome() {
    const tile = (h) => {
      const s = statOf(h.id);
      return `
        <a class="tile" style="--c:${h.color}" href="#/${h.id}" title="${esc(h.name)}（${esc(h.subrole)}）">
          ${avatar(h.id, "tile-img")}
          <span class="tile-name">${esc(h.name)}</span>
          <span class="tile-wr">${s ? s.wr.toFixed(1) + "%" : "—"}</span>
          ${h.notice ? `<span class="tile-warn" title="${esc(h.notice)}">S5</span>` : ""}
        </a>`;
    };
    const heroes = heroIds()
      .map((id) => OW.heroes[id])
      .filter((h) => homeRole === "all" || h.role === homeRole);
    const rows = [...TIERS.map(([t]) => t), null]
      .map((t) => {
        const list = heroes
          .filter((h) => tierOf(h.id) === t)
          .sort((a, b) => (statOf(b.id)?.wr ?? 0) - (statOf(a.id)?.wr ?? 0));
        if (!list.length) return "";
        return `
          <div class="tier-row">
            <div class="tier-label tier-${t || "none"}">${t || "未評価"}</div>
            <div class="tier-heroes">${list.map(tile).join("")}</div>
          </div>`;
      })
      .join("");
    const roleChips = [["all", "すべて"], ...ROLE_ORDER.map((r) => [r, OW.roles[r].label])]
      .map(([k, l]) => `<button class="chip${k === homeRole ? " active" : ""}" data-home-role="${k}">${l}</button>`)
      .join("");
    const rule = TIERS.slice(0, -1).map(([t, min]) => `${t}：${min}%以上`).join(" / ");
    return `
      <div class="home">
        <h1>TIER LIST</h1>
        <p class="lead">現パッチの公式勝率でヒーローを並べたティア表。ヒーローを選ぶと能力・テクニック・立ち回り・相性の解説へ。<a href="#/select">ヒーロー選択画面から選ぶ →</a></p>
        <div class="home-tools">${renderStatSwitch()}<div class="seg-group">${roleChips}</div></div>
        <div class="tier-list">${rows}</div>
        <div class="home-note">
          <b>Tierの決め方：</b>勝率だけで機械的に分類（${rule} / F：それ未満）。ピック率が低いヒーローは得意な人だけが使うため勝率が高めに出やすい点に注意。<br>
          <b>勝率：</b>${esc(statSource())}。<br>
          <b>ガイド本文：</b>${fmtDate(OW.meta.latestPatch)} パッチ（${esc(OW.meta.season)}）時点。相性・マップ勝率は ${esc(OW.meta.statsSource)}。
        </div>
      </div>`;
  }

  function bindHome() {
    bindStatSwitch();
    view.querySelectorAll("[data-home-role]").forEach((btn) =>
      btn.addEventListener("click", () => {
        homeRole = btn.dataset.homeRole;
        render();
      })
    );
  }

  // ---------- maps ----------
  let mapMode = "all";
  const mapIds = () => OW.mapList.filter((id) => OW.maps[id]);
  const mapName = (id) => OW.maps[id]?.name || id;
  // マップ別の公式統計（選択中のランク/クイック・地域）
  const mapStatOf = (mapId, heroId) => {
    if (isStale(heroId)) return null;
    const v = OW.mapStats?.maps?.[mapId]?.[statKey]?.[heroId];
    return v && v[0] != null ? { wr: v[0], pr: v[1], br: v[2] } : null;
  };
  const MIN_PICK = 2; // ピック率がこれ未満のヒーローはサンプルが少ないので順位付けから外す

  function renderMapList() {
    const modes = ["all", ...Object.keys(OW.modes)];
    const chips = modes
      .map((m) => `<button class="chip${m === mapMode ? " active" : ""}" data-map-mode="${m}">${m === "all" ? "すべて" : OW.modes[m].label}</button>`)
      .join("");
    const groups = Object.keys(OW.modes)
      .filter((m) => mapMode === "all" || mapMode === m)
      .map((m) => {
        const maps = mapIds().map((id) => OW.maps[id]).filter((x) => x.mode === m);
        if (!maps.length) return "";
        return `
          <h2 class="sec">${OW.modes[m].label}<small class="count">${maps.length}</small></h2>
          <div class="map-grid">${maps
            .map((x) => {
              const best = topHeroesOnMap(x.id, 3, "delta");
              return `
              <a class="map-card" href="#/map/${x.id}">
                <div class="map-thumb" style="background-image:url('${esc(x.image)}')"></div>
                <div class="map-card-body">
                  <div class="map-card-name">${esc(x.name)}</div>
                  <div class="map-card-loc">${esc(x.location || "")}</div>
                  ${best.length ? `<div class="map-card-best"><span>マップ適性</span>${best.map((b) => avatar(b.id, "mini-ava")).join("")}</div>` : ""}
                </div>
              </a>`;
            })
            .join("")}</div>`;
      })
      .join("");
    return `
      <div class="home">
        <h1>MAPS</h1>
        <p class="lead">マップごとの地形・攻め方・守り方と、公式データから見た「そのマップを得意とするヒーロー」をまとめたガイド。</p>
        <div class="home-tools"><div class="seg-group">${chips}</div>${renderStatSwitch()}</div>
        ${groups || `<p class="empty">マップデータがありません。</p>`}
      </div>`;
  }

  // mode: "wr" = マップでの勝率順 / "delta" = 全体勝率との差（マップ補正）順 / "worst" = 差が小さい順
  function topHeroesOnMap(mapId, n, mode = "wr", role = null) {
    return heroIds()
      .filter((id) => !role || OW.heroes[id].role === role)
      .map((id) => {
        const m = mapStatOf(mapId, id);
        const all = statOf(id);
        return m && all && m.pr >= MIN_PICK ? { id, wr: m.wr, pr: m.pr, delta: m.wr - all.wr } : null;
      })
      .filter(Boolean)
      .sort((a, b) => (mode === "wr" ? b.wr - a.wr : mode === "delta" ? b.delta - a.delta : a.delta - b.delta))
      .slice(0, n);
  }

  function statFace(x, kind) {
    const v = kind === "wr" ? `${x.wr.toFixed(1)}%` : `${x.delta >= 0 ? "+" : ""}${x.delta.toFixed(1)}`;
    const cls = kind === "wr" ? "" : x.delta >= 0 ? "up" : "down";
    return `<div class="stat-face">${face(x.id)}<span class="stat-val ${cls}">${v}</span></div>`;
  }

  function renderMap(m) {
    const mode = OW.modes[m.mode] || { label: m.mode, attack: "攻撃側", defense: "防衛側" };
    const roleTop = ROLE_ORDER.map((r) => {
      const list = topHeroesOnMap(m.id, 3, "wr", r);
      return `<div class="box"><h3>${OW.roles[r].label}</h3><div class="face-row">${list.map((x) => statFace(x, "wr")).join("") || "<p class='empty'>データ不足</p>"}</div></div>`;
    }).join("");
    const up = topHeroesOnMap(m.id, 6, "delta");
    const down = topHeroesOnMap(m.id, 6, "worst");
    const listOf = (arr) => `<ul>${arr.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
    return `
      <header class="map-head" style="background-image:linear-gradient(90deg, rgba(14,17,22,.95) 35%, rgba(14,17,22,.55)), url('${esc(m.image)}')">
        <div class="tags"><span class="tag role">${mode.label}</span>${m.location ? `<span class="tag">${esc(m.location)}</span>` : ""}</div>
        <h1>${esc(m.name)}<small>${esc(m.nameEn)}</small></h1>
        <p class="summary">${esc(m.summary)}</p>
      </header>
      ${m.notice ? `<div class="notice" style="margin-top:12px">⚠ ${esc(m.notice)}</div>` : ""}

      <h2 class="sec">このマップのヒーロー勝率</h2>
      <div class="home-tools">${renderStatSwitch()}</div>
      <p class="mu-legend">${esc(statSource().replace("Hero Statistics（", "Hero Statistics（このマップ・"))}。ピック率${MIN_PICK}%未満のヒーローは除外。</p>
      <div class="three-col">${roleTop}</div>
      <div class="two-col" style="margin-top:16px">
        <div class="box good"><h3>▲ マップ適性が高い</h3><p class="box-note">このマップでの勝率 − 全マップの勝率（ポイント差）</p><div class="face-row">${up.map((x) => statFace(x, "delta")).join("")}</div></div>
        <div class="box bad"><h3>▼ マップ適性が低い</h3><p class="box-note">このマップでの勝率 − 全マップの勝率（ポイント差）</p><div class="face-row">${down.map((x) => statFace(x, "delta")).join("")}</div></div>
      </div>

      <h2 class="sec">地形の特徴</h2>
      <div class="box">${listOf(m.features || [])}</div>

      <h2 class="sec">構成の相性</h2>
      <div class="perk-grid">${(m.comps || [])
        .map((c) => `<article class="comp"><h3>${esc(c.name)}<span class="fit fit-${c.fit}">${FIT[c.fit]}</span></h3><p>${esc(c.body)}</p></article>`)
        .join("")}</div>

      <h2 class="sec">区間ごとの攻略</h2>
      <div id="route">${renderRoute(m)}</div>

      <div class="two-col" style="margin-top:28px">
        <div class="box good"><h3>コツ</h3>${listOf(m.tips || [])}</div>
        <div class="box bad"><h3>よくあるミス</h3><ul class="mistakes">${(m.mistakes || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>
      </div>
      <p style="margin-top:20px"><a href="#/maps">← マップ一覧へ</a></p>
      <div class="sources">出典：${(m.sources || [])
        .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`)
        .join(" / ")} / 統計：Blizzard公式 Hero Statistics</div>`;
  }

  // ---------- 区間タブとスクリーンショット ----------
  let routeSec = 0;
  let shotIdx = 0;
  let routeMapId = null;
  const CIRCLED = ["①", "②", "③", "④", "⑤", "⑥"];
  const wikiFile = (name) => `https://overwatch.fandom.com/wiki/File:${encodeURIComponent(String(name).replace(/ /g, "_"))}`;

  function renderShots(s) {
    const shots = s.shots || [];
    if (!shots.length) return "";
    const cur = shots[Math.min(shotIdx, shots.length - 1)];
    const thumbs =
      shots.length > 1
        ? `<div class="shot-thumbs">${shots
            .map((x, i) => `<button class="shot-thumb${x === cur ? " active" : ""}" data-shot="${i}" aria-label="画像${i + 1}"><img src="${esc(x.url)}" alt="" loading="lazy"></button>`)
            .join("")}</div>`
        : "";
    return `
      <figure class="shot">
        <button class="shot-main" data-zoom="${esc(cur.url)}" aria-label="拡大表示"><img src="${esc(cur.url)}" alt="${esc(cur.caption || "")}"></button>
        <figcaption>${esc(cur.caption || "")}</figcaption>
        ${thumbs}
        <div class="shot-credit">${
          cur.file
            ? `画像：<a href="${esc(wikiFile(cur.file))}" target="_blank" rel="noopener">Overwatch Wiki</a>（ゲーム画面 © Blizzard Entertainment）`
            : esc(cur.credit || "ゲーム画面 © Blizzard Entertainment")
        }</div>
      </figure>`;
  }

  function renderRoute(m) {
    if (routeMapId !== m.id) {
      routeMapId = m.id;
      routeSec = 0;
      shotIdx = 0;
    }
    const secs = m.sections || [];
    const mode = OW.modes[m.mode] || { attack: "攻撃側", defense: "防衛側" };
    const s = secs[routeSec];
    if (!s) return "";
    const listOf = (arr) => `<ul>${arr.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
    const tabs = secs
      .map(
        (x, i) =>
          `<button class="route-tab${i === routeSec ? " active" : ""}" data-route-sec="${i}">${CIRCLED[i] || i + 1} ${esc(x.title)}${
            x.shots?.length ? ` <span class="tab-cam" title="画像あり">📷</span>` : ""
          }</button>`
      )
      .join("");
    const fig = renderShots(s);
    return `
      <div class="route-tabs">${tabs}</div>
      <div class="route-body${fig ? "" : " no-fig"}">
        ${fig}
        <article class="map-sec">
          <h3>${CIRCLED[routeSec] || ""} ${esc(s.title)}${s.sub ? `<small>${esc(s.sub)}</small>` : ""}</h3>
          ${s.attack?.length ? `<div class="side side-atk"><h4>${mode.attack}</h4>${listOf(s.attack)}</div>` : ""}
          ${s.defense?.length ? `<div class="side side-def"><h4>${mode.defense}</h4>${listOf(s.defense)}</div>` : ""}
        </article>
      </div>`;
  }

  function bindRoute(m) {
    const box = $("#route");
    if (!box) return;
    const rerender = () => {
      box.innerHTML = renderRoute(m);
      bindRoute(m);
    };
    box.querySelectorAll("[data-route-sec]").forEach((el) =>
      el.addEventListener("click", () => {
        routeSec = Number(el.dataset.routeSec);
        shotIdx = 0;
        rerender();
      })
    );
    box.querySelectorAll("[data-shot]").forEach((el) =>
      el.addEventListener("click", () => {
        shotIdx = Number(el.dataset.shot);
        rerender();
      })
    );
    box.querySelectorAll("[data-zoom]").forEach((el) => el.addEventListener("click", () => openLightbox(el.dataset.zoom)));
  }

  function openLightbox(src) {
    const lb = document.createElement("div");
    lb.className = "lightbox";
    // 拡大時は元サイズに近い画像を使う（Wiki サムネイルの幅指定を外す）
    lb.innerHTML = `<img src="${esc(src.replace(/\/scale-to-width-down\/\d+/, ""))}" alt="">`;
    const close = () => {
      lb.remove();
      document.removeEventListener("keydown", onKey);
    };
    const onKey = (e) => e.key === "Escape" && close();
    lb.addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    document.body.appendChild(lb);
  }

  // ---------- パッチノート一覧（各ヒーローの patches をパッチ単位に束ねる） ----------
  let patchRole = "all";

  function collectPatches() {
    const byDate = {};
    heroIds().forEach((id) => {
      const h = OW.heroes[id];
      (h.patches || []).forEach((p) => {
        (byDate[p.date] = byDate[p.date] || []).push({ hero: h, patch: p });
      });
    });
    Object.keys(OW.patchInfo || {}).forEach((d) => (byDate[d] = byDate[d] || []));
    return byDate;
  }

  const patchTitle = (date, entries) =>
    OW.patchInfo?.[date]?.title || entries.map((e) => e.patch.title).find(Boolean) || (entries.length >= 5 ? "バランス調整" : "ホットフィックス");
  const officialPatchUrl = (date) => `https://overwatch.blizzard.com/en-us/news/patch-notes/live/${date.slice(0, 4)}/${date.slice(5, 7)}/`;

  function renderPatchNotes(dateArg) {
    const byDate = collectPatches();
    const dates = Object.keys(byDate).sort().reverse();
    const date = byDate[dateArg] ? dateArg : dates[0];
    const entries = byDate[date] || [];
    const info = OW.patchInfo?.[date] || {};
    const idx = dates.indexOf(date);
    const options = dates
      .map((d) => `<option value="${d}"${d === date ? " selected" : ""}>${fmtDate(d)}　${esc(patchTitle(d, byDate[d]))}（${byDate[d].length}人）</option>`)
      .join("");
    const shown = entries
      .filter((e) => patchRole === "all" || e.hero.role === patchRole)
      .sort((a, b) => ROLE_ORDER.indexOf(a.hero.role) - ROLE_ORDER.indexOf(b.hero.role) || OW.heroList.indexOf(a.hero.id) - OW.heroList.indexOf(b.hero.id));
    const count = (dir) => entries.reduce((n, e) => n + e.patch.changes.filter((c) => c.dir === dir).length, 0);
    const roleChips = [["all", "すべて"], ...ROLE_ORDER.map((r) => [r, OW.roles[r].label])]
      .map(([k, l]) => {
        const n = k === "all" ? entries.length : entries.filter((e) => e.hero.role === k).length;
        return `<button class="chip${k === patchRole ? " active" : ""}" data-patch-role="${k}">${l} ${n}</button>`;
      })
      .join("");
    const card = ({ hero: h, patch: p }) => `
      <article class="pn-hero" style="--c:${h.color}">
        <a class="pn-who" href="#/${h.id}/patches">
          ${avatar(h.id, "pn-ava")}
          <span><b>${esc(h.name)}</b><small>${OW.roles[h.role].label}・${esc(h.subrole)}</small></span>
        </a>
        <ul>${p.changes.map((c) => `<li><span class="dir dir-${c.dir}">${DIR[c.dir]}</span><span>${esc(c.text)}</span></li>`).join("")}</ul>
        ${p.note ? `<details class="pn-note"><summary>開発コメント要旨</summary><p>${esc(p.note)}</p></details>` : ""}
      </article>`;
    return `
      <div class="home patchnotes">
        <h1>PATCH NOTES</h1>
        <p class="lead">パッチごとに、全ヒーローの調整をまとめて表示。ヒーローを押すとそのヒーローのパッチ履歴へ。</p>
        <div class="pn-select">
          <button class="chip" data-patch-go="${dates[idx + 1] || ""}" ${dates[idx + 1] ? "" : "disabled"} aria-label="前のパッチ">← 前</button>
          <select id="pn-date" aria-label="パッチを選ぶ">${options}</select>
          <button class="chip" data-patch-go="${dates[idx - 1] || ""}" ${idx > 0 ? "" : "disabled"} aria-label="次のパッチ">次 →</button>
        </div>
        <header class="pn-head">
          <div class="pn-date">${fmtDate(date)}</div>
          <h2>${esc(patchTitle(date, entries))}</h2>
          <div class="pn-sum">
            <span>${entries.length}人を調整</span>
            <span class="dir dir-buff">強化 ${count("buff")}</span>
            <span class="dir dir-nerf">弱体 ${count("nerf")}</span>
            <span class="dir dir-change">変更 ${count("change")}</span>
            <a href="${officialPatchUrl(date)}" target="_blank" rel="noopener">公式パッチノート →</a>
          </div>
        </header>
        ${info.general?.length ? `<div class="box pn-general"><h3>全体の変更</h3><ul>${info.general.map((g) => `<li>${esc(g)}</li>`).join("")}</ul></div>` : ""}
        <div class="seg-group" style="margin:16px 0">${roleChips}</div>
        ${shown.length ? `<div class="pn-grid">${shown.map(card).join("")}</div>` : `<p class="empty">このパッチで調整されたヒーローの記録はありません。</p>`}
        <p class="mu-legend" style="margin-top:20px">Stadium・アーケード限定の変更は含みません。</p>
      </div>`;
  }

  function bindPatchNotes() {
    const go = (d) => d && (location.hash = `#/patches/${d}`);
    $("#pn-date")?.addEventListener("change", (e) => go(e.target.value));
    view.querySelectorAll("[data-patch-go]").forEach((b) => b.addEventListener("click", () => go(b.dataset.patchGo)));
    view.querySelectorAll("[data-patch-role]").forEach((b) =>
      b.addEventListener("click", () => {
        patchRole = b.dataset.patchRole;
        render();
      })
    );
  }

  // ---------- hero select (ゲーム内のヒーロー選択画面風) ----------
  function renderSelect() {
    const cols = ROLE_ORDER.map((role) => {
      const heroes = heroIds().map((id) => OW.heroes[id]).filter((h) => h.role === role);
      // heroList はサブロール順に並んでいるので、連続するサブロールでまとめる
      const groups = [];
      heroes.forEach((h) => {
        const g = groups[groups.length - 1];
        if (g && g.name === h.subrole) g.heroes.push(h);
        else groups.push({ name: h.subrole, heroes: [h] });
      });
      return `
        <section class="sel-col sel-${role}">
          <h2 class="sel-role">${OW.roles[role].label}<small>${heroes.length}</small></h2>
          ${groups
            .map(
              (g) => `
            <div class="sel-group">
              <div class="sel-sub">${esc(g.name)}</div>
              <div class="sel-grid">${g.heroes
                .map(
                  (h) => `
                <a class="sel-hero" href="#/${h.id}" data-id="${h.id}" style="--c:${h.color}" aria-label="${esc(h.name)}">
                  ${avatar(h.id, "sel-img")}
                  <span class="sel-name">${esc(h.name)}</span>
                </a>`
                )
                .join("")}</div>
            </div>`
            )
            .join("")}
        </section>`;
    }).join("");
    return `
      <div class="select">
        <div class="sel-head">
          <h1>ヒーローを選択</h1>
          ${renderStatSwitch()}
        </div>
        <div class="sel-preview" id="sel-preview">${renderPreview(OW.heroes.reaper ? "reaper" : heroIds()[0])}</div>
        <div class="sel-cols">${cols}</div>
      </div>`;
  }

  function renderPreview(id) {
    const h = OW.heroes[id];
    if (!h) return "";
    const s = statOf(id);
    const t = tierOf(id);
    return `
      <div class="pv" style="--c:${h.color}">
        ${avatar(id, "pv-img")}
        <div class="pv-body">
          <div class="pv-en">${esc(h.nameEn)}</div>
          <div class="pv-jp">${esc(h.name)} <span class="tag">${OW.roles[h.role].label} / ${esc(h.subrole)}</span></div>
          <div class="pv-stats">
            ${t ? `<span class="pv-tier tier-${t}">${t}</span>` : `<span class="pv-tier tier-none">—</span>`}
            ${s ? `<span>勝率 <b>${s.wr.toFixed(1)}%</b></span><span>ピック率 <b>${s.pr}%</b></span>` : `<span>統計なし</span>`}
            ${s && s.br ? `<span>BAN率 <b>${s.br}%</b></span>` : ""}
          </div>
          <p class="pv-sum">${esc(h.summary)}</p>
          <a class="pv-go" href="#/${id}">このヒーローの解説を見る →</a>
        </div>
      </div>`;
  }

  function bindSelect() {
    bindStatSwitch();
    const pv = $("#sel-preview");
    view.querySelectorAll(".sel-hero").forEach((a) => {
      const show = () => {
        view.querySelectorAll(".sel-hero.hover").forEach((x) => x.classList.remove("hover"));
        a.classList.add("hover");
        pv.innerHTML = renderPreview(a.dataset.id);
      };
      a.addEventListener("mouseenter", show);
      a.addEventListener("focus", show);
    });
  }

  // ---------- hero ----------
  function renderHeroHead(h) {
    const s = statOf(h.id);
    const tier = tierOf(h.id);
    const kpi = (v, l) => (v == null ? "" : `<div class="kpi"><div class="v">${v}</div><div class="l">${l}</div></div>`);
    return `
      <header class="hero-head" data-en="${esc(h.nameEn)}">
        ${avatar(h.id, "head-img")}
        <div class="tags">
          <span class="tag role">${OW.roles[h.role].label}</span>
          <span class="tag">${esc(h.subrole)}</span>
        </div>
        <h1>${esc(h.name)}<small>${esc(h.nameEn)}</small></h1>
        <p class="quote">“${esc(h.quote)}”</p>
        <p class="summary">${esc(h.summary)}</p>
        <div class="kpis">
          ${kpi(h.hp, "HP")}
          ${kpi(tier, "Tier")}
          ${kpi(s ? s.wr.toFixed(1) + "%" : null, "勝率")}
          ${kpi(s ? s.pr + "%" : null, "ピック率")}
          ${kpi(s && s.br ? s.br + "%" : null, "BAN率")}
        </div>
        <div class="kpi-src">${
          s
            ? `統計：${esc(statSource())}`
            : isStale(h.id)
            ? "統計：リワーク直後のため、新パッチの公式データ反映待ち"
            : "統計：公式データなし（新パッチのデータ待ち）"
        }</div>
      </header>
      ${h.notice ? `<div class="notice">⚠ ${esc(h.notice)}</div>` : ""}`;
  }

  function renderTabs(h, active) {
    return `<nav class="tabs">${TABS.map(
      (t) => `<a href="#/${h.id}/${t.id}" class="${t.id === active ? "active" : ""}">${t.label}</a>`
    ).join("")}</nav>`;
  }

  function renderTab(h, tab) {
    switch (tab) {
      case "abilities": return renderAbilities(h);
      case "perks": return renderPerks(h);
      case "techniques": return renderTechniques(h);
      case "playstyle": return renderPlaystyle(h);
      case "matchups": return renderMatchups(h);
      case "patches": return renderPatches(h);
      default: return renderOverview(h);
    }
  }

  function bindTab(h, tab) {
    if (tab !== "techniques") return;
    view.querySelectorAll(".chip").forEach((btn) =>
      btn.addEventListener("click", () => {
        techFilter = btn.dataset.lv;
        $("#tab-body").innerHTML = renderTechniques(h);
        bindTab(h, tab);
      })
    );
  }

  const list = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
  const notes = (items) => (items?.length ? `<ul class="notes">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : "");
  const statTable = (rows) =>
    rows?.length ? `<dl class="stat-table">${rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>` : "";

  // ヒーローの顔アイコン（クリックでそのヒーローへ。名前は小さく下に添える）
  function face(id, cls = "") {
    const c = OW.heroes[id]?.color || "var(--line)";
    const inner = `${avatar(id, "face-img")}<span class="face-name">${esc(heroName(id))}</span>`;
    return OW.heroes[id]
      ? `<a class="face ${cls}" href="#/${id}" title="${esc(heroName(id))}" style="--c:${c}">${inner}</a>`
      : `<span class="face ${cls}" title="${esc(heroName(id))}" style="--c:${c}">${inner}</span>`;
  }

  function renderOverview(h) {
    const latest = h.patches[0];
    const mu = (arr) => `<div class="face-row">${arr.map((m) => face(m.hero)).join("")}</div>`;
    return `
      ${h.playstyle ? `<p class="core">${esc(h.playstyle.core)} <a href="#/${h.id}/playstyle">立ち回りを見る →</a></p>` : ""}
      <div class="two-col">
        <div class="box good"><h3>強み</h3>${list(h.strengths)}</div>
        <div class="box bad"><h3>弱み</h3>${list(h.weaknesses)}</div>
      </div>
      <h2 class="sec">ひと目でわかる相性</h2>
      <div class="two-col">
        <div class="box good"><h3>得意な相手</h3>${mu(h.matchups.strong)}</div>
        <div class="box bad"><h3>苦手な相手</h3>${mu(h.matchups.weak)}</div>
        <div class="box"><h3>相性の良い味方</h3>${mu(h.matchups.synergy)}</div>
      </div>
      <p><a href="#/${h.id}/matchups">相性の理由を見る →</a></p>
      ${latest ? `<h2 class="sec">直近の調整</h2>
      ${renderPatchItem(latest)}
      <p><a href="#/${h.id}/patches">パッチ履歴をすべて見る →</a></p>` : ""}`;
  }

  const PERK_KIND = { minor: "マイナー", major: "メジャー" };
  const baseName = (n) => String(n || "").split(/[（(]/)[0].trim();

  // パークの強化対象アビリティ。データの targets を優先し、無ければ説明文にアビリティ名が含まれるかで推定
  function perkTargets(h, p) {
    if (Array.isArray(p.targets)) return p.targets;
    return [...h.passives, ...h.abilities]
      .filter((a) => {
        const b = baseName(a.name);
        return b.length >= 2 && !b.startsWith("サブロール") && p.desc.includes(b);
      })
      .map((a) => a.name);
  }

  function perksFor(h, a) {
    return ["minor", "major"].flatMap((kind) =>
      h.perks[kind].filter((p) => perkTargets(h, p).includes(a.name)).map((p) => ({ ...p, kind }))
    );
  }

  function renderAbility(a, h) {
    const ult = !!a.ult;
    const right = a.cd ? `CD ${esc(a.cd)}` : ult ? `ULT ${esc(a.ult)}` : "";
    const key = a.key || "P";
    const perks = h ? perksFor(h, a) : [];
    const perkBox = perks.length
      ? `<div class="ab-perks">
          <div class="ab-perks-h">パークで強化<a href="#/${h.id}/perks">パーク欄で比較 →</a></div>
          ${perks
            .map(
              (p) => `
            <div class="ab-perk">
              <span class="perk-lv perk-${p.kind}">${PERK_KIND[p.kind]}</span>
              <div><b>${esc(p.name)}</b>：${esc(p.desc)}${p.detail ? `<span class="ab-perk-detail">${esc(p.detail)}</span>` : ""}</div>
            </div>`
            )
            .join("")}
        </div>`
      : "";
    return `
      <article class="ability">
        <div class="key${ult ? " ult" : ""}${key.length > 5 ? " long" : ""}">${esc(key)}</div>
        <div>
          <h3>${esc(a.name)}<span class="en">${esc(a.nameEn)}</span>${
            perks.length ? `<span class="perk-badge" title="強化できるパークあり">パーク ${perks.length}</span>` : ""
          }${right ? `<span class="cd">${right}</span>` : ""}</h3>
          <p class="desc">${esc(a.desc)}</p>
          ${statTable(a.stats)}
          ${notes(a.notes)}
          ${perkBox}
        </div>
      </article>`;
  }

  function renderAbilities(h) {
    return `
      <h2 class="sec">パッシブ</h2>
      ${h.passives.map((p) => renderAbility({ ...p, key: p.key || "PASSIVE" }, h)).join("")}
      <h2 class="sec">アビリティ</h2>
      ${h.abilities.map((a) => renderAbility(a, h)).join("")}
      ${renderOtherPerks(h)}`;
  }

  // どのアビリティにも属さないパーク（新しい動作の追加・自然回復の強化など）
  function renderOtherPerks(h) {
    const others = ["minor", "major"].flatMap((kind) =>
      h.perks[kind].filter((p) => !perkTargets(h, p).length).map((p) => ({ ...p, kind }))
    );
    if (!others.length) return "";
    return `
      <h2 class="sec">その他のパーク</h2>
      <div class="ab-perks">
        ${others
          .map(
            (p) => `
          <div class="ab-perk">
            <span class="perk-lv perk-${p.kind}">${PERK_KIND[p.kind]}</span>
            <div><b>${esc(p.name)}</b>：${esc(p.desc)}${p.detail ? `<span class="ab-perk-detail">${esc(p.detail)}</span>` : ""}</div>
          </div>`
          )
          .join("")}
      </div>`;
  }

  function renderPerks(h) {
    const perk = (p) => {
      const t = perkTargets(h, p);
      return `
      <article class="perk">
        <h3>${esc(p.name)}<small>${esc(p.nameEn)}</small></h3>
        ${t.length ? `<div class="perk-targets"><span>対象：</span>${t.map((n) => `<a href="#/${h.id}/abilities" class="tag">${esc(n)}</a>`).join("")}</div>` : ""}
        <p class="desc">${esc(p.desc)}</p>
        <p class="detail">${esc(p.detail)}</p>
        <p class="pick"><b>選ぶ場面：</b>${esc(p.pick)}</p>
      </article>`;
    };
    return `
      <h2 class="sec">マイナーパーク（レベル2）</h2>
      <div class="perk-grid">${h.perks.minor.map(perk).join("")}</div>
      <h2 class="sec">メジャーパーク（レベル3）</h2>
      <div class="perk-grid">${h.perks.major.map(perk).join("")}</div>`;
  }

  function renderTechniques(h) {
    const levels = ["すべて", "基本", "中級", "上級"];
    if (!levels.includes(techFilter)) techFilter = "すべて";
    const items = h.techniques.filter((t) => techFilter === "すべて" || t.level === techFilter);
    return `
      <div class="filter">${levels
        .map((l) => `<button class="chip${l === techFilter ? " active" : ""}" data-lv="${l}">${l}</button>`)
        .join("")}</div>
      ${items
        .map(
          (t) => `
        <article class="tech">
          <h3><span class="lv lv-${t.level}">${t.level}</span>${esc(t.title)}</h3>
          <p>${esc(t.body)}</p>
          <div class="ttags">${(t.tags || []).map((g) => `<span>${esc(g)}</span>`).join("")}</div>
        </article>`
        )
        .join("")}`;
  }

  const FIT = { best: "◎ 得意", ok: "○ 普通", weak: "△ 苦手" };

  function renderRange(r) {
    const pct = (v) => (v / r.max) * 100;
    const ticks = [...new Set(r.segments.flatMap((s) => [s.from, s.to]))];
    return `
      <div class="range">
        <div class="range-cap">${esc(r.caption)}</div>
        <div class="range-bar">${r.segments
          .map((s) => `<span class="seg seg-${s.level}" style="width:${pct(s.to - s.from)}%">${esc(s.label)}</span>`)
          .join("")}</div>
        <div class="range-ticks">${ticks
          .map((t) => `<span style="left:${pct(t)}%">${t === r.max ? t + "m+" : t + "m"}</span>`)
          .join("")}</div>
        <ul class="range-list">${r.segments
          .map(
            (s) => `<li><i class="seg-${s.level}"></i><b>${s.from}–${s.to}m ${esc(s.label)}</b><span>${esc(s.desc)}</span></li>`
          )
          .join("")}</ul>
      </div>`;
  }

  function renderPlaystyle(h) {
    const p = h.playstyle;
    if (!p) return `<p class="empty">立ち回りの解説はまだありません。</p>`;
    const mapRow = (m, cls) => `<li class="${cls}"><span>${esc(m.name)}</span><b>${m.wr.toFixed(1)}%</b></li>`;
    return `
      <p class="core">${esc(p.core)}</p>

      <h2 class="sec">距離感</h2>
      ${renderRange(p.range)}

      <h2 class="sec">ファイトの流れ</h2>
      <ol class="phases">${p.phases
        .map(
          (ph, i) => `
          <li class="phase">
            <div class="phase-head"><span class="phase-no">${i + 1}</span><div><b>${esc(ph.title)}</b><small>${esc(ph.sub)}</small></div></div>
            <ul>${ph.points.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          </li>`
        )
        .join("")}</ol>

      <h2 class="sec">構成別の役割</h2>
      <div class="perk-grid">${p.comps
        .map(
          (c) => `
          <article class="comp">
            <h3>${esc(c.name)}<span class="fit fit-${c.fit}">${FIT[c.fit]}</span></h3>
            <p class="ex">例：${esc(c.example)}</p>
            <p>${esc(c.body)}</p>
          </article>`
        )
        .join("")}</div>
      ${p.defense ? `<p class="callout">${esc(p.defense)}</p>` : ""}

      ${renderHeroMaps(h, p)}

      <h2 class="sec">よくあるミス</h2>
      <div class="box bad"><ul class="mistakes">${p.mistakes.map((m) => `<li>${esc(m)}</li>`).join("")}</ul></div>`;
  }

  // 公式のマップ別勝率から、このヒーローの得意・苦手マップを出す（データが無ければ解説のみ）
  function renderHeroMaps(h, p) {
    const rows = OW.mapList
      .map((id) => ({ id, s: mapStatOf(id, h.id) }))
      .filter((x) => x.s)
      .sort((a, b) => b.s.wr - a.s.wr);
    const tip = p.maps?.tip ? `<p class="mu-legend" style="margin-top:8px">傾向（counterwatch の統計をもとにした解説）：${esc(p.maps.tip)}</p>` : "";
    if (!rows.length) return tip ? `<h2 class="sec">マップ</h2>${tip}` : "";
    const row = (x, cls) => {
      const name = OW.maps[x.id] ? `<a href="#/map/${x.id}">${esc(mapName(x.id))}</a>` : esc(mapName(x.id));
      return `<li class="${cls}"><span>${name}</span><b>${x.s.wr.toFixed(1)}%</b></li>`;
    };
    return `
      <h2 class="sec">マップ</h2>
      <div class="two-col">
        <div class="box good"><h3>勝率が高いマップ</h3><ul class="maps">${rows.slice(0, 3).map((x) => row(x, "up")).join("")}</ul></div>
        <div class="box bad"><h3>勝率が低いマップ</h3><ul class="maps">${rows.slice(-3).reverse().map((x) => row(x, "down")).join("")}</ul></div>
      </div>
      <p class="mu-legend" style="margin-top:8px">勝率：${esc(statSource())}。マップ別はサンプルが少なくぶれやすい点に注意。</p>
      ${tip}`;
  }

  function renderMatchups(h) {
    const all = [...h.matchups.strong, ...h.matchups.weak].map((m) => m.rating || 0);
    const max = Math.max(...all, 1);
    const card = (m) => {
      const rate = m.rating != null ? `+${m.rating.toFixed(1)}` : "—";
      const bar = m.rating != null ? `<div class="bar"><i style="width:${(m.rating / max) * 100}%"></i></div>` : `<div class="bar"></div>`;
      return `
        <div class="mu">
          ${face(m.hero, "mu-face")}
          <div class="mu-body">
            <div class="mu-top">
              <span class="role-badge">${OW.roles[heroRole(m.hero)].short}</span>
              <span class="basis">${m.basis === "data" ? "統計" : "定石"}</span>
              ${m.rating !== undefined ? `<span class="mu-rate">${rate}</span>` : ""}
            </div>
            ${m.rating !== undefined ? bar : ""}
            <p>${esc(m.reason)}</p>
          </div>
        </div>`;
    };
    return `
      <p class="mu-legend">数値は ${esc(OW.meta.statsSource)} のカウンターレーティング。「統計」は勝敗データ由来、「定石」は統計上位外だがキットの性質上よく挙げられる相性。</p>
      <div class="mu-grid">
        <div class="mu-col strong"><h3>▲ 有利な相手</h3>${h.matchups.strong.map(card).join("")}</div>
        <div class="mu-col weak"><h3>▼ 不利な相手</h3>${h.matchups.weak.map(card).join("")}</div>
      </div>
      <h2 class="sec">相性の良い味方</h2>
      <div class="mu-grid"><div class="mu-col">${h.matchups.synergy.map(card).join("")}</div></div>`;
  }

  const DIR = { buff: "強化", nerf: "弱体", change: "変更" };
  function renderPatchItem(p) {
    return `
      <div class="patch-item">
        <div class="date">${fmtDate(p.date)}${p.title ? `<small>${esc(p.title)}</small>` : ""}</div>
        <ul>${p.changes.map((c) => `<li><span class="dir dir-${c.dir}">${DIR[c.dir]}</span><span>${esc(c.text)}</span></li>`).join("")}</ul>
        ${p.note ? `<p class="dev">開発コメント要旨：${esc(p.note)}</p>` : ""}
      </div>`;
  }

  function renderPatches(h) {
    if (!h.patches.length) return `<p class="empty">ライブ環境でのバランス調整はまだありません。</p>`;
    return `<div class="timeline">${h.patches.map(renderPatchItem).join("")}</div>`;
  }

  function renderSources(h) {
    return `<div class="sources">出典：${h.sources
      .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`)
      .join(" / ")}</div>`;
  }

  // ---------- init ----------
  $("#patch-info").innerHTML =
    `<b>最新パッチ ${fmtDate(OW.meta.latestPatch)}</b><br><span class="season">${esc(OW.meta.season)}</span>`;
  $("#hero-search").addEventListener("input", () => renderNav(parseRoute().heroId));
  $("#menu-btn").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  let lastHero = parseRoute().heroId;
  window.addEventListener("hashchange", () => {
    const { heroId } = parseRoute();
    render();
    // 同じヒーロー内のタブ切替ではスクロール位置を保つ
    if (heroId !== lastHero) window.scrollTo({ top: 0 });
    lastHero = heroId;
  });
  render();
})();
