import { useContext } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { appCtx } from 'context';
import { actions, theme } from 'common';

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    backgroundColor: theme.dark.main.bg,
    paddingVertical: 8,
  },

  navBtn: {
    paddingHorizontal: 12,
    minWidth: 100,
  },
});

const { selected, stateNames } = actions;

export const NavBar = () => {
  const { dispatch } = useContext(appCtx);

  return (
    <View style={styles.navBar}>
      <View style={styles.navBtn}>
        <Button
          title="My"
          onPress={() => dispatch({ type: selected, payload: stateNames.my })}
        />
      </View>

      <View style={styles.navBtn}>
        <Button
          title="Tutorial"
          style={styles.navBtn}
          onPress={() =>
            dispatch({ type: selected, payload: stateNames.tutorial })
          }
        />
      </View>
    </View>
  );
};
