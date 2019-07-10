import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';

import './assets/css/bootstrap.css';
import './assets/vendors/linericon/style.css';
import './assets/css/font-awesome.min.css';
import './assets/css/magnific-popup.css';
import './assets/vendors/nice-select/css/nice-select.css';
import './assets/css/style.css';

import './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Navbar />
        </div>
      </Router>
    )
  }
}

export default App;
