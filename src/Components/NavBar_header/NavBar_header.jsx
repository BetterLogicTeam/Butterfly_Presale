import React from 'react'
import "./NavBar_header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import abort_logo from "../Assets/abort_logo.svg"
import head1 from "../Assets/head1.svg"
import head2 from "../Assets/head2.svg"
import head3 from "../Assets/head3.svg"
import head4 from "../Assets/head4.svg"
import head5 from "../Assets/head5.svg"
import head6 from "../Assets/head6.svg"

function NavBar_header() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" bg="light" className='' variant="dark">
      <Container className='nav_bar_abort'>
        <Navbar.Brand href="#home"><img src={abort_logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
                <div className="socials_icons">
                    <div className="icons_img">
                        <img src={head1} alt="" />
                        <img src={head2} alt="" />
                        <img src={head3} alt="" />
                        <img src={head4} alt="" />
                        <img src={head5} alt="" />
                        <img src={head6} alt="" />

                    </div>
                </div>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             <button className='wallet_button_header'>Connect Wallet</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default NavBar_header
