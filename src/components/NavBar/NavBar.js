import { useContext } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { appCtx } from 'context';
import { actions, theme } from 'common';

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.dark.main.bg,
  },

  navBtn: {
    paddingTop: 12,
    paddingBottom: 12,
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
          title={stateNames.my}
          onPress={() => dispatch({ type: selected, payload: stateNames.my })}
        />
      </View>

      <View style={styles.navBtn}>
        <Button
          title={stateNames.tutorial}
          onPress={() =>
            dispatch({ type: selected, payload: stateNames.tutorial })
          }
        />
      </View>

      <View style={styles.navBtn}>
        <Button
          title={stateNames.RegistrationScreen}
          onPress={() =>
            dispatch({ type: selected, payload: stateNames.RegistrationScreen })
          }
        />
      </View>

      <View style={styles.navBtn}>
        <Button
          title={stateNames.LoginScreen}
          onPress={() =>
            dispatch({ type: selected, payload: stateNames.LoginScreen })
          }
        />
      </View>
    </View>
  );
};
