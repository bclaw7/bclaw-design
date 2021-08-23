import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

export class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <Wrapper className='container'>
        <Row className='pt-5 text-center'>
          <h1 className='display-1'>404</h1>
          <h2 className='text-danger'>
            <i class='bi bi-hand-thumbs-down'></i> error{' '}
            <i class='bi bi-hand-thumbs-down'></i>
          </h2>
          <h2 className='text-warning'>page not found</h2>
          <h3 className='text-info'>
            The requested URL<i class='bi bi-arrow-right'></i>
            <span>{this.props.location.pathname}</span> was not found.
          </h3>
        </Row>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  h1 {
    color: gainsboro;
  }
  h2,
  h3 {
    font-family: 'Sedgwick Ave Display', Verdana, Geneva, Tahoma, sans-serif;
  }
  span {
    text-decoration: underline;
  }
`;

export default Default;
