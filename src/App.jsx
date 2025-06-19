import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import ProductoDetalle from './Components/ProductoDetalle';
import Favoritos from './Components/Favoritos';
import ProductoForm from './Components/ProductoForm';
import Acerca from './Components/Acerca';
import ProductoList from './Components/ProductoList';
import Footer from './Components/Footer';

function App() {
  return (
    <div id="top" className="d-flex flex-column min-vh-100">
      <Header />
      <NavBar />
      <main className="flex-grow-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Producto/:id" element={<ProductoDetalle />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="/CrearProducto" element={<ProductoForm />} />
          <Route path="/EditarProducto/:id" element={<ProductoForm edit />} />
          <Route path="/Acerca" element={<Acerca />} />
          <Route path="/Productos" element={<ProductoList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
