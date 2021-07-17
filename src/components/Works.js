import React from 'react';
import WorksButtons from './WorksButtons';
import { Container, Image, Row, Col, Card } from 'react-bootstrap';
import logo from '../img/web-design-logo.png';
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
              <Card.Img variant='top' src={wood} />
              <Card.Body>
                <Card.Title>Toy Wood Block</Card.Title>
                <Card.Text>
                  Check out those gradient overlays! I used Adobe Photoshop to
                  create this layered composition. Masking, blend modes, color
                  overlays, and other fine-tuning tools were used on this piece.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border='secondary'>
              <Card.Img variant='top' src={mmc} />
              <Card.Body>
                <Card.Title>Mtn Men Contractors</Card.Title>
                <Card.Text>
                  I used affinity designer to create this beautiful logo. All of
                  the the colors can easily change along with transparency. The
                  client was very satisfied with this logo.
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
                  My son Cosmo is in many of my works. He loves to play along
                  and join the fun. I use affinity photo to create this
                  composition. Masking, lighting effects, and filters were used
                  to create this piece.
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
                  What a fun project this one was! There are several layers in
                  this composition. Masking was used maticulously. I also used a
                  lot of lighting effects and shadows to create a natural look
                  and feel.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <WorksButtons />
      </Container>
    </>
  );
}
