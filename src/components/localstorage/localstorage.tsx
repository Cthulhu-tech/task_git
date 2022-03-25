import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addFerstData } from "../../store/reducer/localstorageDataLoader";
import { LocalData } from "../../type/type";
import { LocalStorageContainer } from "./localstorageStyle"

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

    useEffect(() => {

        if(load)
            dataLoad();

    },[load, data])


    return  <LocalStorageContainer>
                {data ? <>data</> : <>123</>}
            </LocalStorageContainer>

}