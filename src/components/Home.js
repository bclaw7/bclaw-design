import React from 'react';
import GoToTop from './GoToTop';
import { Container, Image } from 'react-bootstrap';
import Buttons from './HomeButtons';
import ContactForm from './ContactForm';
import ParticlesBg from 'particles-bg';

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
      <ParticlesBg type='random' bg={true} />
      <GoToTop />
    </>
  );
}
