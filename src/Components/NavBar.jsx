import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/NavBar.css';
import { logout, isLogin, user } from '../middleware/auth';


const NavBar = ({ tema }) => {
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/Login');
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className={`NavBar ${tema} px-4 py-2`}>
      <div className="d-flex justify-content-between w-100 align-items-center">
        {isLogin() && <span >Bienvenido, {user()}</span>}
        <button className="Hamburguesa" onClick={toggleMenu}>
          &#9776; {/* Este es el ícono ☰ */}
        </button>
      </div>

      <div className={`Botones ${menuAbierto ? 'Mostrar' : ''}`}>
        {isLogin() ? (
          <>
            <Link to="/Home" onClick={() => setMenuAbierto(false)}>Inicio</Link>
            <Link to="/Favoritos" onClick={() => setMenuAbierto(false)}>Favoritos</Link>
            <Link to="/Productos" onClick={() => setMenuAbierto(false)}>Gestion</Link>
            <Link to="/Login" onClick={() => { handleLogout(); setMenuAbierto(false); }}>Cerrar sesión</Link>
          </>
        ) : (
          <>
            <Link to="/Login" onClick={() => setMenuAbierto(false)}>Iniciar sesión</Link>
            <Link to="/FormLogin" onClick={() => setMenuAbierto(false)}>Registro</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
