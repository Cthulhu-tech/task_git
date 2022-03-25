import styled from "styled-components";

export const ResultContainer = styled.section
`
width: 100%;
display: flex;
align-items: flex-start;
flex-direction: row-reverse;
justify-content: space-around;
min-height: calc(100vh - 141px);

@media (max-width: 577px) {

    align-items: center;
    flex-direction: column;

}
`

export const PagenationContainer = styled.div
`
left: 0;
bottom: 0;
display: flex;
padding: 10px;
position: sticky;
background-color: white;
width: calc(100% - 20px);
justify-content: space-evenly;
`