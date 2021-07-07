import { createReducer } from "@reduxjs/toolkit";
import tickersActions from "./tickers-actions";

const { loadTickers } = tickersActions;

export const tickers = createReducer([], {
  [loadTickers]: (_, { payload }) => {
    console.log(payload);
    return [...payload];
  },
});
