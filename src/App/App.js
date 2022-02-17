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

export const App = () => {
  const [{ appIsReady, username, password, count, keyboardStatus }, dispatch] =
    useReducer(appReducer, { ...INITIAL_STATE });

  useLoadAssets(dispatch);
  useKeyboard(keyboardStatus, dispatch);

  if (!appIsReady) {
    return <AppLoading />;
  }

  const onLogin = () => {
    Alert.alert('Credentials', `${username} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          behavior={Platform.OS == 'ios' && 'padding'}
        >
          <Cat />
          <ClassCat />

          <TextInput
            value={username}
            onChangeText={e => dispatch({ type: actions.username, payload: e })}
            maxLength={21}
            placeholder="Username"
            style={styles.input}
          />

          <TextInput
            value={password}
            onChangeText={e => dispatch({ type: actions.password, payload: e })}
            maxLength={30}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />

          <Button title="Login" style={styles.input} onPress={onLogin} />

          <Button
            title={`${count}`}
            onPress={() => dispatch({ type: actions.increment, payload: 1 })}
          />

          <Button
            title={`${count}`}
            onPress={() => dispatch({ type: actions.decrement, payload: 1 })}
          />

          <Text>Platform Default</Text>
          <Text style={{ fontFamily: 'Roboto-Regular' }}>Roboto-Regular</Text>
          <Text style={{ fontFamily: 'Roboto-Bold' }}>Roboto-Bold</Text>

          <Text style={styles.status}>{keyboardStatus}</Text>
        </KeyboardAvoidingView>
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
