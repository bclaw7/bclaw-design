import React from 'react';
import Buttons from './HomeButtons';
import ContactForm from './ContactForm';
import { Container, Image } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Container>
        <Image src='../img/bclaw-design-ooze.png' fluid />
        <Buttons />
        <br />
        <br />
        <br />
        <ContactForm />
      </Container>
    </>
  );
}
