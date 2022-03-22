import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";
import { DataLoader } from "./apiDataLoader";

export const store = createStore(
    combineReducers({
        dataLoad: DataLoader
    })
);