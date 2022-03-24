import { PayloadAction } from "@reduxjs/toolkit";

const LINK_PARSER = "parseLink";

const initialState:{link: string[]} = {

    link: ['']
    
}

export const LinkGet = (state = initialState, action: PayloadAction<string>) => {

    switch (action.type) {
        case  LINK_PARSER:
            return {link: action.payload}
        default:
            return state;
    }

}

export const addLink = (payload:string[]) => ({type: LINK_PARSER, payload});