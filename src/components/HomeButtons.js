import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

export default function HomeButtons() {
  return (
    <>
      <Row className='text-center mb-5'>
        <Col>
          <Link to='/about'>
            <Button className='btn btn-outline-secondary'>
              <i className='bi bi-info-circle'></i> About
            </Button>
          </Link>
        </Col>
        <Col>
          <Link to='/works'>
            <Button className='btn btn-outline-secondary'>
              <i className='bi bi-tools'></i> Works
            </Button>
          </Link>
        </Col>
        <Col>
          <a rel='noreferrer' href='https://github.com/bclaw7' target='_blank'>
            <Button className='btn btn-outline-secondary'>
              <i className='bi bi-github'></i> GitHub
            </Button>
          </a>
        </Col>
        <Col>
          <a
            rel='noreferrer'
            href='https://www.linkedin.com/in/byron-lawlis-bba36420a/'
            target='_blank'>
            <Button className='btn btn-outline-secondary'>
              Linked<i className='bi bi-linkedin'></i>
            </Button>
          </a>
        </Col>
      </Row>
    </>
  );
}

const Button = styled.button`
  font-size: 3vw;
`;
