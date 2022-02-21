import { useReducer } from 'react';
import {
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import { appReducer, useKeyboardShown, useLoadAssets } from 'hooks';
import { actions, theme } from 'common';
import { appCtx } from 'context';
import { NavBar, My, Tut } from 'components';
import { LoginScreen, RegistrationScreen } from 'screens';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 32,
    backgroundColor: theme.dark.main.bg,
  },
});

const {
  stateNames,
  selected,
  email,
  password,
  appIsReady,
  error,
  isKeyboardOpen,
} = actions;

const INITIAL_STATE = Object.freeze({
  [selected]: stateNames.RegistrationScreen,
  [email]: '',
  [password]: '',
  [appIsReady]: false,
  [error]: false,
  [stateNames.count]: 0,
  [isKeyboardOpen]: false,
});

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
  useLoadAssets(dispatch);
  useKeyboardShown(dispatch);
  const { width, height } = useWindowDimensions();

  if (!state.appIsReady) return <AppLoading />;

  const onLogin = () =>
    Alert.alert(
      'Credentials',
      state.email && state.password
        ? `${state.email} + ${state.password}`
        : 'Please enter email and password',
    );

  const isMy = state.selected === stateNames.my;
  const isTut = state.selected === stateNames.tutorial;
  const isRegistrationScreen = state.selected === stateNames.RegistrationScreen;
  const isLoginScreen = state.selected === stateNames.LoginScreen;

  const appState = { ...state, dispatch, width, height, onLogin };
  const ios = Platform.OS === 'ios' ? 'padding' : null;

  return (
    <appCtx.Provider value={appState}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={ios}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.app}>
            <NavBar />
            {isMy && <My />}
            {isTut && <Tut />}
            {isRegistrationScreen && <RegistrationScreen />}
            {isLoginScreen && <LoginScreen />}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </appCtx.Provider>
  );
};

registerRootComponent(App);
