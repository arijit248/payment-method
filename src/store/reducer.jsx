import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "../feature/logIn/slice";

export default function configureStore() {
  return combineReducers({
    loginSlice: LoginSlice,
  });
}
