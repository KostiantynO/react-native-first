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
import { types, arch, theme } from 'common';

import { appCtx } from 'context';
import { NavBar, My } from 'components';
import {
  LoginScreen,
  RegistrationScreen,
  TutLoginScreen,
  TutRegistrationScreen,
} from 'screens';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 32,
    backgroundColor: theme.dark.main.bg,
  },
});

// prettier-ignore
const { appIsLoggedIn, appSelected, appAppIsReady, appIsKeyboardOpen, appError, tutNickname, tutEmail, tutPassword, hwLogin, hwEmail, hwPassword, myCount, tutError, hwError, myEmail, myPassword
  // tutRegistration, hwRegistration, tutAuth, hwAuth, myIncrement, myDecrement,
} = types;

const {
  screens: { tut, hw, my },
} = arch;

const INITIAL_STATE = Object.freeze({
  [appSelected]: tut.singUpScreen,
  [appIsLoggedIn]: false,
  [appAppIsReady]: false,
  [appError]: null,
  [appIsKeyboardOpen]: false,

  [tutNickname]: '',
  [tutEmail]: '',
  [tutPassword]: '',
  [tutError]: null,

  [hwLogin]: '',
  [hwEmail]: '',
  [hwPassword]: '',
  [hwError]: null,

  [myEmail]: '',
  [myPassword]: '',
  [myCount]: 0,
});

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
  useLoadAssets(dispatch);
  useKeyboardShown(dispatch);
  const { width, height } = useWindowDimensions();

  if (!state.appAppIsReady) return <AppLoading />;

  const isMy = state.appSelected === my.myScreen;
  const isTutSignUp = state.appSelected === tut.singUpScreen;
  const isTutSignIn = state.appSelected === tut.signInScreen;
  const isHwRegistrationScreen = state.appSelected === hw.registrationScreen;
  const isHwLoginScreen = state.appSelected === hw.loginScreen;

  const onLogin = () =>
    // TODO: Remove this
    Alert.alert(
      'Credentials',
      isMy && state.myEmail && state.myPassword
        ? `${state.myEmail} + ${state.myPassword}`
        : isTutSignUp && state.tutEmail && state.tutPassword // eslint-disable-next-line indent
        ? `${state.tutEmail} + ${state.tutPassword}` // eslint-disable-next-line indent
        : isHwRegistrationScreen &&
          state.hwLogin &&
          state.hwEmail &&
          state.hwPassword // eslint-disable-next-line indent
        ? `${state.hwLogin} + ${state.hwEmail} + ${state.hwPassword}` // eslint-disable-next-line indent
        : isHwLoginScreen && state.hwEmail && state.hwPassword // eslint-disable-next-line indent
        ? `${state.hwEmail} + ${state.hwPassword}` // eslint-disable-next-line indent
        : 'Please enter email and password',
    );

  const appState = { ...state, dispatch, width, height, onLogin };
  const ios = Platform.OS === 'ios' ? 'padding' : null;

  return (
    <appCtx.Provider value={appState}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={ios}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.app}>
            <NavBar />
            {isMy && <My />}
            {isTutSignUp && <TutRegistrationScreen />}
            {isTutSignIn && <TutLoginScreen />}
            {isHwRegistrationScreen && <RegistrationScreen />}
            {isHwLoginScreen && <LoginScreen />}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </appCtx.Provider>
  );
};

registerRootComponent(App);
