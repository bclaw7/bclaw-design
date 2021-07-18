import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

export default function WorksButtons() {
  return (
    <>
      <Row className='text-center pt-4 my-5'>
        <Col>
          <Link to='/'>
            <Button variant='outline-secondary'>
              <i class='bi bi-house-door'></i> Home
            </Button>
          </Link>
        </Col>
        <Col>
          <Button
            href='https://github.com/bclaw7'
            target='_blank'
            variant='outline-secondary'>
            <i class='bi bi-github'></i> GitHub
          </Button>
        </Col>
        <Col>
          <Button
            href='https://www.linkedin.com/in/byron-lawlis-bba36420a/'
            target='_blank'
            variant='outline-secondary'>
            Linked<i class='bi bi-linkedin'></i>
          </Button>
        </Col>
      </Row>
    </>
  );
}
