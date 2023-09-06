import { all } from "redux-saga/effects";
import loginSaga from "../feature/logIn/saga";

function* rootSaga() {
  yield all([loginSaga()]);
}

export default rootSaga;
