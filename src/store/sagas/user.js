import {all, put, takeLatest, call} from 'redux-saga/effects';

import tokenHelper from 'helpers/token';

import {logout, logoutSuccess} from 'store/reducers/user';

function* logoutSaga() {
  yield tokenHelper.clear();

  yield put({type: logoutSuccess.type});
}

export default function* root() {
  yield all([takeLatest(logout.type, logoutSaga)]);
}
