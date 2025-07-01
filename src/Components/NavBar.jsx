import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

const NavBar = ({ tema }) => {
  return (
    <nav className={`NavBar ${tema} px-4 py-2`}>
      <div className="Botones">
        <Link to="/Home">Inicio</Link>
        <Link to="/Favoritos">Favoritos</Link>
        <Link to="/Productos">Productos</Link>
        <Link to="/CrearProducto">Crear producto</Link>
      </div>
    </nav>
  );
};

export default NavBar;
