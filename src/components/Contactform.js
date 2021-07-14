import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container className='py-5'>
      <h3 className='text-center text-secondary'>
        Message Me {''}&#128075;{''}
      </h3>
      <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Control type='text' placeholder='Name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Control as='textarea' placeholder='Message' rows={3} />
        </Form.Group>
        <div className='d-grid'>
          <Button variant='outline-secondary' type='submit'>
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  );
}
