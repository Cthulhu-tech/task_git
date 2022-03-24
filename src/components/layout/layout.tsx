import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../../style/globalStyle";
import { FooterComponent } from "../footer/footer";
import { HeaderComponents } from "../header/header";
import { Main } from "./layoutStyle";


export const Loyout = () => {

    return  <>
            <GlobalStyle/>
            <HeaderComponents/>
                <Main>
                    <Outlet/>
                </Main>
            <FooterComponent/>
            </>
    
}