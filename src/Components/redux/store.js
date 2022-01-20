import { createStore,applyMiddleware } from "redux";
import { reducer } from "./reducer";
import logger from 'redux-logger';
import thunk from 'redux-thunk'

export const myStore= createStore(reducer,applyMiddleware(logger,thunk))