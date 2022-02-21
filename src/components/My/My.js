import { useContext } from 'react';
import {
  View,
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

import { css } from './My.styles';

const images = {
  reactLogo: require('assets/images/logo-react.png'),
};

export const My = () => {
  const {
    email,
    password,
    count,
    keyboardStatus,
    width,
    height,
    dispatch,
    onLogin,
  } = useContext(appCtx);

  const bgImageDynamic = [css.mainBgImage, { width, height }];

  return (
    <View style={css.my}>
      <ImageBackground source={images.reactLogo} style={bgImageDynamic} />

      <ScrollView contentContainerStyle={css.contentContainer}>
        <View style={css.logoContainer}>
          <Image source={images.reactLogo} style={css.reactLogo} />
        </View>

        <View style={css.container}>
          <Cat style={css.cat} />

          <Text style={css.textMain}>Email</Text>
          <TextInput
            value={email}
            onChangeText={text =>
              dispatch({ type: actions.email, payload: text })
            }
            maxLength={21}
            style={css.input}
            placeholderTextColor={theme.dark.main.fg}
          />

          <Text style={css.textMain}>Password</Text>
          <TextInput
            value={password}
            onChangeText={text =>
              dispatch({ type: actions.password, payload: text })
            }
            maxLength={30}
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
          <Text style={css.textDMMono}>DMMono-Regular</Text>
          <Text style={css.textCalligraphy}>
            Hello World! I&apos;m Zapfino font
          </Text>
          <Text style={css.status}>{keyboardStatus}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
