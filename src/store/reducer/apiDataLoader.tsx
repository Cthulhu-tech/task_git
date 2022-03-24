import { urlParams } from "../../type/type";
import { PayloadAction } from "@reduxjs/toolkit";
import { ForksData } from "../../interface/interaface";

const LOAD_DATA = "loadData";
const LOAD_CHECK = "loadCheck";

const initialState:ForksData | {data: []} = {

    data: [],
    load: false
    
}

export const DataLoader = (state = initialState, action: PayloadAction<urlParams | string>) => {

    switch (action.type) {
        case  LOAD_DATA:
            return {data: action.payload, load: true}
        case LOAD_CHECK:
            return {data: state.data, load: false}
        default:
            return state;
    }

}

export const addData = (payload:urlParams) => ({type: LOAD_DATA, payload});
export const checkData = (payload:string) => ({type: LOAD_CHECK, payload});
