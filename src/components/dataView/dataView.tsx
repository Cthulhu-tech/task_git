import { DataContainer, DataInfoContainer, DataUrlContainer, LoadContainer, LoadWave } from "./dataVIewStyle";
import { ImageContainer } from "../layout/layoutStyle";
import { ForksData } from "../../interface/interaface";
import { Image, Paragraph } from "../../style/mixin";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const DataView = () => {

    const data = useSelector((state:{dataLoad: ForksData}) => state.dataLoad);


    useEffect(() => {

        console.log(data)

    },[data]);

    const AllData = () => {
        
        return  <DataContainer>
                    {data.data.map(info => {
                            return  <DataUrlContainer key={info.id} href={info.html_url}>
                                        <DataInfoContainer>
                                            <Paragraph props={{size: 16}}>forks name: {info.full_name}</Paragraph>
                                            <ImageContainer>
                                                <Paragraph props={{size: 16}}>Owner: {info.owner.login}</Paragraph>
                                                <Image props={{width: 20}} src={info.owner.avatar_url}/>
                                            </ImageContainer>
                                            <Paragraph props={{size: 16}}>Star: {info.stargazers_count}</Paragraph>
                                        </DataInfoContainer>
                                    </DataUrlContainer>
                    })}
                </DataContainer>
    }

    const Load = () => {
        
        return  <LoadContainer>
                    <LoadWave/>
                    <LoadWave/>
                    <LoadWave/>
                    <LoadWave/>
                    <LoadWave/>
                    <LoadWave/>
                </LoadContainer>

    }

    return data.load ?  <AllData/> : <Load/>;

}