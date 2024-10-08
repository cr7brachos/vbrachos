import { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import Image from 'react-bootstrap/Image';
import { UserContext } from "../contexts/user.context";
import { CartContext } from "../contexts/cart.context";
import { signOutUser } from "../utils/firebase/firebase.utils";
import Carticon from "./cart-icon/cart-icon";
import CartDropdown from "./cart-dropdown/cart-dropdown.component";




function Header() {

  const { currentUser } = useContext(UserContext);
  const { isCartopen } = useContext(CartContext);

 

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark">
      <Container>

        <LinkContainer to="/">
            <Navbar.Brand>VBr</Navbar.Brand>  
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <LinkContainer to="/personal-info">
              <Nav.Link>Personal info</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/studies">
              <Nav.Link>Studies</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/experience">
              <Nav.Link>Experience</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Nav>
            <LinkContainer to="/download">
              <Nav.Link>Download</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            
            
              <Nav.Link as="a" href='https://www.facebook.com/vassilis.bchristou' target='_blank'>
                <Image src="images/facebook.png" width={25} height={25} fluid />
              </Nav.Link>
              
              <Nav.Link as="a" href='https://www.linkedin.com/in/vassilis-brachos-5161a627' target='_blank'>
                <Image src="images/linkedin.png" width={25} height={25} fluid />
              </Nav.Link>
              {/* if currentUser exists then SignOut, else SignIn */}
              { currentUser ? (<LinkContainer to="/auth">
                                <Nav.Link onClick={signOutUser}>Sign Out: {currentUser.email}</Nav.Link>
                              </LinkContainer>) 
                            :  (<LinkContainer to="/auth">
                                <Nav.Link>Sign In</Nav.Link>
                              </LinkContainer>)
              }

              <Carticon />
              {isCartopen && <CartDropdown />}  {/* εάν το isCartopen είναι true επιστρέφει το CartDropdown */}
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
    
  );
}

export default Header;