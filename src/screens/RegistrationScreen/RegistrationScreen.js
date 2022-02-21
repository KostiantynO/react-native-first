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
import { actions, theme } from 'common';

const images = {
  regBg: require('assets/images/mountain-hut.jpg'),
};

const css = StyleSheet.create({
  ...Platform.select({
    ios: {},
    android: {},
  }),

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

const INITIAL_STATE = '';

export const RegistrationScreen = () => {
  const { dispatch } = useContext(appCtx);
  const [login, setLogin] = useState(INITIAL_STATE);
  const [email, setEmail] = useState(INITIAL_STATE);
  const [password, setPassword] = useState(INITIAL_STATE);
  const { width, height } = useWindowDimensions();

  const addPhoto = () => {
    // upload user avatar from phone
    Alert.alert('Fake Placeholder:\nPlease select photo for avatar');
  };

  const onRegistration = () => {
    dispatch({
      type: actions.registration,
      payload: { login, email, password },
    });

    setLogin(INITIAL_STATE);
    setEmail(INITIAL_STATE);
    setPassword(INITIAL_STATE);
  };

  const dynamicBgImage = [css.imageBackground, { width, height }];

  return (
    <View style={css.registrationScreen}>
      <ImageBackground style={dynamicBgImage} source={images.regBg} />

      <ScrollView contentContainerStyle={css.scrollView}>
        <View style={css.container}>
          <View style={css.regForm}>
            <View style={css.thumb}>
              <View>
                <Image style={css.avatar} />
                <TouchableOpacity style={css.addPhotoBtn} onPress={addPhoto}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={css.formTitle}>Registration</Text>

            <View style={css.field}>
              <TextInput
                value={login}
                onChange={setLogin}
                style={css.input}
                maxLength={40}
                placeholder="Login"
                placeholderTextColor={theme.colors.lightLighterGrey}
              />
              {/* <Text style={css.label}>Login</Text> */}
            </View>

            <View style={css.field}>
              <TextInput
                value={email}
                onChange={setEmail}
                style={css.input}
                maxLength={40}
                placeholder="Email"
                placeholderTextColor={theme.colors.lightLighterGrey}
              />
              {/* <Text style={css.label}>Email</Text> */}
            </View>

            <View style={css.field}>
              <TextInput
                value={password}
                onChange={setPassword}
                style={css.input}
                secureTextEntry={true}
                maxLength={40}
                placeholder="Password"
                placeholderTextColor={theme.colors.lightLighterGrey}
              />
              {/* <Text style={css.label}>Password</Text> */}
            </View>

            <View>
              <TouchableOpacity
                style={css.registrationBtn}
                onPress={onRegistration}
              >
                <Text style={css.registrationBtnLabel}>Create account</Text>
              </TouchableOpacity>

              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginRight: 12 }}>
                  Already have the account?
                </Text>

                <TouchableOpacity
                  style={css.registrationBtn}
                  onPress={addPhoto}
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
