import styled from 'styled-components';

const Styles = styled.div`
    a, p {
        display: inline-block;
        padding: 0 1vh;
        font-weight:500;
        font-size: 1.25rem;
        margin: 2vh auto 0; 
        color: black;
    }

    a:hover{
        text-decoration: none;
    }

    h1{
        font-size: 5rem;
        border-bottom: 6px solid #002e5e;
        border-radius: 6px;
        width: 45%;
        margin: 3vh auto;
        
        @media (max-width: 991px) {
            font-size: 3rem;
            width: 80%;
        }
    }

    span{
        color: #002e5e;
    }
`

const LogosLinks = styled.img`
    width: 3vh;
`

const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 15vh;
    text-align: center;

    @media (min-width: 768px) {
        width: 750px;
    }

    @media (min-width: 992px) {
        width: 970px;
    }

    @media (min-width: 1200px) {
        width: 1170px;
    }
`

export {Styles, LogosLinks, Container}