import { Header, ImageContainer, InputContainer } from "../layout/layoutStyle";
import { Button, Image, Input, Paragraph } from "../../style/mixin";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const HeaderComponents = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [check, setCheck] = useState(true);
    const [inputData, setInputData] = useState<string>("");

    const LoadDataAndRedirect = () => {

        const data = inputData.split('/');
        
        if(data.length >= 2 && data.length <= 2 && data[0].length > 0 && data[1].length > 0){

            setCheck(true);
            navigate(`/result`);
            dispatch({type: "loadData", payload: {owner: data[0], repoName: data[1]}});

        }else{

            setCheck(false);

        }

    }

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {

        setInputData(event.target.value);

    }

    useEffect(() => {


    }, [inputData])

    return  <Header>

                <ImageContainer>
                    <Image 
                        props={{width: 60}} 
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    />
                    <Paragraph 
                        props={{size: 16, color: "black", "font-weight": "bold"}}
                    >GitHub Forks</Paragraph>
                </ImageContainer>

                <InputContainer>
                    <Input 
                        props={{width: 160, background: "white", height: 28, border: check ? "#d3d3d3" : "red"}}
                        placeholder=":owner/:repositoryName" 
                        name="repoData"
                        onChange={handleChange}
                    />
                    <Button
                        props={{color: "black", width: 60, height: 40, background: "#f8f8f8", border: "#d3d3d3"}}
                        onClick={LoadDataAndRedirect}
                    >Search</Button>
                </InputContainer>

            </Header>

}
