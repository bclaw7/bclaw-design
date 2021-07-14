import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Works from './Works';
import Contact from './Contactform';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/works' component={Works} />
        </Switch>
      </Router>
      <Contact />
    </Container>
  );
}

export default App;
