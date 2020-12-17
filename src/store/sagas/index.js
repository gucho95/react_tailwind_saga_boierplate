import { all, fork } from 'redux-saga/effects';
import * as users from './_example';
import * as auth from './auth';

const combinedSagas = {
  ...users,
  ...auth,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
