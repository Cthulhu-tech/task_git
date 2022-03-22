import { ReducerDataLoader, urlParams } from "../../../type/type";
import { dataFetch } from "../actions/apiDataLoader";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState:ReducerDataLoader = {

    data: []
    
}

export const DataLoader = (state = initialState, action: PayloadAction<urlParams>) => {

    switch (action.type) {
        case 'loadData':
            return {data: dataFetch(action)}
        default:
            return state;
    }

}