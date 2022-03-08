import { all, fork } from "redux-saga/effects";

import UserSaga from "./auth/saga";

export default function* rootSaga() {
  yield all([fork(UserSaga)]);
}
