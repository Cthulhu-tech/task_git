import { useDispatch } from "react-redux";
import { HomeContainer } from "./homeStyle";
import { Button, Input } from "../../style/mixin";
import { ChangeEvent, useEffect, useState } from "react";

export const HomePage = () => {

    const [inputData, setInputData] = useState<string>("");

    const dispatch = useDispatch();

    const LoadData = () => {

        dispatch({type: "loadData", payload: inputData});

    }

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {

        setInputData(event.target.value);

    }

    useEffect(() => {

        console.log(inputData)

    }, [inputData])

    return  <HomeContainer>
                <Input 
                    props={{width: 200, background: "#ebebeb", height: 43}}
                    placeholder="владелец / имя репозитория" 
                    name="repoData"
                    onChange={handleChange}
                />
                <Button 
                    props={{color: "white", width: 80, height: 55, background: "rgb(28,29,34)"}}
                    onClick={LoadData}
                >Поиск</Button>
            </HomeContainer>

}