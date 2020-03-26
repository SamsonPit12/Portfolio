import styled from 'styled-components';


const Styles = styled.div`
 
    .container{
        margin-bottom: 10%;
        padding-top: 15%;
    }
    .card{
        height: 400px;
        margin-bottom: 10px;
    }
    
    img{
        max-width: 100%;
        display: block;
        max-height: 21vh;
    }

    h3{
        border-bottom: 6px solid rgba(0, 46, 94);
        width: 20%;
        padding-bottom: 2px;
    }

    .card-deck{
        margin-top: 4%;
    }

`
const ButtonCode = styled.button`
    display: inline-block;
    width: 8vh;
    color: white;
    border-radius: 5px;
    padding: 0.3rem 5px;
    margin: 0.5rem .5rem;
    float: left;


    background-color: #4287f5;
    border: .5px solid #9ec1f7;
    transition: 0.2s all ease-out;
    font-weight: 500;

    &:hover {
        background-color: #9ec1f7;
        color: black;
    }
`

const ButtonApp = styled.button`
display: inline-block;
width: 8vh;
    color: white;
    border-radius: 5px;
    padding: 0.3rem 0px;
    margin: 0.5rem .5rem;
    background-color: #ed952f;
    border: .5px solid #ed952f;
    transition: 0.2s all ease-out;
    font-weight: 500;
    float: left;

    &:hover {
        background-color: #f0b673;
        color: black;
    }

`


export {Styles, ButtonCode, ButtonApp}