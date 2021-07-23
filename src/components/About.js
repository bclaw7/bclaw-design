import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Image } from 'react-bootstrap';
import styled from 'styled-components';
import byron from '../img/Byron-n-Germany.jpg';

export default function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn btn-outline-secondary' onClick={handleShow}>
        <i className='bi bi-info-circle'></i> About
      </Button>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Byron Cole Lawlis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={byron} thumbnail />
          <p className='lead'>
            I am a Dad who loves spending time with family and friends. You can
            most likely find us on the trails of Colorado with our dog Tabbe or
            paddleboarding on the high elevation lakes. We love to snowshoe and
            snowboard all winter long.
          </p>
          <p>
            I love music, art, and design on all types of mediums. I'm always
            learing and creating. I like to build fun, interactive, creative web
            applications. I use
            <mark>
              HTML5, CSS3, JavaScript, Bootstrap, Styled-Components, React.js,
              Affinity Photo and Designer
            </mark>
            .
          </p>
          <p>
            <Link to='/works'>Check out my works for the full experience.</Link>
          </p>
          <p>Thanks for visiting.</p>
          <p>
            <strong>Much Love.</strong>
          </p>
          <p>
            <em>-Byron</em>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

const Button = styled.button`
  font-size: 3vw;
`;
