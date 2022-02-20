import { useContext } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  TextInput,
  Button,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import { appCtx } from 'context';
import { actions, theme } from 'common';

import { Cat } from '../Cat';

import { IMAGES } from 'assets/images';
import { css } from './My.styles';

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
        <ScrollView contentContainerStyle={css.contentContainer}>
          <View style={css.logoContainer}>
            <Image source={IMAGES.reactLogo} style={css.reactLogo} />
          </View>

          <View style={css.container}>
            <Cat style={css.cat} />

            <TextInput
              value={username}
              onChangeText={text =>
                dispatch({ type: actions.username, payload: text })
              }
              maxLength={21}
              placeholder="Username"
              style={css.input}
              placeholderTextColor={theme.dark.main.fg}
            />

            <TextInput
              value={password}
              onChangeText={text =>
                dispatch({ type: actions.password, payload: text })
              }
              maxLength={30}
              placeholder="Password"
              secureTextEntry
              style={css.input}
              placeholderTextColor={theme.dark.main.fg}
            />

            <View>
              <Button title="Login" onPress={onLogin} />
            </View>

            <Button
              title={`${count}`}
              onPress={() => dispatch({ type: actions.increment, payload: 1 })}
            />

            <Button
              title={`${count}`}
              onPress={() => dispatch({ type: actions.decrement, payload: 1 })}
            />

            <Text>Platform Default</Text>
            <Text style={css.textMain}>Roboto-Regular</Text>
            <Text style={css.textBold}>Roboto-Bold</Text>
            <Text style={css.textCalligraphy}>
              Hello World! I&apos;m Zapfino font
            </Text>
            <Text style={css.status}>{keyboardStatus}</Text>
          </View>
        </ScrollView>
        <ImageBackground
          source={IMAGES.mainBgImage}
          style={[css.mainBgImage, { width, height }]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
