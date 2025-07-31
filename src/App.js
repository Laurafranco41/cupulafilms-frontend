import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes
import Navbar from './components/Navbar';
import './App.css';

// Páginas
import Home from './pages/Home';             
import Actores from './pages/Actores';       
import Registro from './pages/Registro';     
import Login from './pages/Login';           
import CrearActor from './pages/CrearActor'; 
import EliminarActor from './pages/EliminarActor'; 

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actores" element={<Actores />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crear-actor" element={<CrearActor />} />
          <Route path="/eliminar-actor" element={<EliminarActor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
