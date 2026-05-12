import { ICONS } from '../constants/icons.js';
import { renderCard } from './AccountCard.js';

export function renderAccountsView(filteredAccounts, searchQuery) {
  if (filteredAccounts.length === 0) {
    return `
      <div class="empty-state">
        <div class="empty-icon">${ICONS.empty}</div>
        <h3>${searchQuery ? '検索結果が見つかりません' : 'アカウント未登録'}</h3>
        <p>${searchQuery ? '別のキーワードをお試しください' : '右下の＋ボタンから最初のアカウントを追加しましょう'}</p>
      </div>
    `;
  }

  return `
    <div class="account-grid">
      ${filteredAccounts.map((a, i) => renderCard(a, i)).join('')}
    </div>
  `;
}
