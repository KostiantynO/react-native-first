import * as Font from 'expo-font';
import { theme } from 'common';

const customFonts = {
  [theme.fonts.roboto.regular]: require('assets/fonts/Roboto-Regular.ttf'),
  [theme.fonts.roboto.bold]: require('assets/fonts/Roboto-Bold.ttf'),
  // [theme.fonts.zapfino]: require('assets/fonts/Zapfino.otf'),
  [theme.fonts.dmmono.regular]: require('assets/fonts/DMMono-Regular.ttf'),
};

export const loadFonts = async () => {
  await Font.loadAsync(customFonts);
};
