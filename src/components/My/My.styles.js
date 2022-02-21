import { theme } from 'common';
import { StyleSheet } from 'react-native';

export const css = StyleSheet.create({
  my: {
    flex: 1,
  },

  cat: {
    color: theme.colors.lightestGrey,
  },

  mainBgImage: {
    position: 'absolute',
    flex: 1,
    resizeMode: 'cover',
  },

  contentContainer: {},

  container: {
    flex: 1,
    backgroundColor: theme.colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 36,
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: theme.dark.main.bg,
    borderRadius: 150,
    backgroundColor: theme.colors.darkerGray,
    color: theme.dark.main.bg,
    textAlign: 'center',
    fontSize: 100,
    fontWeight: 'bold',
  },

  input: {
    width: 200,
    fontSize: 21,
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.black,
    marginBottom: 10,
    borderRadius: 6,
    color: theme.dark.main.fg,
    backgroundColor: theme.dark.main.bg,
  },

  status: {
    padding: 10,
    textAlign: 'center',
  },

  logoContainer: { padding: 20 },

  reactLogo: { width: 80, height: 80 },

  text: { fontSize: 30 },
  // textDefault: {
  //   fontSize: 30,
  //   color: theme.dark.main.fg,
  // },
  textMain: {
    fontFamily: theme.fonts.roboto.regular,
    fontSize: 21,
    color: theme.dark.main.fg,
    backgroundColor: theme.dark.main.bg,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textBold: {
    fontFamily: theme.fonts.roboto.bold,
    fontSize: 21,
    color: theme.dark.main.fg,
    backgroundColor: theme.dark.main.bg,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textDMMono: {
    fontSize: 30,
    fontFamily: theme.fonts.dmmono.regular,
    color: theme.dark.main.fg,
    backgroundColor: theme.dark.main.bg,
    padding: 16,
  },
  textCalligraphy: {
    // fontFamily: theme.fonts.zapfino,
    fontSize: 50,
    color: theme.dark.main.fg,
    backgroundColor: theme.dark.main.bg,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
