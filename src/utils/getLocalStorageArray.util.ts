export const getLocalStorageArray = (key: string) => JSON.parse(localStorage.getItem(key) || "[]");
