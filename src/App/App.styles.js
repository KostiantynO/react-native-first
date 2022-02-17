import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
  },

  mainBgImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    flex: 1,
    resizeMode: 'cover',
  },

  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: '#888888',
      },
      android: {
        backgroundColor: '#eeeeee',
      },
    }),

    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 36,
  },

  height: Platform.OS === 'ios' ? 50 : 100,

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 150,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 100,
    fontWeight: 'bold',
  },

  input: {
    width: 200,
    fontSize: 21,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 10,
    borderRadius: 6,
  },

  text: {
    fontSize: 30,
  },

  status: {
    padding: 10,
    textAlign: 'center',
  },

  reactLogo: { width: 250, height: 250 },

  textMain: { fontFamily: 'Roboto-Regular', fontSize: 21 },
  textBold: { fontFamily: 'Roboto-Bold', fontSize: 21 },
  textCalligraphy: { fontFamily: 'Zapfino', fontSize: 50 },
});
