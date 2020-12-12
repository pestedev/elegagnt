import {createSlice} from '@reduxjs/toolkit';
const appname = createSlice({
  name: 'app',
  initialState: {
    language: {isRTL: true, name: 'fa'},
    isFirsLaunch: true,
    theme: 'light',
    isInternetReachable: true,
    snackbarMessage: {message: '', type: 'ERROR'}, //type: ERROR || SUCCESS
    isSnackbarVisible: false,
    familyModal: {isOpened: false, doctor: undefined},
  },
  reducers: {
    changeFamilyModalVisibility(state, action) {
      state.familyModal.isOpened = action.payload;
    },
    changeFamilyModalDoctorData(state, action) {
      state.familyModal.doctor = action.payload.doctor;
    },
    changeFamilyModal(state, action) {
      state.familyModal = action.payload;
    },
    changeTheme(state, action) {
      state.theme = action.payload.theme;
    },
    changeLanguage(state, action) {
      const {isRTL, name} = action.payload;
      state.language.name = name;
      state.language.isRTL = isRTL;
    },
    resetAppFirstLaunch(state) {
      state.isFirsLaunch = true;
    },
    setAppFirstLaunch(state) {
      state.isFirsLaunch = false;
    },
    setInternetReachablity(state, action) {
      state.isInternetReachable = action.payload.isInternetReachable;
    },
    showSnackbar(state, action) {
      state.isSnackbarVisible = true;
      state.snackbarMessage.message = action.payload.message;
      state.snackbarMessage.duration = action.payload.duration;
      state.snackbarMessage.type = action.payload.type;
    },
    hideSnackbar: (state) => {
      state.isSnackbarVisible = false;
    },
  },
});

export const {
  changeFamilyModalVisibility,
  changeFamilyModalUserData,
  changeFamilyModalDoctorData,
  changeFamilyModal,
  changeLanguage,
  setAppFirstLaunch,
  resetAppFirstLaunch,
  changeTheme,
  setInternetReachablity,
  showSnackbar,
  hideSnackbar,
} = appname.actions;

export default appname.reducer;
