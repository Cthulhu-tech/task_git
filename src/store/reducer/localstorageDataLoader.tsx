import { PayloadAction } from "@reduxjs/toolkit";
import { AllDataType, ForksData, LocalStorageData } from "../../interface/interaface";
import { LocalData, urlParams } from "../../type/type";

const LOAD_DATA_LOCAL = "loadDatalocal";
const LOAD_CHECK_LOCAL = "loadChecklocal";

const initialState:LocalStorageData = {

    url: [],
    load: false
    
}

export const DataLoaderLocal = (state = initialState, action: PayloadAction<LocalStorageData[]>) => {

    switch (action.type) {
        case  LOAD_DATA_LOCAL:
        return {data: {...(state.url as AllDataType[]) , ...action.payload}, load: true}
        case LOAD_CHECK_LOCAL:
            return {data: state.url, load: action.payload}
        default:
            return state;
    }

}

export const addDataLocal = (payload:LocalData) => ({type: LOAD_DATA_LOCAL, payload});
export const checkDataLocal = (payload:boolean) => ({type: LOAD_CHECK_LOCAL, payload});