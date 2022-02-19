import { useContext } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TextInput,
  Button,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import { appCtx } from 'context';
import { actions } from 'common';

import { Cat } from '../Cat';

import { IMAGES } from 'assets/images';
import { MyCSS } from './My.styles';

const css = {
  main: { fg: '#aaa' },
};

export const My = () => {
  const {
    username,
    password,
    count,
    keyboardStatus,
    width,
    height,
    dispatch,
    onLogin,
  } = useContext(appCtx);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ScrollView contentContainerStyle={MyCSS.contentContainer}>
          <KeyboardAvoidingView
            // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            behavior={Platform.OS == 'ios' && 'padding'}
          >
            <View style={MyCSS.logoContainer}>
              <Image source={IMAGES.reactLogo} style={MyCSS.reactLogo} />
            </View>

            <View style={MyCSS.container}>
              <Cat style={MyCSS.cat} />

              <TextInput
                value={username}
                onChangeText={text =>
                  dispatch({ type: actions.username, payload: text })
                }
                maxLength={21}
                placeholder="Username"
                style={MyCSS.input}
                placeholderTextColor={css.main.fg}
              />
              <TextInput
                value={password}
                onChangeText={text =>
                  dispatch({ type: actions.password, payload: text })
                }
                maxLength={30}
                placeholder="Password"
                secureTextEntry
                style={MyCSS.input}
                placeholderTextColor={css.main.fg}
              />
              <Button title="Login" style={MyCSS.input} onPress={onLogin} />
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

              <Text style={MyCSS.textDefault}>Platform Default</Text>
              <Text style={MyCSS.textMain}>Roboto-Regular</Text>
              <Text style={MyCSS.textBold}>Roboto-Bold</Text>
              <Text style={MyCSS.textCalligraphy}>
                Hello World! I&apos;m Zapfino font
              </Text>
              <Text style={MyCSS.status}>{keyboardStatus}</Text>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <ImageBackground
          source={IMAGES.mainBgImage}
          style={[MyCSS.mainBgImage, { width, height }]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
