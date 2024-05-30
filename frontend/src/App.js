import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PersonalBests from './PersonalBests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal-bests" element={<PersonalBests />} />
      </Routes>
    </Router>
  );
}

export default App;
