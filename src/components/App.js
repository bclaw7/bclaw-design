import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Works from './Works';
import About from './About';
import Footer from './Footer';
import Default from './Default';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/works' component={Works} />
          <Route path='/about' component={About} />
          <Route component={Default} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
