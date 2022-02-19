import { actions } from 'common';

const {
  selected,
  increment,
  decrement,
  username,
  password,
  appIsReady,
  error,
  isKeyboardOpen,
  stateNames: { count },
} = actions;

export const appReducer = (state, { type, payload }) =>
  ({
    [selected]: () => ({ ...state, [selected]: payload }),
    [appIsReady]: () => ({ ...state, [appIsReady]: payload }),
    [password]: () => ({ ...state, [password]: payload }),
    [username]: () => ({ ...state, [username]: payload }),
    [increment]: () => ({ ...state, [count]: state[count] + payload }),
    [decrement]: () => ({ ...state, [count]: state[count] - payload }),
    [error]: () => ({ ...state, [error]: payload }),
    [isKeyboardOpen]: () => ({ ...state, [isKeyboardOpen]: payload }),
  }[type]());
