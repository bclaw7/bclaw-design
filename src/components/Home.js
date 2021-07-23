import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Buttons from './HomeButtons';
import ContactForm from './ContactForm';

export default function Home() {
  return (
    <>
      <Container>
        <Image src='../img/bclaw-design-gradient.png' fluid />
        <Buttons />
        <br />
        <br />
        <ContactForm />
      </Container>
    </>
  );
}
