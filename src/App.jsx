import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import ProductoDetalle from './pages/ProductoDetalle';
import Favoritos from './pages/Favoritos';
import ProductoForm from './pages/ProductoForm';
import Acerca from './pages/Acerca';
import ProductoList from './pages/ProductoList';
import Footer from './Components/Footer';
import Login from './pages/Login';
import FormLogin from './pages/FormLogin';
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
          <Route path="/Login" element={<Login />} />
          <Route path="/FormLogin" element={<FormLogin />} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
