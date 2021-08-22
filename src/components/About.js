import React from 'react';
import { Link } from 'react-router-dom';
import GoToTop from './GoToTop';
import { Container, Image } from 'react-bootstrap';
import styled from 'styled-components';
import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';
import byron from '../img/Byron-n-Germany.jpg';
import Buttons from './WorksButtons';

export default function About() {
  return (
    <>
      <Container className='text-center'>
        <LightSpeed right>
          <h1 id='about-top' className='display-1 py-3'>
            <i className='bi bi-paint-bucket'></i>Byron Cole Lawlis
          </h1>
        </LightSpeed>
        <Bounce bottom duration={2000}>
          <Image src={byron} roundedCircle />
        </Bounce>
      </Container>
      <Container className='pt-2 text-light'>
        <p className='lead'>
          Hello! My name is Byron Lawlis. I am a Dad, Husband, and friend. I
          love being around everyone that wants to grow and learn together. When
          I'm not building web applications or working on creative projects I
          enjoy playing outside. You can most likely find my family and I on the
          trails of Colorado with our dog Tabbe hiking or biking. We also love
          paddleboarding on the high elevation lakes in the summer time. During
          the winter months we enjoy snowboarding and snowshoeing.
        </p>
        <p>
          I love music, art, and design on all types of mediums. I'm always
          learning and creating. I build fun, interactive, creative web
          applications. Experimenting and programming using the latest
          technologies is important to me. I currently have expertise with the
          following languages, tools, technologies, and libraries: HTML5, CSS3,
          JavaScript, JQuery, php, Bootstrap, Styled-Components, React.js,
          React-Reveal, axios, firebase, Wordpress, Elementor, Affinity Photo,
          Affinity Designer, and Adobe Photoshop.
        </p>
        <p>
          Check out my{' '}
          <StyledLink to='/works' className='text-secondary'>
            <i className='bi bi-tools'></i> Works
          </StyledLink>{' '}
          for the full experience.
        </p>
        <p>Thanks for visiting.</p>
        <p>
          <strong>
            Much Love <i className='bi bi-heart text-danger'></i>
          </strong>
        </p>
        <p>
          <em>-Byron</em>
        </p>
      </Container>
      <Buttons />
      <GoToTop />
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;
