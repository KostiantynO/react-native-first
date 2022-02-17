import * as Font from 'expo-font';

const customFonts = {
  'Roboto-Regular': require('src/assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Bold': require('src/assets/fonts/Roboto-Bold.ttf'),
  Zapfino: require('src/assets/fonts/Zapfino.otf'),
};

export const loadFonts = async () => {
  await Font.loadAsync(customFonts);
};
