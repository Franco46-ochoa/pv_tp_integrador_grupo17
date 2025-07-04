import { useState, useEffect } from 'react';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [tema, setTema] = useState('claro');

  const cambiarTema = () => {
    setTema(tema === 'claro' ? 'oscuro' : 'claro');
  };

  useEffect(() => {
    document.body.className = tema; // Cambia la clase del body
  }, [tema]);
  
  return (
    <div id="top" className="d-flex flex-column min-vh-100">
      <Header tema={tema} cambiarTema={cambiarTema}/>
      <NavBar tema={tema} />
      <ToastContainer /> 
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<PublicRoute component={Login}></PublicRoute>} />
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

      <Footer tema={tema}/>
    </div>
  );
}

export default App;
