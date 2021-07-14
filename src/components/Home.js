import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Image src='../img/bloody-web-design-logo.png' fluid />
      <Row className='text-center mb-5'>
        <Col>
          <Link to='/works'>
            <Button variant='outline-secondary'>Works</Button>
          </Link>
        </Col>
        <Col>
          <Button
            href='https://github.com/bclaw7'
            target='_blank'
            variant='outline-secondary'>
            GitHub
          </Button>
        </Col>
        <Col>
          <Button
            href='https://www.linkedin.com/in/byron-lawlis-bba36420a/'
            target='_blank'
            variant='outline-secondary'>
            Linked<strong>in</strong>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
