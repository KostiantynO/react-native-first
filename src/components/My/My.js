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
import { types, theme } from 'common';

import { Cat } from '../Cat';

import { css } from './My.styles';

const images = {
  reactLogo: require('assets/images/logo-react.png'),
};

export const My = () => {
  const {
    myEmail,
    myPassword,
    myCount,
    keyboardStatus,
    width,
    height,
    dispatch,
    onLogin,
  } = useContext(appCtx);

  const bgImageDynamic = [css.mainBgImage, { width, height }];

  const setMyEmail = text => {
    dispatch({ type: types.myEmail, payload: text });
  };

  const setMyPassword = text => {
    dispatch({ type: types.myPassword, payload: text });
  };

  const handleMyLogin = async () => {
    await onLogin();

    setMyEmail('');
    setMyPassword('');
  };

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
            value={`${myEmail}`}
            onChangeText={setMyEmail}
            maxLength={21}
            style={css.input}
            textContentType="emailAddress"
            placeholderTextColor={theme.dark.main.fg}
          />

          <Text style={css.textMain}>Password</Text>
          <TextInput
            value={`${myPassword}`}
            onChangeText={setMyPassword}
            maxLength={30}
            secureTextEntry={true}
            style={css.input}
            textContentType="password"
            placeholderTextColor={theme.dark.main.fg}
          />

          <View>
            <Button title="Login" onPress={handleMyLogin} />
          </View>

          <View>
            <Text>{myCount}</Text>
          </View>

          <Button
            title={`${types.myIncrement}`}
            onPress={() => dispatch({ type: types.myIncrement, payload: 1 })}
          />

          <Button
            title={`${types.myDecrement}`}
            onPress={() => dispatch({ type: types.myDecrement, payload: 1 })}
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
