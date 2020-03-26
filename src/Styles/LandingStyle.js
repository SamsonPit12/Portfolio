import styled from 'styled-components';

const Styles = styled.div`

    .container{
        margin-top: 10vh;
        text-align: center;

    }

    a, p {
        display: inline-block;
        padding: 0 1vh;
        font-weight:500;
        font-size: 1.25rem;
        margin: 0 auto 2vh; 
        color: black;
    }

    a:hover{
        text-decoration: none;
    }

    h1{
        font-size: 5rem;
        border-bottom: 6px solid #002e5e;
        width: 45%;
        margin: 4vh auto;      
    }



    span{
        color: #002e5e;
    }
`

const LogosLinks = styled.img`
    width: 3vh;
`

export {Styles, LogosLinks}