import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';         // Este es tu inicio tipo portada
import Actores from './pages/Actores';   // Agrega esta línea

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actores" element={<Actores />} />  {/* Ruta para el catálogo */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
