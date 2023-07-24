import { todoReducer } from "./todo/todo.reducers";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    todo: todoReducer
})

export const store = configureStore({
    reducer: rootReducer
})