import { ContainerInfo, DataContainer, DataInfoContainer, DataUrlContainer, LoadContainer, LoadWave } from "./dataVIewStyle";
import { AllDataType, BadRequest, ForksData } from "../../interface/interaface";
import { ImageContainer } from "../layout/layoutStyle";
import { Image, Paragraph } from "../../style/mixin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AddContainer } from "../localstorage/localstorageStyle";
import { AddToLocalStorage } from "../../utils/addLocalStorageLogic";
import { addDataLocal } from "../../store/reducer/localstorageDataLoader";

export const DataView = () => {
    
    const dispatch = useDispatch();
    const data  = useSelector((state:{dataLoad: ForksData}) => state.dataLoad);

    useEffect(() => {

    },[data]);

    const addLocalStorageLogic = (url: string) => {

        console.log( AddToLocalStorage(url))



    }
    
    const AllData = () => {
        if((data.data as BadRequest).message) {
            return  <DataContainer>
                        <Paragraph props={{size: 16}}>{(data.data as BadRequest).message}</Paragraph>
                    </DataContainer>
        }else{
            return  <DataContainer>
                    {(data.data as AllDataType[]).map((info:AllDataType) => {
                            return <DataInfoContainer key={info.id}>
                                        <DataUrlContainer href={info.html_url}>
                                            <Paragraph props={{size: 16}}>forks name: {info.full_name}</Paragraph>
                                        </DataUrlContainer>
                                        <ImageContainer>
                                            <Paragraph props={{size: 16 , color: '#5b5b66'}}>Owner: {info.owner.login}</Paragraph>
                                            <Image props={{width: 30}} src={info.owner.avatar_url}/>
                                        </ImageContainer>
                                        <Paragraph props={{size: 16, color: '#5b5b66'}}>Star: {info.stargazers_count}</Paragraph>
                                        <AddContainer onClick={() => addLocalStorageLogic(info.url)}>Favorite</AddContainer>
                                    </DataInfoContainer>
                    })}
                    </DataContainer>
        }
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
    const EmptyData = () => {

        return  <ContainerInfo>  
                    <Paragraph props={{size: 16}}>It's empty</Paragraph> 
                    <Image props={{width: 250}} src="./image/empty.png"/>
                </ContainerInfo>

    }

    return (data.data as AllDataType[]).length <= 0 && data.load 
    ? <EmptyData/>
    : data.load 
    ? <AllData/> 
    : <Load/>;

}