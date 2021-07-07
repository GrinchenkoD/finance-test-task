import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tickers } from "./tickers/tickers-reducers";

// const authPersistConfig = {
//   key: "", //! указать ключ для ЛС
//   storage,
//   whitelist: ["token", "user", "isAuthentificated", "refreshToken", "sid"], //! указать вайтлист
// };

// const persistedAuthReducer = persistReducer(authPersistConfig, () => {});

const reducer = {
  //   auth: persistedAuthReducer,
  tickers,
};

export default reducer;
