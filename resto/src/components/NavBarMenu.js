import React, { Component } from 'react';
import{Navbar, Nav} from 'react-bootstrap'

import{BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faList,faPlus,faSearch,faUser} from '@fortawesome/free-solid-svg-icons'

class NavBarMenu extends Component {
    render() {
        return (
            <div>
                
                   <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} color="Red"/> Home</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/list"> <FontAwesomeIcon icon={faList} color="Red"/> List </Link></Nav.Link>
      <Nav.Link href="#home"><Link to="/create"><FontAwesomeIcon icon={faPlus} color="Red"/> Create</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/details"><FontAwesomeIcon icon={faSearch} color="Red"/> Details</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/serach"><FontAwesomeIcon icon={faSearch} color="Red"/> Serach</Link></Nav.Link>
      { localStorage.getItem('login')?
      <Nav.Link href="#home"><Link to="/logout"><FontAwesomeIcon icon={faUser} color="Red"/>Logout</Link></Nav.Link>
:
      <Nav.Link href="#home"><Link to="/login"><FontAwesomeIcon icon={faUser} color="Red"/>Login</Link></Nav.Link>
   
        }
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
            </div>
        );
    }
}

export default NavBarMenu;