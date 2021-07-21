import React from 'react';
import Buttons from './WorksButtons';
import { Container, Image, Row, Col, Card } from 'react-bootstrap';
import logo from '../img/web-design-logo.png';
import tylert from '../img/tylert-music-app.jpg';
import wood from '../img/block-hand.jpg';
import mmc from '../img/mtn-men-contractors-logo.jpg';
import cosmo from '../img/cosmo-cosmos.jpg';
import poster from '../img/commandt-movie-poster.jpg';

export default function Works() {
  return (
    <>
      <Container>
        <Image fluid className='mt-3 py-3' src={logo} />
        <Row xs={1} md={2} className='g-4'>
          <Col>
            <Card border='secondary'>
              <Card.Img variant='top' src={tylert} />
              <Card.Body>
                <Card.Title>Tyler T.</Card.Title>
                <Card.Text>
                  For this web application I used HTML5, CSS3, Javascript,
                  React, Bootstrap, Styled-Components, and google fonts. I
                  really had fun building this site. Check out the merch store
                  and more at the link below.
                </Card.Text>
                <Card.Link
                  href='https://tyler-t-31b26.web.app/'
                  target='_blank'>
                  Tyler T.
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border='secondary'>
              <Card.Img variant='top' src={wood} />
              <Card.Body>
                <Card.Title>Toy Wood Block</Card.Title>
                <Card.Text>
                  Check out those gradient overlays! I used Adobe Photoshop to
                  create this layered composition. Masking, blend modes, color
                  overlays, and other fine-tuning tools were used for this
                  creation. The wood block is actually yellow. I used a hue
                  gradient overlay to create the vibrant colors without taking
                  away from the texture of the wood.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border='secondary'>
              <Card.Img variant='top' src={mmc} />
              <Card.Body>
                <Card.Title>Mountain Men Contractors</Card.Title>
                <Card.Text>
                  I used affinity designer to create this beautiful logo. Color,
                  Transparency, and typography can easily be changed to fit any
                  scheme or design. The owner of Mountain Men Contractors was
                  satisfied with this logo. Designing logos is chanllenging but
                  fun. I really like how this one turned out.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border='secondary'>
              <Card.Img variant='top' src={cosmo} />
              <Card.Body>
                <Card.Title>Outa' Frame</Card.Title>
                <Card.Text>
                  My son Cosmo is in many of my compositions. He loves to play
                  along and join the fun. I used affinity photo to create this
                  composition. Masking, ,blending, lighting effects, and filters
                  were used in this creation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border='secondary'>
              <Card.Img variant='top' src={poster} />
              <Card.Body>
                <Card.Title>Command T</Card.Title>
                <Card.Text>
                  What a fun movie poster project this one was! Command T is a
                  photoshop keyboard shortcut for Free Transform. There are over
                  50 layers in this composition. Masking was used maticulously.
                  I also used a lot of lighting effects and shadows to create a
                  natural look and feel.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Buttons />
      </Container>
    </>
  );
}
