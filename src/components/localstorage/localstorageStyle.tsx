import styled from "styled-components";

export const LocalStorageContainer = styled.div
`
overflow-y: auto;
min-height: 260px;
overflow-x: hidden;
border-radius: 10px;
width: calc(100% - 20px);
border: 1px solid #e7e8ec;
`

export const AddContainer = styled.p
`
padding: 10px;
font-size: 16px;
cursor: pointer;
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

&:hover{

    color: red;

}

`