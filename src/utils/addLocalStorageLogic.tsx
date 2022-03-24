export const AddToLocalStorage = async (url:string) => {

    let favorite:any = "";
    let findUndefined = false;
    const dataLocalstorage = localStorage.getItem("favoriteCity");
    if(dataLocalstorage !== null){
        favorite = JSON.parse(dataLocalstorage);
    }
    if(!favorite || favorite?.url?.length === 0){
        return localStorage.setItem( "favoriteCity" , 
            JSON.stringify(
                {url: 
                    [url]
                })
            );
    }
    favorite.url = favorite?.url.filter((data:string) => {
        if(data === url){
            findUndefined = true;
        }
        if(data !== url){
            return data;
        }
    })
    if(findUndefined) return  localStorage.setItem( "favoriteCity" , JSON.stringify({url:[ ... Array.from(new Set([...favorite.url])) ] }))
    if(favorite?.url?.length > 0){
        return localStorage.setItem( "favoriteCity" , JSON.stringify({ 
            url:[ ... Array.from(new Set([...favorite.url, url]))  ] 
        }));
    }
}