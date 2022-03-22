export const dataFetch = (url: string) => {

    return fetch(`https://api.github.com/repos/${url}/forks?per_page=10&page=1`,
    {
        
    })
    .then(response => response.json())
    .then(data => data)
    .catch((err: Error) => console.log(err));
}