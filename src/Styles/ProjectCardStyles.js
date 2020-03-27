import styled from 'styled-components';


const Styles = styled.div`
 
    .container{
        margin-bottom: 10vh;
        padding-top: 10vh;
    }
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
        width: 20%;
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




export {Styles, ButtonCode, ButtonApp, TechInfo}