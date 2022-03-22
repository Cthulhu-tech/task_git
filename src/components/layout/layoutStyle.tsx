import styled from "styled-components"

export const Header = styled.header
`
width: 100%;
display: flex;
min-height: 59px;
align-items: center;
border-bottom: 1px solid gray;
`

export const Main = styled.main
`
padding: 10px;
margin: 0 auto;
min-height: calc(100vh - 141px);
width: clamp(260px,calc(100% - 100px),1200px);
`

export const Footer = styled.footer
`
width: 100%;
min-height: 60px;
background-color: rgb(28,29,34);
`
