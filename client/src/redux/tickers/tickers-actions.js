import { createAction } from "@reduxjs/toolkit";

const loadTickers = createAction("tickers/loadTickers");

const tickersActions = {
  loadTickers,
};
export default tickersActions;
