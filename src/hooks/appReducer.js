import { actions } from 'common';

const {
  auth,
  registration,
  selected,
  login,
  email,
  password,
  appIsReady,
  error,
  isKeyboardOpen,
  increment,
  decrement,
  stateNames: { count },
} = actions;

export const appReducer = (state, { type, payload }) =>
  ({
    [auth]: () => ({
      ...state,
      [email]: payload[email],
      [password]: payload[password],
    }),
    [registration]: () => ({
      ...state,
      [login]: payload[login],
      [email]: payload[email],
      [password]: payload[password],
    }),
    [selected]: () => ({ ...state, [selected]: payload }),
    [appIsReady]: () => ({ ...state, [appIsReady]: payload }),
    [login]: () => ({ ...state, [login]: payload }),
    [email]: () => ({ ...state, [email]: payload }),
    [password]: () => ({ ...state, [password]: payload }),
    [increment]: () => ({ ...state, [count]: state[count] + payload }),
    [decrement]: () => ({ ...state, [count]: state[count] - payload }),
    [error]: () => ({ ...state, [error]: payload }),
    [isKeyboardOpen]: () => ({ ...state, [isKeyboardOpen]: payload }),
  }[type]());
