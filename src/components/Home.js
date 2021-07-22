import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Buttons from './HomeButtons';
import ContactForm from './ContactForm';
import About from './About';

export default function Home() {
  return (
    <>
      <Container>
        <Image src='../img/bclaw-design-ooze.png' fluid />
        <Buttons />
        <br />
        <About />
        <br />
        <ContactForm />
      </Container>
    </>
  );
}
