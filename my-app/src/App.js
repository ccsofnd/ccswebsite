import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Links from './Links';
import Events from './Events';
import Admin from './Admin';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/links" element={<Links />} />
          <Route path="/events" element={<Events />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Links />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;