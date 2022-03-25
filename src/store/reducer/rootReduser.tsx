import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { DataLoader } from "./apiDataLoader";
import thunk from "redux-thunk";
import { LinkGet } from "./linkParser";
import { DataLoaderLocal } from "./localstorageDataLoader";


export const store = createStore(
    combineReducers({
        dataLoad: DataLoader,
        linkGet: LinkGet,
        storage: DataLoaderLocal
    }),
    composeWithDevTools(applyMiddleware(thunk))
);
