import { useState } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import { styles } from './App.styles';

export default App = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const nameHandler = text => setName(text);
  const passwordHandler = text => setPassword(text);

  const onLogin = () => {
    Alert.alert('Credentials', `${name} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          behavior={Platform.OS == 'ios' && 'padding'}
        >
          <TextInput
            value={name}
            onChangeText={nameHandler}
            maxLength={21}
            placeholder="Username"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            maxLength={30}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />
          <Button title="Login" style={styles.input} onPress={onLogin} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
