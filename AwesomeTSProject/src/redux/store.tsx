// import {  combineReducers, applyMiddleware } from "redux";
import { configureStore,ThunkAction,Action,combineReducers } from '@reduxjs/toolkit'

import thunk from 'redux-thunk';
import Reducers from "./reducers";
// const RootReducers = combineReducers({
//     Reducers,
// });

const store = configureStore({
    reducer:Reducers,
    middleware: [thunk]
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =ReturnType< typeof store.dispatch>
export type AppThunk<ReturnType = void> = ThunkAction<
void,
RootState,
unknown,
Action
>;
export default store