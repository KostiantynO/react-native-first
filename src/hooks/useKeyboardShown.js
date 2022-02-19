import { actions } from 'common';
import { useEffect } from 'react';
import { Keyboard } from 'react-native';

const { isKeyboardOpen } = actions;

export const useKeyboardShown = dispatch => {
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      dispatch({ type: isKeyboardOpen, payload: true });
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      dispatch({ type: isKeyboardOpen, payload: false });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [dispatch]);
};
