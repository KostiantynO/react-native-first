import * as Font from 'expo-font';

const regular = 'assets/fonts/Roboto/Roboto-Regular.ttf';
const bold = 'assets/fonts/Roboto/Roboto-Bold.ttf';

const customFonts = {
  'Roboto-Regular': require(regular),
  'Roboto-Bold': require(bold),
};

export const loadFonts = async () => {
  await Font.loadAsync(customFonts);
};
