import React from 'react';
import Buttons from './WorksButtons';
import { Container, Image, Row, Col, Card } from 'react-bootstrap';
import logo from '../img/web-design-logo.png';
import tylert from '../img/tylert-music-app.jpg';
import boyz from '../img/noyz-boyz-app.png';
import lawlis from '../img/lawlisfamily-blog.png';
import wood from '../img/block-hand.jpg';
import mmc from '../img/mtn-men-contractors-logo.jpg';
import cosmo from '../img/cosmo-cosmos.jpg';
import poster from '../img/commandt-movie-poster.jpg';
import seer from '../img/baby-cosmo-seer.jpg';

export default function Works() {
  return (
    <>
      <Container>
        <Image fluid className='mt-3 py-3' src={logo} />
        <Row xs={1} md={2} className='g-4'>
          <Col>
            <a
              className='cards'
              href='https://tylertmusic.com/'
              target='_blank'
              rel='noreferrer'>
              <Card border='secondary'>
                <Card.Img variant='top' src={tylert} />
                <Card.Body>
                  <Card.Title>Tyler T.</Card.Title>
                  <Card.Text>
                    For this web application I used HTML5, CSS3, Javascript,
                    React, Bootstrap, Styled-Components, Affinity Photo, and
                    Google Fonts. I used Firebase to deploy and monitor the web
                    application. Check out the merch store and more. Let me know
                    what you think.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col>
            <a
              className='cards'
              href='http://noyzboyz.design/'
              target='_blank'
              rel='noreferrer'>
              <Card border='secondary'>
                <Card.Img variant='top' src={boyz} />
                <Card.Body>
                  <Card.Title>Noyz Boyz</Card.Title>
                  <Card.Text>
                    For this custom landing page I used HTML5, CSS3, Javascript,
                    React, Bootstrap, Styled-Components, Affinity Photo, and
                    Affinity Designer. I drew up the logo myself and added a
                    radial gradient. I liked how the logo turned out. I will
                    probably play around with different color schemes and font
                    weight to see what looks best. I used Firebase to deploy and
                    monitor the web application.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col>
            <a
              className='cards'
              href='http://lawlisfamily.com/'
              target='_blank'
              rel='noreferrer'>
              <Card border='secondary'>
                <Card.Img variant='top' src={lawlis} />
                <Card.Body>
                  <Card.Title>Family Blog</Card.Title>
                  <Card.Text>
                    This is a simple blog site that I created using Wordpress. I
                    have the site set up for donations to Cosmo's college fund.
                    I also have it set where users can subscribe to receive blog
                    posts in their email.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
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
          <Col>
            <Card border='secondary'>
              <Card.Img variant='top' src={seer} />
              <Card.Body>
                <Card.Title>Fortune Teller</Card.Title>
                <Card.Text>
                  This compostiton was my first creation using Affinity Photo.
                  Lots of fun layers. I used masking, blending, and opacity on
                  this piece. It gives me a laugh every time. I hope you enjoy
                  it as well.
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
        </Row>
      </Container>
      <Buttons />
    </>
  );
}
