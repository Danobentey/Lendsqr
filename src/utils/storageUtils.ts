const storageUtils = {
  getFromLocalStorage: (key: string) => {
    const itemInStorage = localStorage.getItem(key);
    return itemInStorage ?? null;
  },

  getParsedFromLocalStorage: (key: string) => {
    const itemInStorage = localStorage.getItem(key);
    return itemInStorage ? JSON.parse(itemInStorage) : null;
  },
};

export default storageUtils;
