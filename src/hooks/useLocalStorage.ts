
export const useLocalStorage = (key: string) => {
    const getItem = () => {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    };
  
    const setItem = (value: unknown) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    };
  
    return { getItem, setItem };
  };