import { useEffect } from 'react';
import { Keyboard } from 'react-native';
import { actions } from 'src/common';

export const useKeyboard = (keyboardStatus, setKeyboardStatus) => {
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus({
        type: actions.keyboardStatus,
        payload: 'Keyboard Shown',
      });
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus({
        type: actions.keyboardStatus,
        payload: 'Keyboard Hidden',
      });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [setKeyboardStatus]);

  return [keyboardStatus, setKeyboardStatus];
};
