import { useEffect } from 'react';
import { loadFonts } from 'helpers';
import { types } from 'common';

const { appAppIsReady, appError } = types;

export const useLoadAssets = dispatch => {
  useEffect(() => {
    const cacheResourcesAsync = async () => {
      try {
        await loadFonts(); // Pre-load fonts
      } catch (error) {
        dispatch({ type: appError, payload: error });
        console.warn(error);
      } finally {
        dispatch({ type: appAppIsReady, payload: true });
      }
    };

    cacheResourcesAsync();
  }, [dispatch]);
};
