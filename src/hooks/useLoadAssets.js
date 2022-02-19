import { useEffect } from 'react';
import { loadFonts } from 'helpers';
import { actions } from 'common';

export const useLoadAssets = dispatch => {
  useEffect(() => {
    const cacheResourcesAsync = async () => {
      try {
        await loadFonts(); // Pre-load fonts
      } catch (error) {
        dispatch({ type: actions.error, payload: error });
        console.warn(error);
      } finally {
        dispatch({ type: actions.appIsReady, payload: true });
      }
    };

    cacheResourcesAsync();
  }, [dispatch]);
};
