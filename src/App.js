import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Details from './components/Details';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Container className="App" style={{textAlign: 'center'}}>
    <Header />
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/articles/:id' component={Details} />
    </Router>      
  </Container>
  );
}

export default App;
