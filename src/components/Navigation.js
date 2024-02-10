import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCarSide } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { useState, useEffect } from 'react';


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
    <Navbar className="bg-gradient-to-t from-tan to-pastel-green" sticky = "top" variant = "light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#">Car Dependency and the Environment</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link 
                style = {{flexDirection : "row"}}
                className = "content-center flex-auto"
                onClick={(e) => onPress(e)} 
                href="#problem"><FaCarSide /> Problem </Nav.Link>
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#solutions"><BsGraphUp/>Solutions
              </Nav.Link>
              <Nav.Link 
                onClick={(e) => onPress(e)} 
                href="#resources">Resources
              </Nav.Link>
            </Nav>
          </Container>
    </Navbar>
    </>
  );
};

export default Navigation;
