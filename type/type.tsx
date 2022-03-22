export type ParagraphType = {
    props: {
        size: number,
        color?: string,
        "font-weight"?: string,
    }
}

export type ImageType = {
    props: {
        width: number,
        height?: number,
    }
}

export type InputType = {
    props: {
        width?: number,
        height?: number,
        background?: string,
        border?: string,
    }   
}

export type ButtonType = {
    props: {
        color?: string,
        width?: number,
        height?: number,
        background?: string,
        border?: string,
    }
}

export type UseSelectorData = {

    dataLoad: ReducerDataLoader,

}

export type ReducerDataLoader = {

    data: [],

}

export type urlParams = {

    page?: string,
    repoName: string,
    owner: string,

}