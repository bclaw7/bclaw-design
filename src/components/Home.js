import React from 'react';
import Buttons from './HomeButtons';
import ContactForm from '../contact';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

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
