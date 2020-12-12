import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loggedIn: !!localStorage.getItem('ACCESS_TOKEN'),
  splashScreen: true,
  onCheck: false,
  error: false,
  mobile: '',
  token: null,
  userType: null,
  userId: null,
  wallet: 0,
  isRegisterComplete: false,
  patinetRouteHelper: '',
};

const username = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, {payload}) => {
      const {token, userType, userId, mobile} = payload;

      state.token = token;
      state.userType = userType;
      state.userId = userId;
      state.mobile = mobile;

      state.loggedIn = true;
    },
    fill_user: (state, {payload}) => {
      state = Object.assign(state, payload);
    },
    logout: (state) => ({...state, onCheck: true, wallet: 0}),
    logoutSuccess: (state) => {
      state.onCheck = false;
      state.loggedIn = false;
      state.mobile = '';
      state.userType = null;
      state.token = null;
      state.userId = null;
      state.wallet = 0;
      state.isRegisterComplete = false;
      state.patinetRouteHelper = '';
    },
    setUserType: (state, {payload}) => {
      const {userType} = payload;
      state.userType = userType;
    },
    setRegisterComplete: (state, {payload}) => {
      const {isRegisterComplete} = payload;
      state.isRegisterComplete = isRegisterComplete;
    },
    changeSplashScreen(state, {payload}) {
      state.splashScreen = payload;
    },
    clearError(state) {
      state.error = false;
    },
    getWallet(state) {
      state.wallet = 0;
    },
    getWalletSuccess(state, {payload}) {
      const {
        data: {wallet},
      } = payload;

      state.wallet = wallet;
    },
    setPatinetRouteHelper(state, {payload}) {
      const {route} = payload;

      state.patinetRouteHelper = route;
    },
  },
});

export const {
  login,
  fill_user,
  logout,
  logoutSuccess,
  setUserType,
  setRegisterComplete,
  clearError,
  getWallet,
  getWalletSuccess,
  setPatinetRouteHelper,
  changeSplashScreen,
} = username.actions;

export default username.reducer;
