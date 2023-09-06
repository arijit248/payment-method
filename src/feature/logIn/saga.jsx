import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "../../utils/helper/fetch";
import { getData, loadData } from "./slice";

function* get_login_data() {
  try {
    const response = yield call(
      fetchData,
      "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
    );
    // console.log(response, "saga");
    if (response?.status === 200) {
      yield put(loadData(response));
    }
  } catch (err) {
    console.log(err);
  }
}
export default function* loginSaga() {
  yield takeLatest(getData.type, get_login_data);
}
