export type ParagraphType = {
    props: {
        size: number,
        color?: string,
        "font-weight"?: string
    }
}

export type ImageType = {
    props: {
        width: number,
        height?: number
    }
}

export type InputType = {
    props: {
        width?: number,
        height?: number,
        background?: string,
    }   
}

export type ButtonType = {
    props: {
        color?: string,
        width?: number,
        height?: number,
        background?: string,
    }
}