import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <Navbar className = "bg-gradient-to-r from-green to-light-green"sticky = "top" variant = "light" bg="bg-gradient-to-r from-purple-500 to-pink-500" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#">Car Dependency and the Environment</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#problem">Problem
              </Nav.Link>
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#data">Data
              </Nav.Link>
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#info">Info
              </Nav.Link>
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#solution">Solution
              </Nav.Link>
            </Nav>
          </Container>
    </Navbar>
    </>
  );
};

export default Navigation;
