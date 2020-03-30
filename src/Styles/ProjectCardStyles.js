import styled from 'styled-components';


const Styles = styled.div`
    .card{
        height: 100%;        
     }

     .card-body{
         border-bottom: 0;       
     }

    img{
        height:20vh;
        display: block;
        max-height: 25vh;    
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

    div.col-lg-4.col-md-6 {
        @media (max-width: 991px) {
            margin-bottom: 5vh;
        }
    }
`
const ButtonCode = styled.button`
    display: flex;
    width: 100%;
    color: white;
    border-radius: 5px;
    padding: 0.3rem 5px;
    margin: 0.5rem auto;
    background-color: #002e5e;
    border: 1px solid #9ec1f7;
    transition: 0.2s all ease-out;
    font-weight: 500;
    justify-content: space-evenly; 
    margin-top: 2vh; 

    &:hover {
        background-color: #9ec1f7;
        color: black;
    }
`

const ButtonApp = styled.button`
    display: flex;
    width: 100%;
    color: white;
    border-radius: 5px;
    padding: 0.3rem 5px;
    margin: 0.5rem auto;
    margin-top: 0vh;
    background-color: #4980ba;
    border: .5px solid #9ec1f7;
    transition: 0.2s all ease-out;
    font-weight: 500;
    justify-content: space-evenly;
    margin-top: 5vh;

    &:hover {
        background-color: #9ec1f7;
        color: black;
        border: .5px solid #9ec1f7;
    }
`

const TechInfo = styled.div`
    font-weight: 500;
    margin-top: 2vh;    
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