import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import About from './About';

export default function HomeButtons() {
  return (
    <>
      <Row className='text-center mb-5'>
        <Col>
          <About />
        </Col>
        <Col>
          <Link to='/works'>
            <Button className='btn btn-outline-secondary'>
              <i className='bi bi-tools'></i> Works
            </Button>
          </Link>
        </Col>
        <Col>
          <Button
            href='https://github.com/bclaw7'
            target='_blank'
            className='btn btn-outline-secondary'>
            <i className='bi bi-github'></i> GitHub
          </Button>
        </Col>
        <Col>
          <Button
            href='https://www.linkedin.com/in/byron-lawlis-bba36420a/'
            target='_blank'
            className='btn btn-outline-secondary'>
            Linked<i className='bi bi-linkedin'></i>
          </Button>
        </Col>
      </Row>
    </>
  );
}

const Button = styled.button`
  font-size: 3vw;
`;
