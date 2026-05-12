import { ICONS } from '../constants/icons.js';
import { esc, formatId } from '../utils/helpers.js';

const MAX_VISIBLE_CHARS = 14;

/**
 * アカウントカードをレンダリングします
 */
export function renderCard(account, index) {
  const chars = account.characters || [];
  const visible = chars.slice(0, MAX_VISIBLE_CHARS);
  const overflow = chars.length - MAX_VISIBLE_CHARS;

  return `
    <div class="account-card" data-index="${index}">
      <div class="card-top">
        <div class="account-name">
          ${esc(account.name)}
          ${account.canLend ? `<span class="badge-lendable">貸しモン可</span>` : ''}
        </div>
        <div class="card-actions">
          <button class="btn-action edit-account" data-index="${index}" title="編集">${ICONS.edit}</button>
          <button class="btn-action delete-account" data-index="${index}" title="削除">${ICONS.trash}</button>
        </div>
      </div>

      <div class="card-meta">
        <div class="meta-row">
          <span class="meta-label">Monst ID</span>
          <div class="meta-right">
            <span class="meta-value">${formatId(account.monstId)}</span>
            ${account.monstId ? `<button class="copy-btn" data-copy="${esc(account.monstId)}">${ICONS.copy}</button>` : ''}
          </div>
        </div>
        <div class="meta-row">
          <span class="meta-label">MIXI ID</span>
          <div class="meta-right">
            <span class="meta-value email">${esc(account.mixiId) || '---'}</span>
            ${account.mixiId ? `<button class="copy-btn" data-copy="${esc(account.mixiId)}">${ICONS.copy}</button>` : ''}
          </div>
        </div>
        <div class="meta-row">
          <span class="meta-label">端末</span>
          <div class="meta-right">
            <span class="meta-value device">${esc(account.device) || '---'}</span>
          </div>
        </div>
      </div>

      <div class="char-section">
        <div class="char-search-wrap">
          <input type="text" class="char-search-input" placeholder="キャラを追加..." data-index="${index}" />
          <div class="search-dropdown" id="dropdown-${index}"></div>
        </div>
        <div class="char-grid">
          ${visible.map((c, ci) => `
            <div class="char-icon-wrapper ${c.favorite ? 'favorite' : ''}" data-acc="${index}" data-ci="${ci}" title="${esc(c.name)}${c.favorite ? ' (重要キャラ)' : ''}">
              <img src="https://img.gamewith.jp/article_tools/monst/gacha/${c.id}.jpg" class="char-icon" onerror="this.src='https://img.gamewith.jp/article_tools/monst/gacha/1.jpg'" />
              ${c.favorite ? `<div class="favorite-star">${ICONS.star}</div>` : ''}
              <div class="remove-char" data-acc="${index}" data-ci="${ci}">&times;</div>
            </div>
          `).join('')}
          ${overflow > 0 ? `<div class="char-overflow">+${overflow}</div>` : ''}
        </div>
      </div>
    </div>
  `;
}
