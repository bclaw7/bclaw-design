import React from 'react';
import { Link } from 'react-router-dom';
import GoToTop from './GoToTop';
import { Container, Image } from 'react-bootstrap';
import styled from 'styled-components';
import Jello from 'react-reveal/Jello';
import Bounce from 'react-reveal/Bounce';
import byron from '../img/Byron-n-Germany.jpg';
import Buttons from './WorksButtons';

export default function About() {
  return (
    <>
      <Container id='about-top' className='text-center pt-5'>
        <Jello delay={1000}>
          <Title className='display-1'>
            <i class='bi bi-paint-bucket'></i>Byron Cole Lawlis
          </Title>
        </Jello>
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
          trails of Colorado with our dog Tabbe hiking or biking. In the warmer
          months we love backyard hang-outs, paddleboarding, and playing tennis.
          During the snow season we enjoy snowboarding and snowshoeing. We stay
          active and never stop exploring.
        </p>
        <p>
          {' '}
          I love music, art, and design on all types of mediums. I'm always
          exploring, learning, and creating. I build fun, interactive, creative
          web applications and user experiences. Experimenting and programming
          using the latest technologies is important to me. I currently have
          expertise with the following languages, tools, technologies, and
          libraries: HTML5, CSS3, JavaScript, JQuery, Google Developer Tools,
          Google Analytics, SEO, php, Bootstrap, Styled-Components, React.js,
          firebase, Wordpress, Elementor, Local by Flywheel, MAMP, Affinity
          Photo, Affinity Designer, and Adobe Photoshop.
        </p>
        <p>
          {' '}
          I recenently completed a six month web development bootcamp at{' '}
          <DwcLink
            href='https://digitalworkshopcenter.com/'
            target='_blank'
            rel='noreferrer'>
            The Digital Workshop Center
          </DwcLink>{' '}
          in Fort Collins, Colorado. I learned and honed many useful skills from
          the brilliant and experienced professors. My capstone project for the
          class was to build an e-commerce store with react.js and deploy it
          using firebase. I was able to complete the project on time while
          making it responsive and appealing to the eye. The project also gave
          me the opportunity to create a responsive e-commerce website for a
          local musician. It's a win, win!
        </p>
        <p>
          In my previous work experience I was a professional audio engineer. I
          ran a successful business for 15 years. I had the opportunity to work
          with some of the top musicians and technicians in the world. We always
          pushed the limits to how a concert should be experienced. By creating
          the best possible environment for the musicians and using high quality
          gear from{' '}
          <MeyerLink
            href='https://meyersound.com/'
            target='_blank'
            rel='noreferrer'>
            Meyer Sound
          </MeyerLink>{' '}
          we were able to produce fully immersive spatial audio experiences.
        </p>
        <p>
          I will continue to be innovative and creative in my work. I love
          learning from the best and putting those skills to good use.
        </p>
        <p>
          Check out my{' '}
          <StyledLink to='/works'>
            <i className='bi bi-tools'></i> Works
          </StyledLink>{' '}
          for a preview of web dev projects.
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

const Title = styled.h1`
  padding-bottom: 17px;
  text-align: center;
  font-family: 'Sedgwick Ave Display', Verdana, Geneva, Tahoma, sans-serif;
  font-size: 7vw;
  font-weight: bold;
  background: linear-gradient(
    311deg,
    rgb(154, 0, 0) 20%,
    rgb(0, 96, 0) 20%,
    rgb(0, 96, 0) 40%,
    rgb(0, 0, 166) 40%,
    rgb(0, 0, 166) 60%,
    rgb(87, 0, 128) 60%,
    rgb(87, 0, 128) 80%,
    rgb(120, 64, 0) 80%,
    rgb(120, 64, 0) 100%
  );
  background-clip: text;
  background: -webkit-linear-gradient(
    311deg,
    rgb(154, 0, 0) 20%,
    rgb(0, 96, 0) 20%,
    rgb(0, 96, 0) 40%,
    rgb(0, 0, 166) 40%,
    rgb(0, 0, 166) 60%,
    rgb(87, 0, 128) 60%,
    rgb(87, 0, 128) 80%,
    rgb(120, 64, 0) 80%,
    rgb(120, 64, 0) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const StyledLink = styled(Link)`
  color: #6c757d;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.5s;
  &:hover {
    color: azure;
  }
`;
const DwcLink = styled.a`
  color: #6c757d;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: azure;
  }
`;
const MeyerLink = styled.a`
  color: #6c757d;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: azure;
  }
`;
