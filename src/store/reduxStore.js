import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const isDevMode = process.env.NODE_ENV !== "production";
const middlewares = [];

middlewares.push(thunk);

if (isDevMode) {
  const { createLogger } = require("redux-logger");
  middlewares.push(createLogger());
}

const store = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

export default store;
