import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs lg='2'>
          &copy; Copyright 2021 bclaw.design
        </Col>
        <Col xs lg='2'>
          Design by: Byron Cole Lawlis
        </Col>
      </Row>
    </Container>
  );
}
