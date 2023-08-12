export const getLSItem = (item: string) => {
  const takenFromLS = localStorage.getItem(item);

  if (takenFromLS) {
    return JSON.parse(takenFromLS);
  }
};
export const setLSItem = (key: string, item: any) => {
  const toStringItem = JSON.stringify(item);

  localStorage.setItem(key, toStringItem);

  return null;
};
