import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { userReducer } from "../reducers/userReducer";
import { searchReducer } from "../reducers/searchReducer";

export const initialState = {
  userReducer: null,
};

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  userReducer,
  searchReducer,
});

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: SECRET_KEY,
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
