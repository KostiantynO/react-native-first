import { useReducer } from 'react';
import {
  StyleSheet,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import { appReducer, useKeyboardShown, useLoadAssets } from 'hooks';
import { actions, theme } from 'common';
import { appCtx } from 'context';
import { NavBar, My, Tut } from 'components';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: theme.dark.main.bg,
  },
});

const {
  stateNames,
  selected,
  username,
  password,
  appIsReady,
  error,
  keyboardStatus,
} = actions;

const INITIAL_STATE = Object.freeze({
  [selected]: stateNames.tutorial,
  [username]: '',
  [password]: '',
  [appIsReady]: false,
  [error]: false,
  [stateNames.count]: 0,
  [keyboardStatus]: undefined,
});

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, { ...INITIAL_STATE });
  useLoadAssets(dispatch);
  useKeyboardShown(dispatch);

  if (!state.appIsReady) return <AppLoading />;

  const onLogin = () =>
    Alert.alert(
      'Credentials',
      state.username && state.password
        ? `${state.username} + ${state.password}`
        : 'Please enter email and password'
    );

  const { width, height } = Dimensions.get('window');
  const isMy = state.selected && state.selected === stateNames.my;
  const isTut = state.selected && state.selected === stateNames.tutorial;

  const appState = { ...state, dispatch, width, height, onLogin };

  const iOS = Platform.OS === 'ios' ? 'padding' : '';

  return (
    <KeyboardAvoidingView style={styles.app} behavior={iOS}>
      <appCtx.Provider value={appState}>
        <NavBar />
        {isMy && <My />}
        {isTut && <Tut />}
      </appCtx.Provider>
    </KeyboardAvoidingView>
  );
};

registerRootComponent(App);
