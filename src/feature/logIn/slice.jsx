import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  counter: 0,
  prices: [],
  loading: false,
};

const rootReducer = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    getData: (state) => {
      return {
        ...state,
        loading: true,
      };
    },

    loadData: (state, action) => {
      // console.log(action, "sadfghjgfd");
      return {
        ...state,
        prices: action.payload,
        loading: false,
      };
    },
  },
});

export const { increment, decrement, getData, loadData } = rootReducer.actions;
export default rootReducer.reducer;
