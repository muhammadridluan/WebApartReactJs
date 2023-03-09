import React from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
  Row,
  Col,
  Card
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { useForm } from "react-hook-form";


export default function NaviBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/home");
  };

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
                  onClick={handleShow}>
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

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row className="p-3 justify-content-center align-items-center">
          <Col className="col-10 mx-auto">
            <Card className="mx-auto p-3">
              <Form action="/#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label id="email">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    // isValid={!errors.email}
                    isInvalid={errors.email}
                    aria-invalid={errors.email ? "true" : "false"}
                    placeholder="Email Address"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                  />
                  {errors.email && (
                    <Form.Text className="text-danger">
                      {errors.email?.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label id="password">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    // isValid={!errors.email}
                    isInvalid={errors.email}
                    aria-invalid={errors.password ? "true" : "false"}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <Form.Text className="text-danger">
                      {errors.password?.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button type="submit" variant="primary">
                    Login
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
        </Modal.Body> 
      </Modal>
    </>
  )
}
