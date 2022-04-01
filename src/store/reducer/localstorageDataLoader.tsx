import { PayloadAction } from "@reduxjs/toolkit";
import { AllDataType, LocalStorageData } from "../../interface/interaface";
import { LocalData } from "../../type/type";

const LOAD_DATA_LOCAL = "loadDatalocal";
const LOAD_CHECK_LOCAL = "loadChecklocal";
const LOAD_FETST_DATA = "loadFerstData";

const initialState:LocalStorageData = {

    url: [],
    load: false
    
}

export const DataLoaderLocal = (state = initialState, action: PayloadAction<LocalStorageData[]>) => {

    switch (action.type) {
        case  LOAD_DATA_LOCAL:
        return {data: {...(state.url as AllDataType[]) , ...action.payload}, load: true}
        case LOAD_CHECK_LOCAL:
            return {data: {...(state.url as AllDataType[])}, load: action.payload}
        case LOAD_FETST_DATA:
            return {data: action.payload, load: true}
        default:
            return state;
    }

}

export const addDataLocal = (payload:LocalData) => ({type: LOAD_DATA_LOCAL, payload});
export const addFerstData = (payload:LocalData) => ({type: LOAD_FETST_DATA, payload});
export const checkDataLocal = (payload:boolean) => ({type: LOAD_CHECK_LOCAL, payload});