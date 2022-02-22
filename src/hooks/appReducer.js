import { types } from 'common';

const {
  appSelected,
  appAppIsReady,
  appIsKeyboardOpen,
  appError,

  tutNickname,
  tutEmail,
  tutPassword,
  tutRegistration,
  tutAuth,
  tutError,

  hwLogin,
  hwEmail,
  hwPassword,
  hwRegistration,
  hwAuth,
  hwError,

  myEmail,
  myPassword,
  myCount,
  myIncrement,
  myDecrement,
} = types;

const simpleStateTypes = [
  appSelected,
  appAppIsReady,
  appIsKeyboardOpen,
  appError,

  tutNickname,
  tutEmail,
  tutPassword,
  tutError,

  hwLogin,
  hwEmail,
  hwPassword,
  hwError,

  myEmail,
  myPassword,
];

const combinedStateTypes = [
  { label: tutRegistration, values: [tutNickname, tutEmail, tutPassword] },
  { label: tutAuth, values: [tutEmail, tutPassword] },
  { label: hwRegistration, values: [hwLogin, hwEmail, hwPassword] },
  { label: hwAuth, values: [hwEmail, hwPassword] },
];

export const appReducer = (state, { type, payload }) => {
  const simpleType =
    simpleStateTypes.find(stateType => stateType === type) ?? 'notSimpleType';
  const combinedType = combinedStateTypes.find(({ label }) => label === type);

  const setSimpleState = typeName => ({ ...state, [typeName]: payload });
  const setCombinedState = combinedTypeValues => ({
    ...state,
    ...combinedTypeValues?.reduce(
      (acc, val) => ({ ...acc, ...{ [val]: payload[val] } }),
      {},
    ),
  });

  return {
    [simpleType]: () => setSimpleState(simpleType),
    [combinedType?.label ?? 'notCombinedType']: () =>
      setCombinedState(combinedType.values),

    [myIncrement]: () => ({ ...state, [myCount]: state[myCount] + payload }),
    [myDecrement]: () => ({ ...state, [myCount]: state[myCount] - payload }),
  }[type]();
};
