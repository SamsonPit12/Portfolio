import styled from 'styled-components';


const Styles = styled.div`
    p{
        text-align:left;
    }

    h3{
        border-bottom: 6px solid #002e5e;
        border-radius: 6px;
        width: 25vh;
        padding-bottom: 2px;
        margin-bottom: 4%;
    }  
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
    }

    @media (min-width: 1200px) {
        width: 1170px;
    }
`


export {Styles, Container}