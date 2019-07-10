// Libs
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Home from './home'
import Search from './search'

export default () => (
  <Router>
    <Route exact path='/' component={ Home } />
    <Route exact path='/:username' component={ Search } />
  </Router>
)