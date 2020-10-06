import { takeLeading, put, call } from "redux-saga/effects";
import { ADMIN } from "../actionTypes";

export function* adminLoginWatcher() {
  yield takeLeading(ADMIN.LOGIN.WATCH, adminLoginWorker);
}

function* adminLoginWorker({ payload }) {
  try {
    yield put({ type: ADMIN.LOGIN.LOAD });
    yield put({ type: ADMIN.LOGIN.SUCCES, payload });
    payload.onSuccess && payload.onSuccess();
    console.log(payload);
  } catch (error) {
    console.log(error);
    yield put({ type: ADMIN.LOGIN.FAIL });
  }
}

export function* adminLogoutWatcher() {
  yield takeLeading(ADMIN.LOGOUT.WATCH, adminLogoutWorker);
}

function* adminLogoutWorker({ payload }) {
  try {
    yield put({ type: ADMIN.LOGOUT.LOAD });
    yield put({ type: ADMIN.LOGOUT.SUCCES });
  } catch (error) {
    console.log(error);
    yield put({ type: ADMIN.LOGOUT.FAIL });
  }
}
