import { takeLeading, put, call } from "redux-saga/effects";
import services from "../services";
import { USERS } from "../actionTypes";

export function* usersFindWorker() {
  yield takeLeading(USERS.FIND.WATCH, usersFindWatcher);
}

function* usersFindWatcher({ payload }) {
  try {
    yield put({ type: USERS.FIND.LOAD });
    const { data, meta } = yield call(services.users.find, payload);
    yield put({ type: USERS.FIND.SUCCES, payload: { rows: data, count: meta.pagination.total } });
  } catch (error) {
    console.log(error);
    yield put({ type: USERS.FIND.FAIL });
  }
}
