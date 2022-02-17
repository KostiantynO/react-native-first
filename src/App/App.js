import {
  useReducer,
  // useRef
} from 'react';

import {
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TextInput,
  Alert,
  Button,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';

import { actions } from 'src/common';
import { appReducer, useKeyboard, useLoadAssets } from 'src/hooks';
import AppLoading from 'expo-app-loading';
import { Cat, ClassCat } from 'src/components';
import { styles } from './App.styles';

const INITIAL_STATE = Object.freeze({
  name: '',
  password: '',
  appIsReady: false,
  error: false,
  count: 0,
  keyboardStatus: undefined,
});

const IMAGES = {
  reactLogo: { uri: 'https://reactjs.org/logo-og.png' },
  mainBgImage: { uri: 'https://reactjs.org/logo-og.png' },
};

export const App = () => {
  const [{ appIsReady, username, password, count, keyboardStatus }, dispatch] =
    useReducer(appReducer, { ...INITIAL_STATE });
  useLoadAssets(dispatch);
  useKeyboard(dispatch);

  if (!appIsReady) {
    return <AppLoading />;
  }

  const onLogin = () => {
    Alert.alert('Credentials', `${username} + ${password}`);
  };

  const { width, height } = Dimensions.get('window');
  console.log('App ~ width', width);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <KeyboardAvoidingView
            // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            behavior={Platform.OS == 'ios' && 'padding'}
          >
            <View style={styles.container}>
              <Cat />
              <ClassCat />
              <Image source={IMAGES.reactLogo} style={styles.reactLogo} />
              <Image source={IMAGES.reactLogo} style={styles.reactLogo} />
              <Image source={IMAGES.reactLogo} style={styles.reactLogo} />

              <Image source={IMAGES.reactLogo} style={styles.reactLogo} />

              <Image source={IMAGES.reactLogo} style={styles.reactLogo} />

              <TextInput
                value={username}
                onChangeText={e =>
                  dispatch({ type: actions.username, payload: e })
                }
                maxLength={21}
                placeholder="Username"
                style={styles.input}
              />
              <TextInput
                value={password}
                onChangeText={e =>
                  dispatch({ type: actions.password, payload: e })
                }
                maxLength={30}
                placeholder="Password"
                secureTextEntry
                style={styles.input}
              />
              <Button title="Login" style={styles.input} onPress={onLogin} />
              <Button
                title={`${count}`}
                onPress={() =>
                  dispatch({ type: actions.increment, payload: 1 })
                }
              />
              <Button
                title={`${count}`}
                onPress={() =>
                  dispatch({ type: actions.decrement, payload: 1 })
                }
              />
              <Text>Platform Default</Text>

              <Text style={styles.textMain}>Roboto-Regular</Text>
              <Text style={styles.textBold}>Roboto-Bold</Text>
              <Text style={styles.textCalligraphy}>
                Hello World! I&apos;m Zapfino font
              </Text>
              <Text style={styles.status}>{keyboardStatus}</Text>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <ImageBackground
          source={IMAGES.mainBgImage}
          style={{ ...styles.mainBgImage, ...{ width, height } }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

// const isfirstRender = useRef(true);
// useEffect(() => {
//   if (isfirstRender.current) {
//     isfirstRender.current = false;
//     return;
//   }

// }, []);
