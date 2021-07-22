import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Works from './Works';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/works' component={Works} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
