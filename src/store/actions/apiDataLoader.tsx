import { urlParams } from "../../../type/type"

export const dataFetch = (url:{payload: urlParams}) => {

    let page = url.payload.page || 1;
    let owner = url.payload.owner;
    let repoName = url.payload.repoName;

    return fetch(`https://api.github.com/repos/${owner}/${repoName}/forks?per_page=10&page=${page}`,
    {
        method: 'GET',
        headers: {
            Authorization: `Token ${process.env.REACT_APP_SECRET_TOKEN}`
        }
    })
    .then(response => response.json())
    .then(data => data)
    .catch((err: Error) => console.log(err));

}