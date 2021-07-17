import React from 'react';
import Buttons from './HomeButtons';
import ContactForm from '../contact';
import { Container, Image } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Container>
        <Image src='../img/bloody-web-design-logo.png' fluid />
        <Buttons />
        <br />
        <br />
        <br />
        <ContactForm />
      </Container>
    </>
  );
}
