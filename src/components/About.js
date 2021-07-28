import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
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
          learing and creating. I like to build fun, interactive, creative web
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
