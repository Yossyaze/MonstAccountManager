import { ICONS } from '../constants/icons.js';
import { esc, totalChars } from '../utils/helpers.js';

export function renderHeader(currentNav, searchQuery, accounts, currentTheme) {
  const getPageTitle = (nav) => {
    switch (nav) {
      case 'dashboard': return 'ダッシュボード';
      case 'accounts': return 'アカウント一覧';
      case 'devices': return 'デバイス管理';
      case 'settings': return '設定';
      default: return 'Monst Manager';
    }
  };

  return `
    <header class="top-header">
      <h1 class="page-title">${getPageTitle(currentNav)}</h1>
      <div class="header-search">
        ${ICONS.search}
        <input type="text" id="global-search" placeholder="検索..." value="${esc(searchQuery)}" />
      </div>
      <div class="header-stats">
        <div class="stat-item">
          <div class="stat-value">${accounts.length}</div>
          <div class="stat-label">Accounts</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${totalChars(accounts)}</div>
          <div class="stat-label">Characters</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="btn-header" id="theme-toggle" title="テーマ切り替え">
          ${currentTheme === 'dark' ? ICONS.sun : ICONS.moon}
        </button>
        <button class="btn-header" id="export-btn" title="エクスポート">${ICONS.upload}</button>
        <button class="btn-header" id="import-btn" title="インポート">${ICONS.download}</button>
        <input type="file" id="import-file" accept=".json" style="display: none;" />
      </div>
    </header>
  `;
}
