import styled from 'styled-components';


const Styles = styled.div`

.navbar-light .navbar-nav .nav-link {
    color: white;
}

.navbar-light .navbar-brand {
    color: white;
}


nav{    
    text-align: center;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    padding: 0px 5%;
    color: white;
}

.nav-link{
    transition: 0.4s;
    text-decoration: none;
    padding: 10px 10px;
    margin: 0px 10px;
}

.nav-link:hover {
    background-color: #9ec1f7;
    border-radius: 3px;
    color: white;
    // padding: 10px;

}
`

export default Styles