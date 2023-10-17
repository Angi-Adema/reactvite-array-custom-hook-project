import { useState, useCallback } from "react";

export function useArray(initValue) {
  const [array, setArray] = useState(initValue);

  const push = useCallback((index) => {
    setArray((array) => [...array, index]);
  }, []);

  const replace = useCallback((index, newValue) => {
    setArray((array) => {
      return [...array.slice(0, index), newValue, ...array.slice(index + 1)];
    });
  }, []);

  const filter = useCallback((callback) => {
    setArray((array) => array.filter(callback));
  }, []);

  const remove = useCallback((index) => {
    setArray((array) => {
      return [...array.slice(0, index), ...array.slice(index + 1)];
    });
  }, []);

  const clear = useCallback(() => {
    setArray(() => []);
  }, []);

  const reset = useCallback(() => {
    setArray(() => initValue);
  }, [initValue]);

  return { array, set: setArray, push, replace, filter, remove, clear, reset };
}
