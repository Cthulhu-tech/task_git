import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { LocalData } from "../../type/type";
import { LocalStorageContainer } from "./localstorageStyle"

export const LocalStorage = () => {

    const [load, setLoad] = useState(true);
    const data:any = useSelector((state:any) => state );

    const dataLoad = () => {

        setLoad(false);

        const localData:string | null = localStorage.getItem("favoriteForks");

        if(localData) {

            const localDataParse:LocalData = JSON.parse(localData);

        }

    }

    useEffect(() => {

        if(load)
            dataLoad();
            console.log(data)

    },[load, data])


    return  <LocalStorageContainer>
                
            </LocalStorageContainer>

}