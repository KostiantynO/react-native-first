export const save = (key, item) => {
  try {
    localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error(error);
  }
};

export const load = key => {
  try {
    const serializedObj = localStorage.getItem(key);
    return serializedObj ? JSON.parse(serializedObj) : undefined;
  } catch (error) {
    console.error(error);
  }
};
