import { ICONS } from '../constants/icons.js';
import { esc, totalChars } from '../utils/helpers.js';

export function renderDashboardView(accounts, devices) {
  const favoriteChars = accounts.flatMap(a => 
    (a.characters || [])
      .filter(c => c.favorite)
      .map(c => ({ ...c, accountName: a.name }))
  );

  const totalSlots = devices.reduce((sum, d) => sum + (d.slots?.length || 0), 0);
  const occupiedSlots = devices.reduce((sum, d) => sum + (d.slots?.filter(s => s.accountId)?.length || 0), 0);

  return `
    <div class="dashboard-view">
      <div class="stats-grid">
        <div class="stat-card-premium purple">
          <div class="stat-icon">${ICONS.accounts}</div>
          <div class="stat-info">
            <span class="stat-label">総アカウント</span>
            <span class="stat-value-big">${accounts.length}</span>
          </div>
        </div>
        <div class="stat-card-premium amber">
          <div class="stat-icon">${ICONS.star}</div>
          <div class="stat-info">
            <span class="stat-label">総所持キャラ</span>
            <span class="stat-value-big">${totalChars(accounts)}</span>
          </div>
        </div>
        <div class="stat-card-premium green">
          <div class="stat-icon">${ICONS.star}</div>
          <div class="stat-info">
            <span class="stat-label">重要キャラ</span>
            <span class="stat-value-big">${favoriteChars.length}</span>
          </div>
        </div>
        <div class="stat-card-premium blue">
          <div class="stat-icon">${ICONS.devices}</div>
          <div class="stat-info">
            <span class="stat-label">スロット稼働</span>
            <span class="stat-value-big">${occupiedSlots}<small>/${totalSlots}</small></span>
          </div>
        </div>
      </div>

      <div class="dashboard-grid">
        <!-- 重要キャラギャラリー -->
        <section class="dashboard-section gallery">
          <div class="section-header">
            <h3>重要キャラ（お気に入り）</h3>
            <div class="section-badge">${favoriteChars.length}</div>
          </div>
          <div class="lendable-gallery">
            ${favoriteChars.length === 0 ? `
              <div class="empty-placeholder">
                <p>お気に入り登録されたキャラはいません</p>
                <small>アカウント一覧の各キャラを長押し（またはクリック）で登録できます</small>
              </div>
            ` : favoriteChars.map(c => `
              <div class="lend-item" title="${esc(c.name)} (${esc(c.accountName)})">
                <img src="https://img.gamewith.jp/article_tools/monst/gacha/${c.id}.jpg" class="lend-icon" onerror="this.src='https://img.gamewith.jp/article_tools/monst/gacha/1.jpg'" />
                <div class="lend-owner">${esc(c.accountName)}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- デバイスサマリー -->
        <section class="dashboard-section device-summary">
          <div class="section-header">
            <h3>デバイス稼働状況</h3>
          </div>
          <div class="device-usage-list">
            ${devices.length === 0 ? `
              <div class="empty-placeholder">
                <p>登録されたデバイスはありません</p>
              </div>
            ` : devices.map(d => {
              const occ = d.slots?.filter(s => s.accountId)?.length || 0;
              const tot = d.slots?.length || 0;
              const per = tot > 0 ? (occ / tot) * 100 : 0;
              return `
                <div class="device-usage-item">
                  <div class="usage-info">
                    <span class="usage-name">${esc(d.name)}</span>
                    <span class="usage-count">${occ}/${tot}</span>
                  </div>
                  <div class="usage-bar-bg">
                    <div class="usage-bar-fill" style="width: ${per}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>
      </div>
    </div>
  `;
}
