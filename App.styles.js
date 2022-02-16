import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 50 : 100,

  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: '#000000',
      },
      android: {
        backgroundColor: '#ecf0f1',
      },
    }),

    alignItems: 'center',
    justifyContent: 'center',
  },

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
});
