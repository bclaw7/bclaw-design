import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
// import styled from 'styled-components';
import byron from '../img/Byron-n-Germany.jpg';
import Buttons from './WorksButtons';

export default function About() {
  return (
    <>
      <Container className='text-center'>
        <h1 className='display-1 py-3'>Byron Cole Lawlis</h1>
        <Image src={byron} roundedCircle />
      </Container>
      <Container className='pt-2 text-light'>
        <p className='lead'>
          I am a Dad, Husband, and friend. I love being around everyone that
          wants to grow together. I like to spend time outside when I'm not
          working on projects. You can most likely find my family and I on the
          trails of Colorado with our dog Tabbe. We also love paddleboarding on
          the high elevation lakes in the summer time. During the winter months
          we enjoy snowboarding and snowshoeing.
        </p>
        <p>
          I love music, art, and design on all types of mediums. I'm always
          learing and creating. I build fun, interactive, creative web
          applications. I use HTML5, CSS3, JavaScript, Bootstrap,
          Styled-Components, React.js, firebase, Affinity Photo and Designer.
        </p>
        <p>
          Check out my{' '}
          <Link to='/works' className='link-success'>
            works
          </Link>{' '}
          for the full experience.
        </p>
        <p>Thanks for visiting.</p>
        <p>
          <strong>Much Love.</strong>
        </p>
        <p>
          <em>-Byron</em>
        </p>
      </Container>
      <Buttons />
    </>
  );
}

// const Title = styled.h1`
//   @font-face {
//     font-family: 'Sedgwick Ave Disply';
//     src: url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap');
//     font-weight: bolder;
//     background: linear-gradient(
//       311deg,
//       rgb(154, 0, 0) 20%,
//       rgb(0, 96, 0) 20%,
//       rgb(0, 96, 0) 40%,
//       rgb(0, 0, 166) 40%,
//       rgb(0, 0, 166) 60%,
//       rgb(87, 0, 128) 60%,
//       rgb(87, 0, 128) 80%,
//       rgb(120, 64, 0) 80%,
//       rgb(120, 64, 0) 100%
//     );
//     background-clip: text;
//     background: -webkit-linear-gradient(
//       311deg,
//       rgb(154, 0, 0) 20%,
//       rgb(0, 96, 0) 20%,
//       rgb(0, 96, 0) 40%,
//       rgb(0, 0, 166) 40%,
//       rgb(0, 0, 166) 60%,
//       rgb(87, 0, 128) 60%,
//       rgb(87, 0, 128) 80%,
//       rgb(120, 64, 0) 80%,
//       rgb(120, 64, 0) 100%
//     );
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
// `;
