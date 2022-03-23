import { ReducerDataLoader, urlParams } from "../../type/type";
import { PayloadAction } from "@reduxjs/toolkit";
import { ForksData } from "../../interface/interaface"

const LOAD_DATA = "loadData";

const initialState:ForksData | {data: []} = {

    data: []
    
}

export const DataLoader = (state = initialState, action: PayloadAction<urlParams>) => {

    switch (action.type) {
        case  LOAD_DATA:
            return {data: action.payload}
        default:
            return state;
    }

}

export const addData = (payload:PayloadAction<urlParams>) => ({type: LOAD_DATA, payload});
