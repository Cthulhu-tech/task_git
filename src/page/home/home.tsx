import { Paragraph } from "../../style/mixin";
import { GreetingsParagraph, HomeContainer } from "./homeStyle";

export const HomePage = () => {

    return  <HomeContainer>
                <GreetingsParagraph>Hello!</GreetingsParagraph>
                <Paragraph props={{size: 16, color: "gray"}}>Find the fork you need</Paragraph>
            </HomeContainer>

}