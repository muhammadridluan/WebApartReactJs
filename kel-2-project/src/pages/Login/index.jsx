import React from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Login() {
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
      <div>
        <img
          src="https://storage.googleapis.com/dream-machines-output/3d0f72b0-2f85-48e0-9325-c406fec40e3f/0_0.png"
          class="img-fluid"
          
          alt="imgLogin"
        ></img>
      </div>
      <Container className="mt-5 p-3 justify-content-center align-items-center">
        <Row className="p-3">
          <Col className="col-6 mx-auto">
            <Card className="mx-auto">
              <Form
                className="m-3"
                action="/#"
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Form.Group className="mb-3">
                  <Form.Label id="email">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
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
      </Container>
    </>
  );
}
