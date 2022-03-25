import { LocalData } from "../type/type";

export const AddToLocalStorage = (url:string) => {

    let findUndefined = false;
    let favorite:LocalData = {url: [""]};
    let dataLocalstorage = localStorage.getItem("favoriteForks");

    if(dataLocalstorage){

        favorite = JSON.parse(dataLocalstorage);

    }
    if(!favorite || favorite?.url?.length === 0){

        const data = JSON.stringify(
            {url: 
                [url]
            });

        localStorage.setItem( "favoriteForks" , data);
        
        return data;
        
    }

    favorite.url = (favorite?.url as string[]).filter((data:string) => {

        if(data === url){

            findUndefined = true;

        }

        if(data !== url){

            return data;

        }

    })

    if(findUndefined){

        const data = JSON.stringify({url:[ ... Array.from(new Set([...favorite.url])) ] });
        
        localStorage.setItem( "favoriteForks" , data);

        return data;

    }

    if(favorite?.url?.length > 0){

        const data = JSON.stringify({ 

            url:[ ... Array.from(new Set([...favorite.url, url]))  ]

        });
        
        localStorage.setItem( "favoriteForks" , data);

        return data;
    }
}