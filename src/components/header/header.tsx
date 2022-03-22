import { Image, Paragraph } from "../../style/mixin";
import { Header } from "../layout/layoutStyle";

export const HeaderComponents = () => {

    return  <Header>
                <Image 
                    props={{width: 60}} 
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
                <Paragraph 
                    props={{size: 16, color: "black", "font-weight": "bold"}}
                >GitHub Forks</Paragraph>
            </Header>

}
