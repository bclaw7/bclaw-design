import React, { useState } from 'react';
import { Axios, db } from '../firebase/firebaseConfig';
import { Container, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-bclaw-design.cloudfunctions.net/submit',
      formData
    )
      .then((res) => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className=' mt-5 py-4'>
      <h3 className='text-center text-secondary display-4'>
        {''}&#128075;{''} Hello !
      </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Control
            name='name'
            type='text'
            placeholder='Name'
            onChange={updateInput}
            value={formData.name || ''}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            name='email'
            type='email'
            placeholder='name@example.com'
            onChange={updateInput}
            value={formData.email || ''}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            name='message'
            as='textarea'
            placeholder='Message'
            rows={3}
            onChange={updateInput}
            value={formData.message || ''}
            required
          />
        </Form.Group>
        <div className='d-grid mb-3'>
          <Button variant='outline-secondary' className='fs-3' type='submit'>
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ContactForm;
