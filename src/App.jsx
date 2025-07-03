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
import PrivateRoute from './hooks/PrivateRoute';
import PublicRoute from './hooks/PublicRoute';
function App() {
  return (
    <div id="top" className="d-flex flex-column min-vh-100">
      <Header />
      <NavBar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<PrivateRoute component={Home}></PrivateRoute>} />
          <Route path="/Home" element={<PrivateRoute component={Home}></PrivateRoute>} />
          <Route path="/Producto/:id" element={<PrivateRoute component={ProductoDetalle}></PrivateRoute>} />
          <Route path="/Favoritos" element={<PrivateRoute component={Favoritos}></PrivateRoute>} />
          <Route path="/CrearProducto" element={<PrivateRoute component={ProductoForm} edit={false}></PrivateRoute>} />
          <Route path="/EditarProducto/:id" element={<PrivateRoute component={ProductoForm} edit={true} ></PrivateRoute>} />
          <Route path="/Acerca" element={<Acerca/>} />
          <Route path="/Productos" element={<PrivateRoute component={ProductoList}></PrivateRoute>} />
          <Route path="/Login" element={<PublicRoute component={Login}></PublicRoute>} />
          <Route path="/FormLogin" element={<FormLogin />} />
          <Route path="*" element={<PrivateRoute component={<h1>404 - Página no encontrada</h1>} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
