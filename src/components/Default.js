import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

export class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <Row className='pt-5 text-center'>
          <h1 className='display-2'>404</h1>
          <h2 className='text-danger'>
            <i class='bi bi-hand-thumbs-down'></i> error{' '}
            <i class='bi bi-hand-thumbs-down'></i>
          </h2>
          <h2 className='text-warning'>page not found</h2>
          <h3 className='text-info'>
            The requested URL<span>{this.props.location.pathname}</span> was not
            found.
          </h3>
        </Row>
      </Container>
    );
  }
}

export default Default;
