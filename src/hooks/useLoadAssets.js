import { useEffect } from 'react';
import { loadFonts } from 'src/helpers';
import { actions } from 'src/common';

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
