import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from './about';


function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      
      <Route path="*" element={<Navigate to="/about" />} />
    </Routes>
  );
}

export default App;
