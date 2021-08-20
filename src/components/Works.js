import React from 'react';
import Buttons from './WorksButtons';
import { Container, Image, Row, Col, Card, Button } from 'react-bootstrap';
import logo from '../img/web-design-logo.png';
import tylert from '../img/tylert-music-app.jpg';
import university from '../img/fictional-university-screenshot.png';
import boyz from '../img/noyz-boyz-app.png';
import lawlis from '../img/lawlisfamily-blog.png';
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
                  React, Bootstrap, Styled-Components, Affinity Photo, and
                  Google Fonts. I used Firebase to deploy and monitor the web
                  application. Check out the merch store and more. Don't forget
                  to support your local musicians.
                </Card.Text>
                <Button
                  href='https://tylertmusic.com/'
                  target='_blank'
                  variant='secondary'
                  className='stretched-link'>
                  <i class='bi bi-link'></i> Visit Site{' '}
                  <i class='bi bi-link'></i>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border='secondary'>
              <Card.Img variant='top' src={university} />
              <Card.Body>
                <Card.Title>Fictional University</Card.Title>
                <Card.Text>
                  For this complex multi-page website I used Wordpress, Local by
                  Flywheel, HTML5, CSS3, php, JavaScript, React, and Rest API. I
                  built a custom theme for this site. Users can create an
                  account, take notes, update events, post blogs, and use a maps
                  API to find campuses. This website is currently under
                  construction. Come back for soon for updates and a link to
                  visit the working site.
                </Card.Text>
                <Button
                  href='#'
                  target='_blank'
                  variant='secondary'
                  className='stretched-link'
                  disabled>
                  <i class='bi bi-link'></i> Come Back Soon!{' '}
                  <i class='bi bi-link'></i>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border='secondary'>
              <Card.Img variant='top' src={boyz} />
              <Card.Body>
                <Card.Title>Noyz Boyz</Card.Title>
                <Card.Text>
                  For this custom landing page I used HTML5, CSS3, Javascript,
                  Wordpress, Elementor, and Affinity Photo. I created the logo
                  with Affinity Designer.
                </Card.Text>
                <Button
                  href='http://noyzboyz.design/'
                  target='_blank'
                  variant='secondary'
                  className='stretched-link'>
                  <i class='bi bi-link'></i> Visit Site{' '}
                  <i class='bi bi-link'></i>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border='secondary'>
              <Card.Img variant='top' src={lawlis} />
              <Card.Body>
                <Card.Title>Family Blog</Card.Title>
                <Card.Text>
                  This is a simple blog site that I created using Wordpress. I
                  have the site set up for donations to my son's college fund.
                  Donate now! I also have it set where users can subscribe to
                  receive blog posts in their email. Follow me. The family
                  adventures continue.
                </Card.Text>
                <Button
                  href='http://lawlisfamily.com/'
                  target='_blank'
                  variant='secondary'
                  className='stretched-link'>
                  <i class='bi bi-link'></i> Visit Site{' '}
                  <i class='bi bi-link'></i>
                </Button>
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
                  I used Affinity Designer to create this logo. Color,
                  Transparency, and typography can easily be changed to fit any
                  scheme or design. The client was pleased with this logo
                  design. I will be designing a web application for Mountain Men
                  Contractors in the near future.
                </Card.Text>
                <Button
                  href='#'
                  target='_blank'
                  variant='secondary'
                  className='stretched-link'
                  disabled>
                  <i class='bi bi-link'></i> Come Back Soon!{' '}
                  <i class='bi bi-link'></i>
                </Button>
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
              <Card.Img variant='top' src={cosmo} />
              <Card.Body>
                <Card.Title>Outa' Frame</Card.Title>
                <Card.Text>
                  My son Cosmo is in many of my compositions. He loves to play
                  along and join the fun. I used Affinity Photo to create this
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
