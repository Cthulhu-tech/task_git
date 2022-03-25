import { ContainerInfo, DataContainer, DataInfoContainer, DataUrlContainer, LoadContainer, LoadWave } from "./dataVIewStyle";
import { AllDataType, BadRequest, ForksData } from "../../interface/interaface";
import { ImageContainer } from "../layout/layoutStyle";
import { Image, Paragraph } from "../../style/mixin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AddContainer } from "../localstorage/localstorageStyle";
import { AddToLocalStorage } from "../../utils/addLocalStorageLogic";
import { addDataLocal } from "../../store/reducer/localstorageDataLoader";
import { LocalData } from "../../type/type";

export const DataView = () => {
    
    const dispatch = useDispatch();
    const data  = useSelector((state:{dataLoad: ForksData, storage: {data :LocalData}}) => state);

    useEffect(() => {

    },[data]);
    
    const AllData = () => {
        if((data.dataLoad.data as BadRequest).message) {
            return  <DataContainer>
                        <Paragraph props={{size: 16}}>{(data.dataLoad.data as BadRequest).message}</Paragraph>
                    </DataContainer>
        }else{
            return  <DataContainer>
                    {(data.dataLoad.data as AllDataType[]).map((info:AllDataType) => {
                            return <DataInfoContainer key={info.id}>
                                        <DataUrlContainer href={info.html_url}>
                                            <Paragraph props={{size: 16}}>forks name: {info.full_name}</Paragraph>
                                        </DataUrlContainer>
                                        <ImageContainer>
                                            <Paragraph props={{size: 16 , color: '#5b5b66'}}>Owner: {info.owner.login}</Paragraph>
                                            <Image props={{width: 30}} src={info.owner.avatar_url}/>
                                        </ImageContainer>
                                        <Paragraph props={{size: 16, color: '#5b5b66'}}>Star: {info.stargazers_count}</Paragraph>
                                        <AddContainer onClick={() => dispatch(addDataLocal(JSON.parse((AddToLocalStorage(info.html_url) as string))))}>
                                            {findUrl(info.html_url)}
                                        </AddContainer>
                                    </DataInfoContainer>
                    })}
                    </DataContainer>
        }
    }

    const findUrl = (url: string) => {

        if(data.storage.data){

            for(let i = 0; i < (data.storage.data.url as string[]).length; i++) {

                if((data.storage.data.url as string[])[i] === url){
                    
                    return "remove";

                }

            }

        }

        return "add";

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

    return (data.dataLoad.data as AllDataType[]).length <= 0 && data.dataLoad.load 
    ? <EmptyData/>
    : data.dataLoad.load 
    ? <AllData/> 
    : <Load/>;

}