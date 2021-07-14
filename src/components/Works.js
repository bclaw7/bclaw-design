import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Row, Col, Card, Button } from 'react-bootstrap';

export default function Works() {
  return (
    <Container>
      <Image className='mt-5 py-5' src='../img/web-design-logo.png' fluid />
      <Row xs={1} md={2} className='g-4'>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card border='secondary'>
              <Card.Img variant='top' src='../img/block-hand.jpg' />
              <Card.Body>
                <Card.Title>Wood Block</Card.Title>
                <Card.Text>
                  This is a layered composition using Adobe Photoshop. Check out
                  those gradient overlays!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className='text-center pt-4 my-5'>
        <Col>
          <Link to='/'>
            <Button variant='outline-secondary'>Home</Button>
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
