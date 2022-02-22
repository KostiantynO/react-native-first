import { useContext, useState } from 'react';

import {
  Alert,
  Image,
  ImageBackground,
  Platform,
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
import { labelTransitionValues } from '../LoginScreen';

const {
  screens: { hw },
} = arch;

const { hwLogin, hwEmail, hwPassword, hwRegistration, hwError, appSelected } =
  types;

const images = {
  regBg: require('assets/images/mountain-hut.jpg'),
};

const css = StyleSheet.create({
  ...Platform.select({
    ios: {},
    android: {},
  }),

  fallback: {
    textAlign: 'center',
  },

  registrationScreen: {
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

  thumb: {
    position: 'absolute',
    top: -60,
    right: 0,
    left: 0,

    alignItems: 'center',
  },

  avatar: {
    width: 120,
    height: 120,
    backgroundColor: theme.colors.darkWhite,
    borderRadius: 16,
  },

  addPhotoBtn: {
    position: 'absolute',
    bottom: 12,
    right: -12,

    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,

    backgroundColor: theme.colors.white,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.colors.orange,
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

  registrationBtn: {
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: theme.colors.orange,
    borderRadius: 100,
  },

  registrationBtnLabel: {
    color: theme.colors.white,
    fontFamily: theme.fonts.roboto.regular,
    fontSize: 16,
    lineHeight: 19,
  },
});

const INITIAL_STATE = Object.freeze({
  emptyString: '',
  error: null,
  avatar: 0,
  focused: {
    [hwLogin]: false,
    [hwEmail]: false,
    [hwPassword]: false,
  },
});

export const RegistrationScreen = () => {
  const { dispatch } = useContext(appCtx);
  const [loginName, setLoginName] = useState(INITIAL_STATE.emptyString);
  const [mail, setMail] = useState(INITIAL_STATE.emptyString);
  const [pass, setPass] = useState(INITIAL_STATE.emptyString);
  const [err, setErr] = useState(INITIAL_STATE.error);
  const [avatar, setAvatar] = useState(INITIAL_STATE.avatar);
  const [focused, setFocused] = useState(INITIAL_STATE.focused);
  const { width, height } = useWindowDimensions();

  if (err) {
    return <Text style={css.fallback}>{UI.fallback}</Text>;
  }

  const toggleAvatar = () => {
    // TODO Kostiantyn Ochenash, till 2022-02-23 24:00: Upload user avatar from phone
    !avatar && Alert.alert('Fake Placeholder:\nPlease select photo for avatar');

    const newAvatarFromUpload = require('assets/images/logo-react.png');

    setAvatar(avatar ? INITIAL_STATE.avatar : newAvatarFromUpload);
  };

  const handleRegistration = async () => {
    try {
      await dispatch({
        type: hwRegistration,
        payload: { [hwLogin]: loginName, [hwEmail]: mail, [hwPassword]: pass },
      });

      setLoginName(INITIAL_STATE.emptyString);
      setMail(INITIAL_STATE.emptyString);
      setPass(INITIAL_STATE.emptyString);
      // setErr(INITIAL_STATE.error);
    } catch (error) {
      setErr(error);
      dispatch({ type: hwError, payload: error });
    }
  };

  const navToSignIn = () => {
    dispatch({ type: appSelected, payload: hw.loginScreen });
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
    { color: focused[label] ? theme.dark.accent : theme.dark.main.bg },
    { transform: [{ translateY: isFocused({ label, value }) ? -32 : 0 }] },
  ];
  return (
    <View style={css.registrationScreen}>
      <ImageBackground style={dynamicBgImage} source={images.regBg} />

      <ScrollView contentContainerStyle={css.scrollView}>
        <View style={css.container}>
          <View style={css.regForm}>
            <View style={css.thumb}>
              <View>
                <Image source={avatar} style={css.avatar} />
                <TouchableOpacity
                  style={css.addPhotoBtn}
                  onPress={toggleAvatar}
                >
                  <Text>{avatar ? 'x' : '+'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={css.formTitle}>Registration</Text>

            <View style={css.field}>
              <TextInput
                value={loginName}
                onChangeText={setLoginName}
                style={css.input}
                maxLength={40}
                textContentType="username"
                autoComplete="username-new"
                onBlur={() => setIsBlurred([hwLogin])}
                onFocus={() => setIsFocused([hwLogin])}
              />

              <AnimatedLabel
                isFocusedElem={isFocused({ label: hwLogin, value: loginName })}
                animValues={labelTransitionValues}
                style={dynamicLabel({ label: hwLogin, value: loginName })}
                initValue={0}
              >
                <Text style={css.animatedText}>Login</Text>
              </AnimatedLabel>
            </View>

            <View style={css.field}>
              <TextInput
                value={mail}
                onChangeText={setMail}
                style={css.input}
                maxLength={40}
                textContentType="emailAddress"
                autoComplete="email"
                onBlur={() => setIsBlurred([hwEmail])}
                onFocus={() => setIsFocused([hwEmail])}
              />
              <Text style={dynamicLabel([hwEmail])}>Email</Text>
            </View>

            <View style={css.field}>
              <TextInput
                value={pass}
                onChangeText={setPass}
                style={css.input}
                secureTextEntry={true}
                maxLength={40}
                textContentType="newPassword"
                autoComplete="password-new"
                onBlur={() => setIsBlurred([hwPassword])}
                onFocus={() => setIsFocused([hwPassword])}
              />
              <Text style={dynamicLabel([hwPassword])}>Password</Text>
            </View>

            <View>
              <TouchableOpacity
                style={css.registrationBtn}
                onPress={handleRegistration}
              >
                <Text style={css.registrationBtnLabel}>Create account</Text>
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ marginRight: 12 }}>
                  Already have the account?
                </Text>

                <TouchableOpacity
                  style={css.registrationBtn}
                  onPress={navToSignIn}
                >
                  <Text>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
