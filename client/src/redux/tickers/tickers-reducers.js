import { createReducer } from "@reduxjs/toolkit";
import tickersActions from "./tickers-actions";

const { loadTickers } = tickersActions;

export const tickers = createReducer([], {
  [loadTickers]: (_, { payload }) => {
    return [...payload];
  },
});
