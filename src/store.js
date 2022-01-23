import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { userAllReducer } from "./reducers/userReducer";
import { notificationReducer } from "./reducers/notificationReducer";

const reducer = combineReducers({
  usersList: userAllReducer,
  notifications: notificationReducer, 
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
