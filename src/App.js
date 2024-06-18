import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './main';
import Services from './services';
import Contact from './contact';
import About from './about';
import Form from './form';

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/main" element={<Main />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<Navigate to="/about" />} />
    </Routes>
  );
}

export default App;
