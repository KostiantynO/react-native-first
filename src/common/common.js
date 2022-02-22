export const types = Object.freeze({
  appSelected: 'appSelected',
  appAppIsReady: 'appAppIsReady',
  appIsKeyboardOpen: 'appIsKeyboardOpen',
  appError: 'appError',
  appIsLoggedIn: 'appIsLoggedIn',

  tutNickname: 'tutNickname',
  tutEmail: 'tutEmail',
  tutPassword: 'tutPassword',
  tutRegistration: 'tutRegistration',
  tutAuth: 'tutAuth',
  tutError: 'tutError',

  hwLogin: 'hwLogin',
  hwEmail: 'hwEmail',
  hwPassword: 'hwPassword',
  hwRegistration: 'hwRegistration',
  hwAuth: 'hwAuth',
  hwError: 'hwError',

  myEmail: 'myEmail',
  myPassword: 'myPassword',
  myCount: 'myCount',
  myIncrement: 'myIncrement',
  myDecrement: 'myDecrement',
});

export const arch = Object.freeze({
  app: {
    // selected: 'selected',
    // appIsReady: 'appIsReady',
    // isKeyboardOpen: 'isKeyboardOpen',
    // error: 'error',
  },

  screens: {
    tut: {
      singUpScreen: 'tutSignUpScreen',
      signInScreen: 'tutSignInScreen',

      // nickname: 'nickname',
      // email: 'email',
      // password: 'password',

      // registration: 'registration',
      // auth: 'auth',
      // error: 'error',
    },

    hw: {
      registrationScreen: 'hwRegistrationScreen',
      loginScreen: 'hwLoginScreen',

      // login: 'login',
      // email: 'email',
      // password: 'password',

      // registration: 'registration',
      // auth: 'auth',
      // error: 'error',
    },

    my: {
      myScreen: 'myScreen',
      // count: 'count',
      // increment: 'increment',
      // decrement: 'decrement',
    },
  },
});

export const UI = {
  fallback: '(^-^*)  Sorry, an error occurred. Please try to reload app',
  notSelected: '¯\\_(ツ)_/¯  nothing is selected',
};
