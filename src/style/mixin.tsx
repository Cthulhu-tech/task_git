import { ImageType, ParagraphType, InputType, ButtonType } from "../../type/type";
import styled from "styled-components";

export const Image = styled.img
`
${(props:ImageType) => props?.props?.width && `max-width: ${props?.props?.width}px;`};
`

export const Input = styled.input
`
outline: none;
padding: 5px 10px;
${(props:InputType) => props?.props?.width && `width: ${props?.props?.width}px;`}
${(props:InputType) => props?.props?.height && `height: ${props?.props?.height }px;`}
${(props:InputType) => props?.props?.border && `border: 1px solid ${props?.props?.border};`}
${(props:InputType) => props?.props?.background && `background-color: ${props?.props?.background};`}
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
`

export const Paragraph = styled.p
`
padding: 10px;
${(props:ParagraphType) => props?.props?.color && `color: ${props?.props?.color};`}
${(props:ParagraphType) => props?.props?.size && `font-size: ${props?.props?.size}px;`}
${(props:ParagraphType) => props?.props?.["font-weight"] && `font-weight: ${props?.props?.["font-weight"]}px;`}
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
`

export const Button = styled.button
`
border: none;
outline: none;
cursor: pointer;
${(props:ButtonType) => props?.props?.color && `color: ${props?.props?.color };`}
${(props:ButtonType) => props?.props?.width && `width: ${props?.props?.width}px;`}
${(props:ButtonType) => props?.props?.height && `height: ${props?.props?.height}px;`}
${(props:InputType) => props?.props?.border && `border: 1px solid ${props?.props?.border};`}
${(props:ButtonType) => props?.props?.background && `background-color: ${props?.props?.background};`}
`