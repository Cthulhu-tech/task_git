export const headerParser = (link: string) => {

    let header:Array<string | Array<string>> = link.split(',');

    for(let i = 0; i < header.length; i++){
        
        header[i] = (header[i] as string).split(';');

    }

    for(let i = 0; i < header.length; i++){

        header[i] = (header[i][0] as string).replace(/[><]/g, '');

    }

    if(header.length === 4){

        return header[2];

    }

    if(header.length === 2){

        return header[header.length - 1];

    }

}