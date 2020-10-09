import { takeLeading, put, call } from "redux-saga/effects";

export const generateWatcher = ({ actionType, service, take = takeLeading }) =>
  function* () {
    const { WATCH } = actionType;
    yield take(WATCH, (payload) => generateWorker({ payload, actionType, service }));
  };

const generateWorker = ({ payload, actionType, service }) =>
  (function* () {
    const { LOAD, SUCCESS, FAIL } = actionType;
    console.log("service", service);
    console.log("LOAD", LOAD);
    console.log("payload", payload);
    try {
      yield put({ type: LOAD });
      const response = service ? yield call(service, payload) : payload;
      console.log("response", response);
      yield put({ type: SUCCESS, response });
      payload.afterSuccess && payload.afterSuccess();
    } catch (error) {
      console.log("error", error);
      yield put({ type: FAIL });
      payload.afterFail && payload.afterFail();
    }
  })();
