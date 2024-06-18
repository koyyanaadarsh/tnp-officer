import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './main';
import Services from './services';
import Contact from './contact';
import About from './about';

import Form from './form';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about" component={About} />
      
 
        <Redirect from="/" to="/about" />
      </Switch>
    </Router>
  );
}

export default App;
