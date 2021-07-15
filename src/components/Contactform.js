import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function ContactForm() {
  return (
    <Container className='py-4'>
      <h3 className='text-center text-secondary'>
        {''}&#128075;{''} Message Me!
      </h3>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Control id='name' type='text' placeholder='Name' required />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            id='email'
            type='email'
            placeholder='name@example.com'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            id='message'
            as='textarea'
            placeholder='Message'
            rows={3}
            required
          />
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
