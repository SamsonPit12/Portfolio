import styled from 'styled-components';


const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 25vh;
    background-color: #193549;
    color: #dcdcdc;
    padding-top: 20vh;
    align-items: center;
    background-color: #a9b7cc;
    position: fixed;
    height: 100vh;
`

const LogoImg = styled.img`
    height: 17px;
    margin-right: 5px;
`
const TitleTd = styled.td`
    padding-top: 4px;
    font-weight: 500;
    color: black
`

const Techh2 = styled.h2`
    border-bottom: 6px solid rgba(0, 46, 94);
    padding-bottom: 2px;
    margin-bottom: 4%;
    width: 85%;
`

export {Sidebar, LogoImg, TitleTd, Techh2}