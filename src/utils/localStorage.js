export const getStorageData = () => {
  const ref = localStorage.getItem("data");
  const storage = ref ? JSON.parse(ref) : null;
  return storage;
};
export const getCurrentLocale = () => {
  const storageData = getStorageData();
  const currentLocale = storageData ? JSON.parse(storageData?.localization || {}) : null;
  return currentLocale;
};
