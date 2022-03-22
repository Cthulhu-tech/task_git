import { dataFetch } from "../actions/apiDataLoader";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {

    data: [],
    load: false

}

export const DataLoader = (state = initialState, action: PayloadAction<string>) => {

    switch (action.type) {

        case 'loadData':
            return {data: dataFetch(action.payload), load: true}
        default:
            return state;
    }

}