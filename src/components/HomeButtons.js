import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HomeButtons() {
  return (
    <>
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
    </>
  );
}
