import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../../globalStyle";
import { Footer, Header, Main } from "./layoutStyle";

export const Loyout = () => {

    return  <GlobalStyle>
                <Header>

                </Header>
                    <Main>
                        <Outlet/>
                    </Main>
                <Footer>
                    
                </Footer>
            </GlobalStyle>
    
}