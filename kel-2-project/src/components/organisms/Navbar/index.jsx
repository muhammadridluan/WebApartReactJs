import React from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function NaviBar() {  
  const navigate = useNavigate();
  return (    
    <>
      <Navbar key="md" bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/home">Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/listunit">List Unit</Nav.Link>                
              </Nav>
              <Form className="d-flex">
                <Button
                  variant="outline-primary"
                  className="me-2"
                  onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button variant="primary" onClick={() => navigate("/register")}>
                  Register
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
