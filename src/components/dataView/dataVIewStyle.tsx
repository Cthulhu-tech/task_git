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
overflow: auto;
min-height: 40px;
border-radius: 10px;
flex-direction: column;
align-items: flex-start;
width: calc(100% - 40px);
border: 1px solid #e7e8ec;
box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);

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
overflow: hidden;
text-decoration: none;

    &:hover{

        color: gray;

    }
`

export const LoadContainer = styled.div
`
width: 240px;
display: flex;
overflow: hidden;
align-items: center;
height: calc(100vh - 141px);
justify-content: space-between;
`

export const LoadWave = styled.div
`
width: 5px;
height: 80px;
border-radius: 10px;
background-color: black;
    &:nth-child(1){
        animation: -.6s linear 1s infinite alternate loadLinePuls;
    }
    &:nth-child(2){
        animation: -.5s linear 1s infinite alternate loadLinePuls;
    }
    &:nth-child(3){
        animation: -.4s linear 1s infinite alternate loadLinePuls;
    }
    &:nth-child(4){
        animation: -.3s linear 1s infinite alternate loadLinePuls;
    }
    &:nth-child(5){
        animation: -.2s linear 1s infinite alternate loadLinePuls;
    }
    &:nth-child(6){
        animation: -.1s linear 1s infinite alternate loadLinePuls;
    }
@keyframes loadLinePuls {
    0%{
        height: 100px;
        background-color: #808080;
    }
    50%{
        height: 10px;
        background-color: #e0e0e0;
    }
}
`

export const ContainerInfo = styled.div
`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`