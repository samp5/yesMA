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
    <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#orange">Orange
                <div data-to-scrollspy-id="brown" className={"ss-item"}>
                  orange
                </div>
              </Nav.Link>
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#brown">Brown
                <div data-to-scrollspy-id="brown" className={"ss-item"}>
                  brown
                </div>
              </Nav.Link>
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#orange">Orange
                <div data-to-scrollspy-id="brown" className={"ss-item"}>
                  orange
                </div>
              </Nav.Link>
            </Nav>
          </Container>
    </Navbar>
    </>
  );
};

export default Navigation;
