import React, { useState } from 'react';
import { Button, Collapse, Image } from 'react-bootstrap';
import byron from '../img/byron-n-germany.jpg';

export default function About() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='d-grid mb-3'>
        <Button
          variant='outline-secondary'
          onClick={() => setOpen(!open)}
          aria-controls='example-collapse-text'
          aria-expanded={open}>
          About Byron
        </Button>
      </div>
      <Collapse in={open}>
        <Image src={byron} roundedCircle />
        <p>
          I am a Dad and outdoor enthusiast. I love spending time with family
          and friends. You can most likely find us on the trails with our dog
          Tabbe. I enjoy desiging and creating on all types of mediums. I use
          HTML5, CSS3, JavaScript, Bootstrap, Styled-Components, and React.js to
          create fun, creative, engaging web applications. Check out my works;
          send me a message. Thanks for visiting. Much Love.
        </p>
      </Collapse>
    </>
  );
}
