import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container className='py-2'>
      <Row className='justify-content-md-center'>
        <Col>
          <p className='text-center'>&copy; Copyright 2021 bclaw.design</p>
        </Col>
        <Col>
          <p className='text-center'>design by: Byron Cole Lawlis</p>
        </Col>
      </Row>
    </Container>
  );
}
