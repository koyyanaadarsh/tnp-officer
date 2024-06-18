import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './main';
import Services from './services';
import Contact from './contact';
import About from './about';
import Appointment from './appointment';
import Login from './Login';

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
      
        <Route exact path="/login" component={Login} />
 
        <Redirect from="/" to="/about" />
      </Switch>
    </Router>
  );
}

export default App;
