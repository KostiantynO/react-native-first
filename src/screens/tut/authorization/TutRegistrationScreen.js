import { useContext, useState } from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';

import { types, theme, UI } from 'common';
import { appCtx } from 'context';

const images = {
  tutBg: require('assets/images/stars-on-night.jpg'),
};

const { tutNickname, tutEmail, tutPassword, tutRegistration } = types;

const styles = StyleSheet.create({
  tut: {
    flex: 1,
  },

  container: {
    paddingVertical: 36,
  },

  scrollView: {
    backgroundColor: theme.colors.transparent,
  },

  image: {
    position: 'absolute',
    zIndex: -1,
    flex: 1,
    resizeMode: 'cover',
  },

  text: {
    color: theme.colors.green,
    fontSize: 30,
  },

  innerBox: {
    borderWidth: 1,
    borderColor: theme.colors.red,
    padding: 40,
    borderRadius: 10,
    width: 300,
  },

  form: {
    marginHorizontal: 40,
    marginBottom: 20,
    maxWidth: 480,
    minWidth: 300,
  },

  inputTitle: {
    marginBottom: 10,
    fontSize: 18,
    color: theme.dark.main.fg,
  },

  field: { marginTop: 20 },

  input: {
    borderWidth: 1,
    borderColor: theme.dark.main.fg,
    marginHorizontal: 20,
    borderRadius: 6,
    color: theme.dark.main.fg,
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontSize: 21,
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 40,
    marginHorizontal: 40,

    borderRadius: 6,
    borderWidth: 1,

    ...Platform.select({
      ios: {
        backgroundColor: theme.colors.transparent,
        borderColor: theme.dark.main.fg,
      },
      android: {
        backgroundColor: theme.colors.royalBlue,
        borderColor: theme.colors.transparent,
      },
      default: {
        backgroundColor: theme.colors.royalBlue,
        borderColor: theme.colors.transparent,
      },
    }),
  },

  btnLabel: {
    fontSize: 21,
    color: Platform.OS === 'ios' ? theme.colors.royalBlue : theme.dark.main.fg,
  },

  header: {
    alignItems: 'center',
    marginBottom: 100,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: '400',
    color: theme.dark.main.fg,
    fontFamily: theme.fonts.roboto.regular,
  },
});

const INITIAL_STATE = '';

export const TutRegistrationScreen = () => {
  const { width, height, dispatch } = useContext(appCtx);
  const [nickname, setNickname] = useState(INITIAL_STATE);
  const [email, setEmail] = useState(INITIAL_STATE);
  const [password, setPassword] = useState(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_STATE);

  if (error) {
    return <Text>{UI.fallback}</Text>;
  }

  const handleSubmit = async () => {
    // Keyboard.dismiss();
    try {
      await dispatch({
        type: tutRegistration,
        payload: {
          [tutNickname]: nickname,
          [tutEmail]: email,
          [tutPassword]: password,
        },
      });

      setNickname(INITIAL_STATE);
      setEmail(INITIAL_STATE);
      setPassword(INITIAL_STATE);
    } catch (error) {
      setError(error);
    }
  };

  const bgImageDynamic = [styles.image, { width, height }];

  // const isEmail = email.trim().length < 1 ? 'stranger' : email + '!';

  return (
    <View style={styles.tut}>
      <ImageBackground source={images.tutBg} style={bgImageDynamic} />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Hello</Text>
              <Text style={styles.headerTitle}>Sign up to get started</Text>
              {/* <Text style={styles.headerTitle}>Welcome back</Text> */}
            </View>

            <View>
              <Text style={styles.inputTitle}>NICKNAME</Text>

              <TextInput
                value={nickname}
                onChangeText={setNickname}
                style={styles.input}
                textAlign="center"
                textContentType="nickname"
              />
            </View>

            <View>
              <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>

              <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
                textAlign="center"
                textContentType="emailAddress"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.inputTitle}>PASSWORD</Text>

              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={styles.input}
                textAlign="center"
                textContentType="newPassword"
              />
            </View>

            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={handleSubmit}
              >
                <Text style={styles.btnLabel}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
