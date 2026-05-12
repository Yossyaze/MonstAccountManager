(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={dashboard:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,accounts:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,settings:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,search:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,download:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,upload:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,plus:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,more:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>`,copy:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,check:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,trash:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>`,edit:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,empty:`<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="11" x2="23" y2="11"/></svg>`,star:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,sun:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"/></svg>`,moon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,devices:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,smartphone:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,tablet:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,monitor:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0a2 2 0 0 1 2 2v1H2v-1a2 2 0 0 1 2-2"/></svg>`};function t(){return crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).substring(2,15)}function n(e){if(!e)return``;let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function r(e){return e?e.toString().replace(/\D/g,``).replace(/\B(?=(\d{3})+(?!\d))/g,`,`):`---`}function i(e){return e.reduce((e,t)=>e+(t.characters?t.characters.length:0),0)}function a(e,t=`✓`){let r=document.querySelector(`.toast-container`);r||(r=document.createElement(`div`),r.className=`toast-container`,document.body.appendChild(r));let i=document.createElement(`div`);i.className=`toast`,i.innerHTML=`<span class="toast-icon">${t}</span>${n(e)}`,r.appendChild(i),setTimeout(()=>i.remove(),3e3)}var o={ACCOUNTS:`monst_accounts`,PRESETS:`monst_device_presets`,THEME:`monst_theme`,DEVICES:`monst_devices`},s={saveAccounts(e){localStorage.setItem(o.ACCOUNTS,JSON.stringify(e))},loadAccounts(){return JSON.parse(localStorage.getItem(o.ACCOUNTS))||[]},saveDevices(e){localStorage.setItem(o.DEVICES,JSON.stringify(e))},loadDevices(){return JSON.parse(localStorage.getItem(o.DEVICES))||[]},savePresets(e){localStorage.setItem(o.PRESETS,JSON.stringify(e))},loadPresets(){return JSON.parse(localStorage.getItem(o.PRESETS))||[`iPhone`,`iPad`,`Android`]},saveTheme(e){localStorage.setItem(o.THEME,e)},loadTheme(){return localStorage.getItem(o.THEME)||`dark`}},c={exportData(e){let t={...e,version:`2.0`,exportedAt:new Date().toISOString()},n=new Blob([JSON.stringify(t,null,2)],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`monst_manager_backup_${new Date().toISOString().slice(0,10)}.json`,i.click(),setTimeout(()=>URL.revokeObjectURL(r),100)},importData(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=e=>{try{t(JSON.parse(e.target.result))}catch{n(Error(`不正な形式のファイルです`))}},r.onerror=()=>n(Error(`ファイルの読み込みに失敗しました`)),r.readAsText(e)})}};function l(t){return`
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-icon">M</div>
        <div class="brand-text">
          <h2>MONST</h2>
          <span>Account Manager</span>
        </div>
      </div>
      <div class="nav-item ${t===`dashboard`?`active`:``}" data-nav="dashboard">
        ${e.dashboard}
        <span>ダッシュボード</span>
      </div>
      <div class="nav-item ${t===`accounts`?`active`:``}" data-nav="accounts">
        ${e.accounts}
        <span>アカウント</span>
      </div>
      <div class="nav-item ${t===`devices`?`active`:``}" data-nav="devices">
        ${e.devices}
        <span>デバイス管理</span>
      </div>
      <div class="nav-item sidebar-footer ${t===`settings`?`active`:``}" data-nav="settings">
        ${e.settings}
        <span>設定</span>
      </div>
    </aside>
  `}function u(t,r,a,o){return`
    <header class="top-header">
      <h1 class="page-title">${(e=>{switch(e){case`dashboard`:return`ダッシュボード`;case`accounts`:return`アカウント一覧`;case`devices`:return`デバイス管理`;case`settings`:return`設定`;default:return`Monst Manager`}})(t)}</h1>
      <div class="header-search">
        ${e.search}
        <input type="text" id="global-search" placeholder="検索..." value="${n(r)}" />
      </div>
      <div class="header-stats">
        <div class="stat-item">
          <div class="stat-value">${a.length}</div>
          <div class="stat-label">Accounts</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${i(a)}</div>
          <div class="stat-label">Characters</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="btn-header" id="theme-toggle" title="テーマ切り替え">
          ${o===`dark`?e.sun:e.moon}
        </button>
        <button class="btn-header" id="export-btn" title="エクスポート">${e.download}</button>
        <button class="btn-header" id="import-btn" title="インポート">${e.upload}</button>
        <input type="file" id="import-file" accept=".json" style="display: none;" />
      </div>
    </header>
  `}function d(t,r){let a=t.flatMap(e=>(e.characters||[]).filter(e=>e.favorite).map(t=>({...t,accountName:e.name}))),o=r.reduce((e,t)=>e+(t.slots?.length||0),0),s=r.reduce((e,t)=>e+(t.slots?.filter(e=>e.accountId)?.length||0),0);return`
    <div class="dashboard-view">
      <div class="stats-grid">
        <div class="stat-card-premium purple">
          <div class="stat-icon">${e.accounts}</div>
          <div class="stat-info">
            <span class="stat-label">総アカウント</span>
            <span class="stat-value-big">${t.length}</span>
          </div>
        </div>
        <div class="stat-card-premium amber">
          <div class="stat-icon">${e.star}</div>
          <div class="stat-info">
            <span class="stat-label">総所持キャラ</span>
            <span class="stat-value-big">${i(t)}</span>
          </div>
        </div>
        <div class="stat-card-premium green">
          <div class="stat-icon">${e.star}</div>
          <div class="stat-info">
            <span class="stat-label">重要キャラ</span>
            <span class="stat-value-big">${a.length}</span>
          </div>
        </div>
        <div class="stat-card-premium blue">
          <div class="stat-icon">${e.devices}</div>
          <div class="stat-info">
            <span class="stat-label">スロット稼働</span>
            <span class="stat-value-big">${s}<small>/${o}</small></span>
          </div>
        </div>
      </div>

      <div class="dashboard-grid">
        <!-- 重要キャラギャラリー -->
        <section class="dashboard-section gallery">
          <div class="section-header">
            <h3>重要キャラ（お気に入り）</h3>
            <div class="section-badge">${a.length}</div>
          </div>
          <div class="lendable-gallery">
            ${a.length===0?`
              <div class="empty-placeholder">
                <p>お気に入り登録されたキャラはいません</p>
                <small>アカウント一覧の各キャラを長押し（またはクリック）で登録できます</small>
              </div>
            `:a.map(e=>`
              <div class="lend-item" title="${n(e.name)} (${n(e.accountName)})">
                <img src="https://img.gamewith.jp/article_tools/monst/gacha/${e.id}.jpg" class="lend-icon" onerror="this.src='https://img.gamewith.jp/article_tools/monst/gacha/1.jpg'" />
                <div class="lend-owner">${n(e.accountName)}</div>
              </div>
            `).join(``)}
          </div>
        </section>

        <!-- デバイスサマリー -->
        <section class="dashboard-section device-summary">
          <div class="section-header">
            <h3>デバイス稼働状況</h3>
          </div>
          <div class="device-usage-list">
            ${r.length===0?`
              <div class="empty-placeholder">
                <p>登録されたデバイスはありません</p>
              </div>
            `:r.map(e=>{let t=e.slots?.filter(e=>e.accountId)?.length||0,r=e.slots?.length||0,i=r>0?t/r*100:0;return`
                <div class="device-usage-item">
                  <div class="usage-info">
                    <span class="usage-name">${n(e.name)}</span>
                    <span class="usage-count">${t}/${r}</span>
                  </div>
                  <div class="usage-bar-bg">
                    <div class="usage-bar-fill" style="width: ${i}%"></div>
                  </div>
                </div>
              `}).join(``)}
          </div>
        </section>
      </div>
    </div>
  `}var f=14;function p(t,i){let a=t.characters||[],o=a.slice(0,f),s=a.length-f;return`
    <div class="account-card" data-index="${i}">
      <div class="card-top">
        <div class="account-name">
          ${n(t.name)}
          ${t.canLend?`<span class="badge-lendable">貸しモン可</span>`:``}
        </div>
        <div class="card-actions">
          <button class="btn-action edit-account" data-index="${i}" title="編集">${e.edit}</button>
          <button class="btn-action delete-account" data-index="${i}" title="削除">${e.trash}</button>
        </div>
      </div>

      <div class="card-meta">
        <div class="meta-row">
          <span class="meta-label">Monst ID</span>
          <div class="meta-right">
            <span class="meta-value">${r(t.monstId)}</span>
            ${t.monstId?`<button class="copy-btn" data-copy="${n(t.monstId)}">${e.copy}</button>`:``}
          </div>
        </div>
        <div class="meta-row">
          <span class="meta-label">MIXI ID</span>
          <div class="meta-right">
            <span class="meta-value email">${n(t.mixiId)||`---`}</span>
            ${t.mixiId?`<button class="copy-btn" data-copy="${n(t.mixiId)}">${e.copy}</button>`:``}
          </div>
        </div>
        <div class="meta-row">
          <span class="meta-label">端末</span>
          <div class="meta-right">
            <span class="meta-value device">${n(t.device)||`---`}</span>
          </div>
        </div>
      </div>

      <div class="char-section">
        <div class="char-search-wrap">
          <input type="text" class="char-search-input" placeholder="キャラを追加..." data-index="${i}" />
          <div class="search-dropdown" id="dropdown-${i}"></div>
        </div>
        <div class="char-grid">
          ${o.map((t,r)=>`
            <div class="char-icon-wrapper ${t.favorite?`favorite`:``}" data-acc="${i}" data-ci="${r}" title="${n(t.name)}${t.favorite?` (重要キャラ)`:``}">
              <img src="https://img.gamewith.jp/article_tools/monst/gacha/${t.id}.jpg" class="char-icon" onerror="this.src='https://img.gamewith.jp/article_tools/monst/gacha/1.jpg'" />
              ${t.favorite?`<div class="favorite-star">${e.star}</div>`:``}
              <div class="remove-char" data-acc="${i}" data-ci="${r}">&times;</div>
            </div>
          `).join(``)}
          ${s>0?`<div class="char-overflow">+${s}</div>`:``}
        </div>
      </div>
    </div>
  `}function m(t,n){return t.length===0?`
      <div class="empty-state">
        <div class="empty-icon">${e.empty}</div>
        <h3>${n?`検索結果が見つかりません`:`アカウント未登録`}</h3>
        <p>${n?`別のキーワードをお試しください`:`右下の＋ボタンから最初のアカウントを追加しましょう`}</p>
      </div>
    `:`
    <div class="accounts-grid">
      ${t.map((e,t)=>p(e,t)).join(``)}
    </div>
  `}function h(t,n){return`
    <div class="devices-view">
      <div class="view-header">
        <div class="header-info">
          <h2>デバイス構成管理</h2>
          <p>端末ごとに枠を作成し、アカウントを割り当てます。</p>
        </div>
        <button class="btn-primary" id="add-device-btn">${e.plus} デバイスを追加</button>
      </div>
      <div class="devices-grid">
        ${t.length===0?`
          <div class="empty-state mini">
            <div class="empty-icon">${e.devices}</div>
            <p>デバイスが登録されていません</p>
          </div>
        `:t.map((e,t)=>g(e,t,n)).join(``)}
      </div>
    </div>
  `}function g(t,r,i){return`
    <div class="device-rack">
      <div class="rack-header">
        <div class="rack-title">
          ${e[t.type||`smartphone`]||e.devices}
          <span class="device-name">${n(t.name)}</span>
        </div>
        <div class="rack-actions">
          <button class="btn-icon-small edit-device" data-index="${r}" title="デバイスを編集">${e.edit}</button>
          <button class="btn-icon-small delete-device" data-index="${r}" title="デバイスを削除">${e.trash}</button>
        </div>
      </div>
      <div class="slots-container">
        ${(t.slots||[]).map((e,t)=>_(e,t,r,i)).join(``)}
        <button class="add-slot-btn" data-index="${r}">
          ${e.plus}
          <span>アプリ枠を追加</span>
        </button>
      </div>
    </div>
  `}function _(t,i,a,o){let s=o.find(e=>e.id===t.accountId),c=t.name||`アプリ${i+1}`;return`
    <div class="slot-frame" data-di="${a}" data-si="${i}">
      <div class="frame-header">
        <div class="frame-title" title="${n(c)}">
          ${n(c)}
        </div>
        <div class="frame-actions">
          <button class="btn-frame-action edit-slot-name" data-di="${a}" data-si="${i}" title="アプリ名を変更">${e.edit}</button>
          <button class="btn-frame-action delete-slot" data-di="${a}" data-si="${i}" title="枠を削除">${e.trash}</button>
        </div>
      </div>
      <div class="slot-item ${s?`occupied`:`empty`}" data-di="${a}" data-si="${i}">
        ${s?`
          <div class="slot-acc-info">
            <img src="https://img.gamewith.jp/article_tools/monst/gacha/${s.characters?.[0]?.id||1}.jpg" class="slot-avatar" onerror="this.src='https://img.gamewith.jp/article_tools/monst/gacha/1.jpg'" />
            <div class="slot-acc-detail">
              <span class="acc-name">${n(s.name)}</span>
              <span class="acc-id">ID: ${r(s.monstId)}</span>
            </div>
            <button class="eject-btn" data-di="${a}" data-si="${i}" title="アカウントを解除">&times;</button>
          </div>
        `:`
          <div class="slot-empty-msg">
            ${e.plus} <span>アカウントを差し込む</span>
          </div>
        `}
      </div>
    </div>
  `}function v(t,i,a,o){let s=a.flatMap(e=>e.slots.map(e=>e.accountId)).filter(e=>e),c=o.filter(e=>!s.includes(e.id));return`
    <div class="selector-overlay" id="selector-modal">
      <div class="selector-card">
        <div class="selector-header">
          <h3>アカウントを差し込む</h3>
          <button class="close-selector">&times;</button>
        </div>
        <div class="selector-search">
          ${e.search}
          <input type="text" id="sel-search" placeholder="名前で検索..." />
        </div>
        <div class="selector-list">
          ${c.length===0?`<p class="empty-msg">利用可能なアカウントがありません</p>`:c.map(e=>`
            <div class="sel-item" data-acc-id="${e.id}" data-di="${t}" data-si="${i}">
              <img src="https://img.gamewith.jp/article_tools/monst/gacha/${e.characters?.[0]?.id||1}.jpg" class="sel-icon" onerror="this.src='https://img.gamewith.jp/article_tools/monst/gacha/1.jpg'" />
              <div class="sel-info">
                <span class="sel-name">${n(e.name)}</span>
                <span class="sel-id">ID: ${r(e.monstId)}</span>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `}function y(e){return`
    <div class="settings-view">
      <section class="settings-section">
        <h3>端末プリセット</h3>
        <p class="settings-desc">アカウント登録時によく使う端末名を登録しておけます。</p>
        
        <div class="preset-manager">
          <div class="preset-input-group">
            <input type="text" id="f-device" placeholder="端末名を入力..." />
            <button class="btn-primary" id="add-preset-btn">追加</button>
          </div>
          <div class="preset-list" id="preset-container">
            ${b(e)}
          </div>
        </div>
      </section>
    </div>
  `}function b(e){return e.map(e=>`
    <span class="device-chip" data-value="${n(e)}">
      ${n(e)}
      <span class="remove-chip" data-value="${n(e)}">&times;</span>
    </span>
  `).join(``)}function x(){return`
    <div class="modal-overlay" id="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="modal-title">アカウント登録</h2>
          <button class="close-modal" id="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>アカウント名</label>
            <input type="text" id="f-name" placeholder="メイン、サブ1 など" />
          </div>
          <div class="form-group">
            <label>モンスト ID</label>
            <input type="text" id="f-monst-id" placeholder="123456789" />
          </div>
          <div class="form-group">
            <label>MIXI ID（メールアドレス）</label>
            <input type="text" id="f-mixi-id" placeholder="example@gmail.com" />
          </div>
          <div class="form-group">
            <label class="form-check">
              <input type="checkbox" id="f-can-lend" />
              <span>貸しモン可としてマーク</span>
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-primary full" id="save-btn">登録する</button>
        </div>
      </div>
    </div>
  `}function S(){return`
    <div class="modal-overlay" id="device-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="device-modal-title">デバイス登録</h2>
          <button class="close-modal" id="device-modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>デバイス名</label>
            <input type="text" id="d-name" placeholder="メイン端末、サブiPad など" />
          </div>
          <div class="form-group">
            <label>端末タイプ</label>
            <div class="device-type-selector">
              <label class="type-option">
                <input type="radio" name="d-type" value="smartphone" checked />
                <div class="type-card">
                  ${e.smartphone}
                  <span>スマホ</span>
                </div>
              </label>
              <label class="type-option">
                <input type="radio" name="d-type" value="tablet" />
                <div class="type-card">
                  ${e.tablet}
                  <span>タブレット</span>
                </div>
              </label>
              <label class="type-option">
                <input type="radio" name="d-type" value="monitor" />
                <div class="type-card">
                  ${e.monitor}
                  <span>PC</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-primary full" id="device-save-btn">登録する</button>
        </div>
      </div>
    </div>
  `}var C=s.loadAccounts(),w=s.loadDevices(),T=s.loadPresets(),E=s.loadTheme(),D=[],O=``,k=`dashboard`,A=null,j=null;async function M(){let e=!1;C=C.map(n=>(n.id||(n.id=t(),e=!0),n)),e&&s.saveAccounts(C),z(),N();try{D=await(await fetch(`./data/characters.json`)).json()}catch(e){console.error(`キャラクターDB読み込み失敗:`,e)}document.addEventListener(`click`,e=>{e.target.closest(`.char-search-wrap`)||document.querySelectorAll(`.search-dropdown.open`).forEach(e=>e.classList.remove(`open`))})}function N(){let t=document.querySelector(`#app`),n=C.filter(e=>{if(!O)return!0;let t=O.toLowerCase();return e.name.toLowerCase().includes(t)||(e.characters||[]).some(e=>e.name.toLowerCase().includes(t))});t.innerHTML=`
    ${l(k)}
    ${u(k,O,C,E)}
    <main class="main-content">
      ${P(n)}
    </main>
    <button class="fab" id="fab-add" title="アカウントを追加">${e.plus}</button>
    ${x()}
    ${S()}
  `,F()}function P(e){switch(k){case`dashboard`:return d(C,w);case`accounts`:return m(e,O);case`devices`:return h(w,C);case`settings`:return y(T);default:return``}}function F(){let e=document.getElementById(`global-search`);e&&e.addEventListener(`input`,e=>{O=e.target.value,N(),document.getElementById(`global-search`)?.focus()}),document.querySelectorAll(`.nav-item`).forEach(e=>{e.addEventListener(`click`,()=>{k=e.dataset.nav,N()})}),document.getElementById(`theme-toggle`)?.addEventListener(`click`,()=>{E=E===`dark`?`light`:`dark`,s.saveTheme(E),z(),N()}),document.getElementById(`export-btn`)?.addEventListener(`click`,()=>{c.exportData({accounts:C,devices:w,devicePresets:T}),a(`すべてのデータをエクスポートしました`)});let r=document.getElementById(`import-btn`),i=document.getElementById(`import-file`);r?.addEventListener(`click`,()=>i?.click()),i?.addEventListener(`change`,async e=>{let t=e.target.files[0];if(t)try{let e=await c.importData(t);if(e.accounts&&Array.isArray(e.accounts))C=e.accounts,e.devices&&(w=e.devices),e.devicePresets&&(T=e.devicePresets),R(),a(`すべてのデータをインポートしました`);else if(Array.isArray(e))C=e,s.saveAccounts(C),N(),a(`アカウント情報をインポートしました`);else throw Error(`Invalid format`)}catch(e){alert(e.message)}}),document.getElementById(`fab-add`)?.addEventListener(`click`,I),document.getElementById(`modal-close`)?.addEventListener(`click`,L),document.getElementById(`modal`)?.addEventListener(`click`,e=>{e.target.id===`modal`&&L()}),document.getElementById(`save-btn`)?.addEventListener(`click`,()=>{let e=document.getElementById(`f-name`)?.value.trim();if(!e)return;let n=document.getElementById(`f-monst-id`)?.value.trim()||``,r=document.getElementById(`f-mixi-id`)?.value.trim()||``,i=document.getElementById(`f-can-lend`)?.checked||!1;A===null?(C.push({id:t(),name:e,monstId:n,mixiId:r,canLend:i,device:``,characters:[]}),a(`追加しました`)):(C[A]={...C[A],name:e,monstId:n,mixiId:r,canLend:i},a(`更新しました`)),s.saveAccounts(C),L(),N()}),document.querySelectorAll(`.edit-account`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index);A=t;let n=C[t];document.getElementById(`modal`)?.classList.add(`visible`),document.getElementById(`modal-title`).textContent=`アカウント編集`,document.getElementById(`save-btn`).textContent=`更新する`,document.getElementById(`f-name`).value=n.name,document.getElementById(`f-monst-id`).value=n.monstId||``,document.getElementById(`f-mixi-id`).value=n.mixiId||``,document.getElementById(`f-can-lend`).checked=!!n.canLend})}),document.querySelectorAll(`.delete-account`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index);confirm(`「${C[t].name}」を削除しますか？`)&&(C.splice(t,1),s.saveAccounts(C),N())})}),document.querySelectorAll(`.copy-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.copy;navigator.clipboard.writeText(t).then(()=>{a(`コピーしました`)})})}),document.querySelectorAll(`.char-search-input`).forEach(e=>{e.addEventListener(`input`,e=>{let t=e.target.value.toLowerCase(),r=e.target.dataset.index,i=document.getElementById(`dropdown-${r}`);if(!i)return;if(t.length<1){i.classList.remove(`open`);return}let a=D.filter(e=>e.name.toLowerCase().includes(t)).slice(0,10);if(a.length===0){i.classList.remove(`open`);return}i.innerHTML=`
        <div class="dropdown-list">
          ${a.map(e=>`
            <div class="dropdown-item" data-id="${e.id}">
              <input type="checkbox" value="${e.id}" data-name="${n(e.name)}" id="cb-${r}-${e.id}" />
              <img src="https://img.gamewith.jp/article_tools/monst/gacha/${e.id}.jpg" class="dropdown-icon" />
              <label class="dropdown-name" for="cb-${r}-${e.id}">${n(e.name)}</label>
            </div>
          `).join(``)}
        </div>
        <button class="dropdown-add-btn">選択したキャラを追加</button>
      `,i.classList.add(`open`),i.querySelector(`.dropdown-add-btn`)?.addEventListener(`click`,()=>{Array.from(i.querySelectorAll(`input[type="checkbox"]:checked`)).forEach(e=>{C[r].characters.some(t=>t.id===e.value)||C[r].characters.push({id:e.value,name:e.dataset.name})}),s.saveAccounts(C),N()})})}),document.querySelectorAll(`.remove-char`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.acc,r=e.dataset.ci;C[n].characters.splice(r,1),s.saveAccounts(C),N()})}),document.querySelectorAll(`.char-icon-wrapper`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.acc,n=e.dataset.ci;if(t!==void 0&&n!==void 0){let e=C[t].characters[n];e.favorite=!e.favorite,s.saveAccounts(C),N()}})}),document.getElementById(`add-device-btn`)?.addEventListener(`click`,()=>{j=null,document.getElementById(`device-modal`)?.classList.add(`visible`)}),document.getElementById(`device-modal-close`)?.addEventListener(`click`,()=>{document.getElementById(`device-modal`)?.classList.remove(`visible`)}),document.getElementById(`device-save-btn`)?.addEventListener(`click`,()=>{let e=document.getElementById(`d-name`)?.value.trim();if(!e)return;let n=document.querySelector(`input[name="d-type"]:checked`)?.value||`smartphone`;j===null?w.push({id:t(),name:e,type:n,slots:[]}):(w[j].name=e,w[j].type=n),s.saveDevices(w),N(),document.getElementById(`device-modal`)?.classList.remove(`visible`)}),document.querySelectorAll(`.edit-device`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index);j=t;let n=w[t];document.getElementById(`device-modal`)?.classList.add(`visible`),document.getElementById(`d-name`).value=n.name;let r=document.querySelector(`input[name="d-type"][value="${n.type||`smartphone`}"]`);r&&(r.checked=!0)})}),document.querySelectorAll(`.delete-device`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.index;confirm(`削除しますか？`)&&(w.splice(t,1),s.saveDevices(w),N())})}),document.querySelectorAll(`.add-slot-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.index,r=prompt(`アプリ名:`);r&&(w[n].slots.push({id:t(),name:r,accountId:null}),s.saveDevices(w),N())})}),document.querySelectorAll(`.slot-item.empty`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.di,n=e.dataset.si,r=document.createElement(`div`);r.id=`temp-selector-container`,r.innerHTML=v(t,n,w,C),document.body.appendChild(r),r.querySelector(`.close-selector`)?.addEventListener(`click`,()=>r.remove()),r.querySelectorAll(`.sel-item`).forEach(e=>{e.addEventListener(`click`,()=>{let i=e.dataset.accId;w[t].slots[n].accountId=i;let a=C.find(e=>e.id===i);a&&(a.device=w[t].name),R(),r.remove()})})})}),document.querySelectorAll(`.eject-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.di,r=e.dataset.si,i=C.find(e=>e.id===w[n].slots[r].accountId);i&&(i.device=``),w[n].slots[r].accountId=null,R()})}),document.getElementById(`add-preset-btn`)?.addEventListener(`click`,()=>{let e=document.getElementById(`f-device`)?.value.trim();if(e&&!T.includes(e)){T.push(e),s.savePresets(T);let t=document.getElementById(`preset-container`);t&&(t.innerHTML=b(T)),document.getElementById(`f-device`).value=``}}),document.querySelectorAll(`.remove-chip`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.value;T=T.filter(e=>e!==n),s.savePresets(T);let r=document.getElementById(`preset-container`);r&&(r.innerHTML=b(T))})})}function I(){A=null,document.getElementById(`modal`)?.classList.add(`visible`),document.getElementById(`modal-title`).textContent=`アカウント登録`,document.getElementById(`save-btn`).textContent=`登録する`,[`f-name`,`f-monst-id`,`f-mixi-id`].forEach(e=>{let t=document.getElementById(e);t&&(t.value=``)}),document.getElementById(`f-can-lend`).checked=!1}function L(){document.getElementById(`modal`)?.classList.remove(`visible`)}function R(){s.saveAccounts(C),s.saveDevices(w),s.savePresets(T),N()}function z(){document.body.classList.toggle(`light-mode`,E===`light`)}M();