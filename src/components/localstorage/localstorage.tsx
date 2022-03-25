import { addDataLocal, addFerstData } from "../../store/reducer/localstorageDataLoader";
import { AddLocal, LinkData, LocalStorageContainer, LocalStorageData } from "./localstorageStyle";
import { useDispatch, useSelector } from "react-redux";
import { LocalData } from "../../type/type";
import { useEffect, useState } from "react";
import { Image, Paragraph } from "../../style/mixin";
import { AddToLocalStorage } from "../../utils/addLocalStorageLogic";

export const LocalStorage = () => {

    const dispatch = useDispatch();
    const [load, setLoad] = useState(true);
    const data:LocalData = useSelector((state:{storage: {data :LocalData}}) => state.storage.data );

    const dataLoad = () => {

        setLoad(false);
        const localData:string | null = localStorage.getItem("favoriteForks");

        if(localData) {

            const localDataParse:LocalData = JSON.parse(localData);
            dispatch(addFerstData(localDataParse));
        }
    }

    const LocalStorageInfo = () => {

        if(data && (data?.url as string[])?.length > 0){

            return  <LocalStorageContainer>
                        {(data.url as string[]).map(url =>{
                            return  <LocalStorageData key={url}>
                                        <LinkData href={url}>
                                            {url}
                                        </LinkData>
                                    <AddLocal onClick={() => dispatch(addDataLocal(JSON.parse((AddToLocalStorage(url) as string))))}>remove</AddLocal>
                                    </LocalStorageData>
                        })}
                    </LocalStorageContainer>
        }else{

            return  <LocalStorageContainer>
                        <Image props={{width:250}} src="./image/error.png"/>
                        <Paragraph props={{size: 16}}>Unknown error</Paragraph>
                    </LocalStorageContainer>

        }

    }

    useEffect(() => {

        if(load)
            dataLoad();

    },[load, data])


    return  data && (data?.url as string[])?.length > 0 ? <LocalStorageInfo/> : <></>

}