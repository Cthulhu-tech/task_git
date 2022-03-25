import { addDataLocal } from "../reducer/localstorageDataLoader";

export const dataFetchLocal = (url: string) => {

    return (dispatch:any) => {

        fetch(url,
        {
            method: 'GET',
            headers: {
                Authorization: `Token ${process.env.REACT_APP_SECRET_TOKEN}`
            }
        })
        .then((response:any)=> {
            return response.json()
        })
        .then(dataJson => dispatch(addDataLocal(dataJson)))
        .catch((err: Error) => console.log(err));
    }

}
