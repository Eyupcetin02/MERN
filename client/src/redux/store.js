
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {combineReducers} from "redux"
import {thunk} from "redux-thunk";
// reducerler
import authReducer from "./reducers/auth" 
import modalReducer from "./reducers/modal";
import postReducer from "./reducers/post";
import filterPost from "./reducers/filterpost";
const initialState = {};

const reducers = combineReducers({
  auth :authReducer,
  modal :modalReducer,
  posts :postReducer,
  filter:filterPost
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export default store;
