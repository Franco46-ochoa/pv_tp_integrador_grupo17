import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar px-4 py-2">
      <div className="Botones">
        <Link to="/Home">Inicio</Link>
        <Link to="/Favoritos">Favoritos</Link>
        <Link to="/Productos">Productos</Link>
        <Link to="/CrearProducto">Crear producto</Link>
        <Link to="/Acerca">Acerca</Link>
      </div>
    </nav>
  );
};

export default NavBar;
