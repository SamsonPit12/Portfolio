import styled from 'styled-components';

const Styles = styled.div`
  form { 
    max-width:420px; 
    margin:50px auto; 
  }

  h3{
    border-bottom: 6px solid rgba(0, 46, 94);
    border-radius: 6px;
    width: 25vh;
    padding-bottom: 2px;
  }

  label{
    float: left;
    color: black;
    font-weight: 500;
  }

  .message-input {
    color: rgba(0, 46, 94);
    font-family: Helvetica, Arial, sans-serif;
    font-weight:500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border:2px solid rgba(0, 46, 94, 0.3);
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width:100%;
    box-sizing: border-box;
    outline:0;
  }

  .message-input:focus { 
    border:2px solid rgba(0, 46, 94); 
  }

  textarea {
    height: 150px;
    line-height: 150%;
    resize:vertical;
  }

  button {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    width: 40%;
    background-color: rgba(0, 46, 94);
    border-radius:5px;
    border:0;
    cursor:pointer;
    color:white;
    font-size:18px;
    font-weight: 500;
    padding-top:5px;
    padding-bottom:5px;
    transition: all 0.3s;
    margin-top:-4px;
  }

  button:hover { 
    background-color: rgba(0, 46, 94, 0.3); 
  }

  img{
    padding-top: 1px;
    margin-bottom: 4px;
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
`

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 10vh;
  margin-bottom: 30vh;

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