import { io } from "socket.io-client";
import tickersActions from "./tickers-actions";

const URL = "http://localhost:4000";
const socket = io(URL);

const getTickers = () => async (dispatch) => {
  socket.emit("start");

  socket.on("ticker", (res) => {
    dispatch(tickersActions.loadTickers(res));
  });
};

const tickersOperations = {
  getTickers,
};
export default tickersOperations;
