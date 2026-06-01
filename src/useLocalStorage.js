import React, { useState, useEffect } from "react";

export function useLocalStorage(key, currentValue) {
  const [value, setValue] = useState(() => {
    const saveData = localStorage.getItem(key);
    return saveData ? JSON.parse(saveData) : currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
}
