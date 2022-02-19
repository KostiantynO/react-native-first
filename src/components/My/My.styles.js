import { Platform, StyleSheet } from 'react-native';

export const MyCSS = StyleSheet.create({
  cat: {
    color: '#eee',
  },

  contentContainer: {
    backgroundColor: 'transparent',
    paddingTop: 0,
    paddingBottom: 0,
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
    backgroundColor: 'transparent',
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

  placeholder: { color: 'green' },

  input: {
    width: 200,
    fontSize: 21,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 10,
    borderRadius: 6,
    color: '#aaa',
    backgroundColor: '#212121',
  },

  status: {
    padding: 10,
    textAlign: 'center',
  },

  logoContainer: { padding: 20 },

  text: { fontSize: 30 },

  reactLogo: { width: 80, height: 80 },

  textMain: {
    fontFamily: 'Roboto-Regular',
    fontSize: 21,
    color: '#aaa',
    backgroundColor: '#212121',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textBold: {
    fontFamily: 'Roboto-Bold',
    fontSize: 21,
    color: '#aaa',
    backgroundColor: '#212121',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textCalligraphy: {
    fontFamily: 'Zapfino',
    fontSize: 50,
    color: '#aaa',
    backgroundColor: '#212121',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
