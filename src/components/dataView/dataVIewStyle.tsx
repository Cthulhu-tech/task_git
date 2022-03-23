import styled from "styled-components";

export const DataContainer = styled.div
`
width: 100%;
`

export const DataInfoContainer = styled.div
`
margin: 10px;
padding: 10px;
display: flex;
flex-wrap: wrap;
min-height: 40px;
align-items: center;
border-radius: 10px;
width: calc(100% - 40px);
border: 1px solid #e7e8ec;
justify-content: space-between;

    &:hover{
        background-color: rgb(237,238,240);
    }

@media (max-width: 577px) {

    flex-direction: column;
    align-items: flex-start;

}
`

export const DataUrlContainer = styled.a
`
color: #5181b8;
text-decoration: none;

    &:hover{

        color: gray;

    }
`

export const LoadContainer = styled.div
`
width: 100%;
`

export const LoadWave = styled.div
`
width: clamp (5px; 10%; 10px);
height: clamp (5px; 10vh; 10px);
background-color: black;
`