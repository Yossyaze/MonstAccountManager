const STORAGE_KEY = 'monst_accounts_v1';

export const AccountService = {
  getAll() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  save(accounts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
  },

  add(account) {
    const accounts = this.getAll();
    const newAccount = {
      ...account,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    accounts.push(newAccount);
    this.save(accounts);
    return newAccount;
  },

  update(id, updatedData) {
    const accounts = this.getAll();
    const index = accounts.findIndex(acc => acc.id === id);
    if (index !== -1) {
      accounts[index] = { ...accounts[index], ...updatedData };
      this.save(accounts);
      return accounts[index];
    }
    return null;
  },

  delete(id) {
    const accounts = this.getAll();
    const filtered = accounts.filter(acc => acc.id !== id);
    this.save(filtered);
  }
};
