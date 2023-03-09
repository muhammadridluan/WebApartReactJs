
import React from "react";
import { Corousel } from "../../components";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function ListUnit() {
  const [data, setData] = useState({});

  async function getPets() {
    try {
      const response = await axios.get("http://127.0.0.1:1880/all");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }

  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
    <Corousel></Corousel>

    
    <section className="bg-light py-5 border-bottom">
        <Container className="px-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">New Articles</h2>
            <p className="lead mb-0">Lorem ipsum dolor sit amet</p>
          </div>
          <Row className="gx-5 justify-content-center">
            {data !== undefined &&
              data?.map((item, i) => (
                <Col key={i} lg={6} xl={4}>
                  <Card>
                    <Card.Img variant="top" src={item.img_design[0]} />
                    <Card.Body>
                      <Card.Title>{item.unit}</Card.Title>
                      <Card.Text style={{ WebkitLineClamp: 3, lineClamp: 3, textOverflow:'ellipsis' }}>
                        {limit(item.description, 220)}
                      </Card.Text>
                      <div className="d-grid">
                        <Button
                          href={`/articles/detail/${item.id}`}
                          variant="outline-primary">
                          Go somewhere
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    
    </>
  );
}
