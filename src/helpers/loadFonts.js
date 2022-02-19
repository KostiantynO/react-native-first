import * as Font from 'expo-font';

const customFonts = {
  'Roboto-Regular': require('assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Bold': require('assets/fonts/Roboto-Bold.ttf'),
  Zapfino: require('assets/fonts/Zapfino.otf'),
};

export const loadFonts = async () => {
  await Font.loadAsync(customFonts);
};
