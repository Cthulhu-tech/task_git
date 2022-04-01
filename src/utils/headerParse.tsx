export const headerParser = (link: string | null) => {

    if(link){

        let header:Array<string | Array<string>> = link.split(',');

        for(let i = 0; i < header.length; i++){
            
            header[i] = (header[i] as string).split(';');
    
        }
    
        for(let i = 0; i < header.length; i++){
    
            header[i] = (header[i][0] as string).split('&')[1].replace(/[><a-zA-Z=]/g, ''); // для выяснения последней страницы
            
        }

        if(header.length === 4){
    
            return header[2];
    
        }
        
        if(header.length === 2){

            return Math.max(Number(header[0]), Number(header[1])).toString();
    
        }

    }

    return "";

}