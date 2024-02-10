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
    <Navbar sticky = "top" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Car Dependency and the Environment</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#orange">Orange
              </Nav.Link>
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#brown">Brown
              </Nav.Link>
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#green">Green
              </Nav.Link>
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#blue">Blue
              </Nav.Link>
            </Nav>
          </Container>
    </Navbar>
    </>
  );
};

export default Navigation;
