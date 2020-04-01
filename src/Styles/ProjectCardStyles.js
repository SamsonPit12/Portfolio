import styled from 'styled-components';


const Styles = styled.div`
    .card{
        height: 100%;
     }

     .card-body{
         border-bottom: 0; 
         display: flex;
         flex-wrap: wrap; 
         justify-content: center;       
     }

    img{
        height:30vh;
        display: block;
        
        @media (max-width: 500px) {
            height:20vh;
        }
    }

    h3{
        border-bottom: 6px solid rgba(0, 46, 94);
        border-radius: 6px;
        width: 25vh;
        padding-bottom: 2px;
    }

    .card-deck{
        margin-top: 4%;        
    }

    a:hover{
        text-decoration: none;
    }

    div.col-md-6 {
        margin-bottom: 5vh;
    }
`
const ButtonCode = styled.button`
    color: white;
    border-radius: 5px;
    padding: 0.3rem 3rem;
    margin: 0.5rem auto;
    background-color: #002e5e;
    border: 1px solid #9ec1f7;
    transition: 0.2s all ease-out;
    font-weight: 500;
    margin-top: 2vh; 

    &:hover {
        background-color: #9ec1f7;
        color: black;
    }
`

const ButtonApp = styled.button`
    color: white;
    border-radius: 5px;
    padding: 0.3rem 3rem;
    margin: 0.5rem auto;
    margin-top: 0vh;
    background-color: #4980ba;
    border: .5px solid #9ec1f7;
    transition: 0.2s all ease-out;
    font-weight: 500;
    margin-top: 2vh;

    &:hover {
        background-color: #9ec1f7;
        color: black;
        border: .5px solid #9ec1f7;
    }
`

const TechInfo = styled.div`
    font-weight: 500;
    margin-top: 2vh;   
    width: 100%; 
    text-align: center;
`

const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 10vh;

    @media (max-width: 768px) {
        padding-top: 6vh;
    }

    @media (min-width: 992px) {
        width: 970px;
        margin-top: 3vh;
    }

    @media (min-width: 1200px) {
        width: 1170px;
    }
`


export {Styles, ButtonCode, ButtonApp, TechInfo, Container}