import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Tof from './Tof';
import Simple from './Simple';
import Beaded from './Beaded';
import Fancy from './Fancy';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Route, Routes, Link } from "react-router-dom"
import two from './images/two.png';



function Bar() {
  return (
    <>
      {[false, ].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container id="container" fluid>
            <Navbar.Brand href="#">

      
            <i id="social" class="fa-brands fa-facebook"></i>
            <i id="social" class="fa-brands fa-instagram"></i>
            <i id="social" class="fa-brands fa-linkedin-in"></i>
            <i id="social" class="fa-brands fa-pinterest"></i>
            
            
            </Navbar.Brand>
            <Navbar.Toggle id="test" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id= {`offcanvasNavbarLabel-expand-${expand}`}>

                <img id="logo" className="two" src={two} alt="second logo" />

                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                 
                  
                  <Link id="link" to="/">Home</Link> 
                  <Link id="link" to="/Tof">About Us</Link>
                  <Link id="link" to="/Reviews">Customer Reviews</Link>
                       
                  <NavDropdown 
                    title="Portfolio"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item>
                      <center><Link id="link" to="/Simple">Simple Pendants</Link></center></NavDropdown.Item>

                    <NavDropdown.Item>
                    <center><Link id="link" to="/Fancy">Fancy Pendants</Link></center>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                    <center><Link id="link" to="/Beaded">Beaded Chains</Link></center>
                    </NavDropdown.Item>
                  </NavDropdown>
                  
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-dark">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Bar;