import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Buttons from './HomeButtons';
import ContactForm from './ContactForm';
import ParticlesBg from 'particles-bg';
// import { firebaseAnalytics } from '../firebase/firebaseConfig';

export default function Home() {
  //   useEffect(() => {
  //     firebaseAnalytics.logEvent('home_visited');
  //   });
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
    </>
  );
}
