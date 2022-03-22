import styled from "styled-components";

export const HomeContainer = styled.section
`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
min-height: calc(100vh - 141px);
`

export const GreetingsParagraph = styled.p
`
font-size: clamp(1.5rem, 5vw, 10rem); 
`