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

import { actions, theme } from 'common';
import { appCtx } from 'context';

const images = {
  tutBg: require('assets/images/stars-on-night.jpg'),
};

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
      default: {},
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

export const Tut = () => {
  const { width, height, dispatch } = useContext(appCtx);
  const [email, setEmail] = useState(INITIAL_STATE);
  const [password, setPassword] = useState(INITIAL_STATE);

  const handleSubmit = () => {
    // Keyboard.dismiss();

    dispatch({ type: actions.email, payload: email });
    dispatch({ type: actions.password, payload: password });
    setEmail(INITIAL_STATE);
    setPassword(INITIAL_STATE);
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
              <Text style={styles.headerTitle}>Welcome back</Text>
            </View>

            <View>
              <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>

              <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
                textAlign="center"
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.inputTitle}>PASSWORD</Text>

              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={styles.input}
                textAlign="center"
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
