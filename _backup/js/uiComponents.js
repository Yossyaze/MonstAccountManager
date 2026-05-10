export const UIComponents = {
  createAccountCard(account, characterDB, onEdit, onDelete) {
    const card = document.createElement('div');
    card.className = 'account-card';
    
    const characters = account.characters 
      ? account.characters.split(',').map(s => s.trim()).filter(s => s) 
      : [];

    const charData = characters.map(name => {
      const found = characterDB.find(c => c.name === name);
      return found || { name, iconUrl: null };
    });

    card.innerHTML = `
      <div class="card-header">
        <div class="account-name">${this.escape(account.name)}</div>
        <span class="badge ${account.isKashimon ? 'badge-success' : 'badge-neutral'}">
          ${account.isKashimon ? '貸しモン可' : '貸しモン不可'}
        </span>
      </div>
      <div class="card-info">
        <div class="info-item">
          <span class="info-label">MIXI ID</span>
          <div class="value-with-copy">
            <span class="info-value">${this.escape(account.mixiId)}</span>
            <button class="copy-btn" data-copy="${account.mixiId}" title="コピー">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        </div>
        <div class="info-item">
          <span class="info-label">モンスト ID</span>
          <div class="value-with-copy">
            <span class="info-value">${this.formatId(account.monstId)}</span>
            <button class="copy-btn" data-copy="${account.monstId}" title="コピー">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        </div>
        <div class="info-item">
          <span class="info-label">アプリ / 端末</span>
          <span class="info-value">${this.escape(account.appName)} / ${this.escape(account.device)}</span>
        </div>
      </div>
      <div class="characters-section">
        <span class="info-label">主な所持キャラ</span>
        <div class="character-tags">
          ${charData.length > 0 
            ? charData.map(char => `
                <span class="char-tag">
                  ${char.iconUrl ? `<img src="${char.iconUrl}" alt="${char.name}" onerror="this.style.display='none'">` : ''}
                  <span>${this.escape(char.name)}</span>
                </span>
              `).join('') 
            : '<span class="text-muted" style="font-size: 0.8rem;">未登録</span>'}
        </div>
      </div>
      <div class="card-actions">
        <button class="action-btn edit-btn">編集</button>
        <button class="action-btn delete delete-btn">削除</button>
      </div>
    `;

    card.querySelector('.edit-btn').addEventListener('click', () => onEdit(account));
    card.querySelector('.delete-btn').addEventListener('click', () => {
      if (confirm(`「${account.name}」を削除してもよろしいですか？`)) {
        onDelete(account.id);
      }
    });

    return card;
  },

  formatId(id) {
    if (!id) return '';
    const cleanId = id.toString().replace(/\D/g, '');
    return cleanId.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  async fetchCharacters() {
    try {
      const response = await fetch('/data/characters.json');
      if (!response.ok) throw new Error('Failed to load characters');
      return await response.json();
    } catch (error) {
      console.error('Character database error:', error);
      return [];
    }
  },

  createSuggestionItem(character, onClick) {
    const div = document.createElement('div');
    div.className = 'suggestion-item';
    div.innerHTML = `
      <img src="${character.iconUrl}" alt="${character.name}" onerror="this.src='https://via.placeholder.com/36?text=?'">
      <span>${character.name}</span>
    `;
    div.addEventListener('click', () => onClick(character));
    return div;
  },

  createCharChip(character, onRemove) {
    const div = document.createElement('div');
    div.className = 'char-chip';
    div.innerHTML = `
      <img src="${character.iconUrl}" alt="${character.name}" onerror="this.style.display='none'">
      <span>${this.escape(character.name)}</span>
      <button type="button" class="remove-btn">&times;</button>
    `;
    div.querySelector('.remove-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      onRemove();
    });
    return div;
  },

  escape(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};
