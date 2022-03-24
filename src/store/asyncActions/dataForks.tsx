import { addData, checkData } from "../reducer/apiDataLoader";
import { urlParams } from "../../type/type"

export const dataFetch = (payload: urlParams) => {

    let page = payload.PageConvert || 1;
    let owner = payload.owner;
    let repoName = payload.repository;
    if(page <= 0) {
        page = 1;
    }
    return (dispatch:any) => {
        dispatch(checkData(""));
        fetch(`https://api.github.com/repos/${owner}/${repoName}/forks?per_page=10&page=${page}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Token ${process.env.REACT_APP_SECRET_TOKEN}`
            }
        })
        .then((response:any)=> {
            console.log(response.headers.get('link'))
            return response.json()
        })
        .then(dataJson => dispatch(addData(dataJson)))
        .catch((err: Error) => console.log(err));
    }

}