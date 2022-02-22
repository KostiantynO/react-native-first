import { useContext } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { appCtx } from 'context';
import { types, arch, theme } from 'common';

const { appSelected } = types;

const {
  screens: { tut, hw, my },
} = arch;

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

export const NavBar = () => {
  const { dispatch } = useContext(appCtx);

  return (
    <View style={styles.navBar}>
      <View style={styles.navBtn}>
        <Button
          title={my.myScreen}
          onPress={() => dispatch({ type: appSelected, payload: my.myScreen })}
        />
      </View>

      <View style={styles.navBtn}>
        <Button
          title={tut.singUpScreen}
          onPress={() =>
            dispatch({ type: appSelected, payload: tut.singUpScreen })
          }
        />
      </View>

      <View style={styles.navBtn}>
        <Button
          title={tut.signInScreen}
          onPress={() =>
            dispatch({ type: appSelected, payload: tut.signInScreen })
          }
        />
      </View>

      <View style={styles.navBtn}>
        <Button
          title={hw.registrationScreen}
          onPress={() =>
            dispatch({ type: appSelected, payload: hw.registrationScreen })
          }
        />
      </View>

      <View style={styles.navBtn}>
        <Button
          title={hw.loginScreen}
          onPress={() =>
            dispatch({ type: appSelected, payload: hw.loginScreen })
          }
        />
      </View>
    </View>
  );
};
