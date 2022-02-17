import { useEffect } from 'react';
import { Keyboard } from 'react-native';
import { actions } from 'src/common';

export const useKeyboard = dispatch => {
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      dispatch({ type: actions.keyboardStatus, payload: 'Keyboard Shown' });
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      dispatch({ type: actions.keyboardStatus, payload: 'Keyboard Hidden' });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [dispatch]);
};
