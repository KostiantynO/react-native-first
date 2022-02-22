// Добавить разметку формы в компонент LoginScreen
import { useContext, useEffect, useState } from 'react';

import {
  ImageBackground,
  // Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import { appCtx } from 'context';
import { types, arch, theme, UI } from 'common';
import { AnimatedLabel } from 'components';

const { hwEmail, hwPassword, hwAuth, hwError, appSelected, appIsLoggedIn } =
  types;

const {
  screens: { hw },
} = arch;

const images = {
  regBg: require('assets/images/mountain-hut.jpg'),
};

const css = StyleSheet.create({
  // ...Platform.select({ ios: {}, android: {} }),

  fallbackView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fallbackText: {
    textAlign: 'center',
  },

  loginScreen: {
    flex: 1,
  },

  imageBackground: {
    position: 'absolute',
    flex: 1,
    resizeMode: 'cover',
  },

  scrollView: {},

  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'flex-start',

    marginTop: 264,

    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },

  regForm: {
    flex: 1,
    maxWidth: 480,
    minWidth: 375,
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 72,

    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  formTitle: {
    marginBottom: 32,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  field: {
    position: 'relative',
    justifyContent: 'center',
    marginBottom: 16,
  },

  label: {
    left: 16,
    position: 'absolute',
    fontSize: 16,
    // top: -28,
    lineHeight: 19,
    color: theme.colors.lightLighterGrey,
  },

  input: {
    height: 50,
    paddingHorizontal: 16,
    color: theme.dark.main.bg,
    backgroundColor: theme.colors.darkWhite,
    borderWidth: 1,
    borderColor: theme.colors.lightLightGrey,
    borderRadius: 8,
  },

  // registrationBtn: {
  //   alignItems: 'center',
  //   alignContent: 'center',
  //   paddingVertical: 16,
  //   paddingHorizontal: 32,
  //   backgroundColor: theme.colors.orange,
  //   borderRadius: 100,
  // },

  // registrationBtnLabel: {
  //   color: theme.colors.white,
  //   fontFamily: theme.fonts.roboto.regular,
  //   fontSize: 16,
  //   lineHeight: 19,
  // },
});

export const labelTransitionValues = {
  top: -24,
  bottom: 0,
};

const INITIAL_STATE = Object.freeze({
  emptyString: '',
  error: null,
  focused: {
    [hwEmail]: false,
    [hwPassword]: false,
  },
});

export const LoginScreen = () => {
  // { hwEmail, isLoggedIn, dispatch }
  const appState = useContext(appCtx);
  const [mail, setMail] = useState(
    appState[appIsLoggedIn] ? appState[hwEmail] : INITIAL_STATE.emptyString,
  );
  const [pass, setPass] = useState(
    appState[appIsLoggedIn] ? appState[hwPassword] : INITIAL_STATE.emptyString,
  );
  const [err, setErr] = useState(INITIAL_STATE.error);
  const [focused, setFocused] = useState(INITIAL_STATE.focused);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    return () => {
      setMail(INITIAL_STATE.emptyString);
      setPass(INITIAL_STATE.emptyString);
      setFocused(INITIAL_STATE.focused);
      setErr(INITIAL_STATE.error);
    };
  }, []);

  if (err) {
    return (
      <View style={css.fallbackView}>
        <Text style={css.fallback}>{UI.fallback}</Text>;
      </View>
    );
  }

  const handleLogin = async () => {
    try {
      await appState.dispatch({
        type: hwAuth,
        payload: { [hwEmail]: mail, [hwPassword]: pass },
      });
      /* [hwLogin]: loginName, */

      await appState.onLogin();

      setMail(INITIAL_STATE.emptyString);
      setPass(INITIAL_STATE.emptyString);
      setErr(INITIAL_STATE.error);
    } catch (error) {
      setErr(error);
      appState.dispatch({ type: hwError, payload: error });
    }
  };

  const navToSignUp = () => {
    appState.dispatch({ type: appSelected, payload: hw.registrationScreen });
  };

  const dynamicBgImage = [css.imageBackground, { width, height }];

  const setIsBlurred = elem => {
    setFocused(state => ({ ...state, [elem]: false }));
  };

  const setIsFocused = elem => {
    setFocused(state => ({ ...state, [elem]: true }));
  };

  const isFocused = ({ label, value }) =>
    focused[label] || value ? true : false;

  const dynamicLabel = ({ label, value }) => [
    css.label,
    {
      transform: [{ translateY: isFocused({ label, value }) ? -32 : 0 }],
    },
  ];

  return (
    <View style={css.loginScreen}>
      <ImageBackground style={dynamicBgImage} source={images.regBg} />

      <ScrollView contentContainerStyle={css.scrollView}>
        <View style={css.container}>
          <View style={css.regForm}>
            <Text style={css.formTitle}>Sign in</Text>

            <View style={css.field}>
              <TextInput
                value={mail}
                onChangeText={setMail}
                style={css.input}
                maxLength={40}
                // placeholder="Email"
                autoComplete="email"
                textContentType="emailAddress"
                onBlur={() => setIsBlurred(hwEmail)}
                onFocus={() => setIsFocused(hwEmail)}
              />

              <AnimatedLabel
                isFocusedElem={isFocused({ label: hwEmail, value: mail })}
                animValues={labelTransitionValues}
                style={dynamicLabel({ label: hwEmail, value: mail })}
                initValue={0}
              >
                <Text style={css.animatedText}>Email</Text>
              </AnimatedLabel>
            </View>

            <View style={css.field}>
              <TextInput
                value={pass}
                onChangeText={setPass}
                style={css.input}
                secureTextEntry={true}
                maxLength={40}
                // placeholder="Password"
                autoComplete="password"
                textContentType="password"
                onBlur={() => setIsBlurred(hwPassword)}
                onFocus={() => setIsFocused(hwPassword)}
                placeholderTextColor={theme.colors.lightLighterGrey}
              />

              <AnimatedLabel
                isFocusedElem={isFocused({ label: hwPassword, value: pass })}
                animValues={labelTransitionValues}
                style={dynamicLabel({ label: hwPassword, value: pass })}
                initValue={0}
              >
                <Text style={css.animatedText}>Password</Text>
              </AnimatedLabel>
            </View>

            <View>
              <TouchableOpacity
                style={css.registrationBtn}
                onPress={handleLogin}
              >
                <Text style={css.registrationBtnLabel}>Create account</Text>
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ marginRight: 12 }}>Do not have an account?</Text>

                <TouchableOpacity
                  style={css.registrationBtn}
                  onPress={navToSignUp}
                >
                  <Text>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
