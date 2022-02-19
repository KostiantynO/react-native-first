import {
  useReducer,
  // useRef
} from 'react';

import { StyleSheet, View, Alert, Dimensions } from 'react-native';
import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';

import { appReducer, useKeyboard, useLoadAssets } from 'hooks';
import { actions } from 'common';

import { appCtx } from 'context';
import { NavBar, My, Tut } from 'components';

const AppStyles = StyleSheet.create({
  minimumContainer: {
    paddingVertical: 36,
  },
});

const { stateNames } = actions;

const INITIAL_STATE = Object.freeze({
  selected: stateNames.my,
  name: '',
  password: '',
  appIsReady: false,
  error: false,
  count: 0,
  keyboardStatus: undefined,
});

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, { ...INITIAL_STATE });
  useLoadAssets(dispatch);
  useKeyboard(dispatch);

  if (!state.appIsReady) return <AppLoading />;

  const onLogin = () =>
    Alert.alert('Credentials', `${state.username} + ${state.password}`);

  const { width, height } = Dimensions.get('window');
  const isMy = state.selected && state.selected === stateNames.my;
  const isTut = state.selected && state.selected === stateNames.tutorial;

  const appState = { ...state, dispatch, width, height, onLogin };

  return (
    <appCtx.Provider value={appState}>
      <View style={AppStyles.minimumContainer}>
        <NavBar />
        {isMy && <My />}
        {isTut && <Tut />}
      </View>
    </appCtx.Provider>
  );
};

registerRootComponent(App);
