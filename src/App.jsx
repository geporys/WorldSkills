import React from 'react';
import Header from './Header';
import Tabs from './Tabs';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
};

export default App;
