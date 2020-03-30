import styled from 'styled-components';


const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 25vh;
    color: #dcdcdc;
    padding-top: 20vh;
    align-items: center;
    background-color: #a9b7cc;
    position: fixed;
    height: 100vh;
    border-right: 1px solid gray;

    @media (max-width: 991px) {
        height: 1000vh;
        width: 15vh;
        font-size: .8rem;
    }

`

const LogoImg = styled.img`
    height: 17px;
    margin-right: 5px;
    margin-left: 1vh;
`
const TitleTd = styled.td`
    padding-top: 4px;
    font-weight: 500;
    color: black
`

const Techh2 = styled.h2`
    border-bottom: 6px solid #002e5e;
    border-radius: 6px;
    padding-bottom: 2px;
    margin-bottom: 4%;
    width: 85%;

    @media (max-width: 991px) {
        font-size: 1.5rem;
        width: 80%;
    }

`

export {Sidebar, LogoImg, TitleTd, Techh2}