import { addData, checkData } from "../reducer/apiDataLoader";
import { headerParser } from "../../utils/headerParse";
import { urlParams } from "../../type/type";
import { addLink } from "../reducer/linkParser";

export const dataFetch = (payload: urlParams) => {

    let page = payload.PageConvert || 1;
    let owner = payload.owner;
    let repoName = payload.repository;
    
    return (dispatch:any) => {

        dispatch(checkData(false));
        fetch(`https://api.github.com/repos/${owner}/${repoName}/forks?per_page=10&page=${page}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Token ${process.env.REACT_APP_SECRET_TOKEN}`
            }
        })
        .then((response:any)=> {
            const linkDataParsed = headerParser(response.headers.get('link'));
            dispatch(addLink((linkDataParsed as string[])));
            return response.json()
        })
        .then(dataJson => dispatch(addData(dataJson)))
        .catch((err: Error) => console.log(err));
    }

}
