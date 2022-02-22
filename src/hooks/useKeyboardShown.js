import { types } from 'common';
import { useEffect } from 'react';
import { Keyboard } from 'react-native';

const { appIsKeyboardOpen } = types;

export const useKeyboardShown = dispatch => {
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      dispatch({ type: appIsKeyboardOpen, payload: true });
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      dispatch({ type: appIsKeyboardOpen, payload: false });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [dispatch]);
};
