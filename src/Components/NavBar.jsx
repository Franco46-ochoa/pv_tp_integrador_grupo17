import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';
import { useNavigate } from 'react-router-dom';
import { logout, isLogin, user } from '../middleware/auth';
const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/Login');
  };
  return (
    <nav className="NavBar px-4 py-2">
      {isLogin() ? (
        <div className="Usuario">
          <span>Bienvenido, {user()}</span>
          <div className="Botones">
            <Link to="/Home">Inicio</Link>
            <Link to="/Favoritos">Favoritos</Link>
            <Link to="/Productos">Gestion</Link>
            <Link to="/CrearProducto">Crear producto</Link>
            <Link to="/Login" onClick={handleLogout}>Cerrar sesión</Link>
          </div>
        </div>
      ) : (
        <div className="Botones">
          <Link to="/Login">Iniciar sesión</Link>
          <Link to="/FormLogin">Registro</Link>
        </div>
      )}

    </nav>
  );
};

export default NavBar;
