import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  // Platform,
  StyleSheet,
  TextInput,
} from 'react-native';

import { ClassCat } from '../Cat';
import { IMAGES } from 'assets/images';
import { theme } from 'common/theme';

const tutCSS = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: theme.dark.main.bg,

    // ...Platform.select({
    //   ios: { backgroundColor: '#888888' },
    //   android: { backgroundColor: '#eeeeee' },
    // }),
  },

  text: {
    fontSize: 30,
    color: 'green',
  },

  innerBox: {
    width: 300,
    padding: 40,
    marginTop: 400,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'green',
  },

  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: theme.dark.main.fg,
    height: 40,
    borderRadius: 6,
    marginHorizontal: 40,
    color: theme.dark.main.fg,
    textAlign: 'center',
  },
});

export const Tut = () => {
  return (
    <ScrollView contentContainerStyle={tutCSS.container}>
      <ImageBackground
        style={tutCSS.imageBackground}
        source={IMAGES.tutBgImage}
      >
        <View>
          <ClassCat />
        </View>

        <TextInput style={tutCSS.input} />

        <View style={tutCSS.innerBox}>
          <Text style={tutCSS.text}>{'Hurd work :)'}</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
