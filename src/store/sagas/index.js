import { all, fork } from "redux-saga/effects";
import * as users from "./_example";
import * as admin from "./admin";

const combinedSagas = {
  ...users,
  ...admin,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
