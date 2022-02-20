import { useContext, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  // Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { actions, theme } from 'common';
import { appCtx } from 'context';
import { IMAGES } from 'assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.dark.main.bg,
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

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: theme.dark.main.fg,
    // marginHorizontal: 20,
    borderRadius: 6,
    color: theme.dark.main.fg,
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontSize: 21,
  },
  form: {
    marginHorizontal: 20,
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
    marginHorizontal: 20,

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
    marginBottom: 0,
  },
  headerTitle: {
    fontSize: 30,
    color: theme.dark.main.fg,
  },
});

const INITIAL_STATE = '';

export const Tut = () => {
  const { isKeyboardOpen, dispatch } = useContext(appCtx);
  const [username, setUsername] = useState(INITIAL_STATE);
  const [password, setPassword] = useState(INITIAL_STATE);

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    hideKeyboard();

    dispatch({ type: actions.username, payload: username });
    dispatch({ type: actions.password, payload: password });
    setUsername(INITIAL_STATE);
    setPassword(INITIAL_STATE);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <ImageBackground source={IMAGES.tutBgImage} style={styles.image}>
          <View
            style={{
              ...styles.form,
              marginBottom: isKeyboardOpen ? 0 : 150,
            }}
          >
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Hello again</Text>
              <Text style={styles.headerTitle}>Welcome back</Text>
            </View>

            <View>
              <Text style={styles.inputTitle}>
                EMAIL ADDRESS {`${isKeyboardOpen}`}
              </Text>

              <TextInput
                value={username}
                onChangeText={setUsername}
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
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};
