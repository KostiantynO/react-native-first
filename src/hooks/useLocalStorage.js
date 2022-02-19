import { useState, useEffect } from 'react';
import { load, save } from 'utils';

export const useLocalStorage = (
  key,
  defaultValue,
  serialize = save,
  deserialize = load
) => {
  const [state, setState] = useState(() => deserialize(key) ?? defaultValue);

  useEffect(() => {
    serialize(key, state);
  }, [key, state, serialize]);

  return [state, setState];
};
