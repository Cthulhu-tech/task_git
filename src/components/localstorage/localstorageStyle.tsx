import styled from "styled-components";

export const LocalStorageContainer = styled.div
`
width: 100%;
display: flex;
max-width: 500px;
overflow-y: auto;
overflow-x: hidden;
align-items: center;
border-radius: 10px;
flex-direction: column;
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

export const LocalStorageData = styled.div
`
margin: 10px;
padding: 10px;
overflow: hidden;
min-height: 40px;
border-radius: 10px;
width: calc(100% - 22px);
border: 1px solid #e7e8ec;
box-shadow: 0px 5px 5px -5px rgb(34 60 80 / 60%);

`

export const AddLocal = styled.p
`
width: 100%;
padding: 10px;
font-size: 16px;
cursor: pointer;
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

&:hover{

    color: red;

}
`

export const LinkData = styled.a
`
width: 100%;
padding: 10px;
color: #5181b8;
text-decoration: none;
`