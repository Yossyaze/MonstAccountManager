// --- ユーティリティ ---

/**
 * ユニークなIDを生成します
 */
export function generateId() {
  return crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15);
}

/**
 * HTML文字列をエスケープします
 */
export function esc(str) {
  if (!str) return '';
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/**
 * IDをカンマ区切りの読みやすい形式にフォーマットします
 */
export function formatId(id) {
  if (!id) return '---';
  return id.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 全アカウントの合計キャラクター数を計算します
 */
export function totalChars(accounts) {
  return accounts.reduce((sum, a) => sum + (a.characters ? a.characters.length : 0), 0);
}

/**
 * トースト通知を表示します
 */
export function showToast(message, icon = '✓') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span>${esc(message)}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
