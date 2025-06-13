import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import ProductoForm from './Components/ProductoForm';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/CrearProducto" element={<ProductoForm />} />
        <Route path="/EditarProducto/:id" element={<ProductoForm edit />} />
      </Routes>
    </div>
  );
}

export default App;

