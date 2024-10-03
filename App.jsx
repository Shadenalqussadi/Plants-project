import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Bages/Home';
import Plants from './Bages/Plants';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
      
        </Routes>


      

      </div>
    </Router>
  );
}

export default App;
