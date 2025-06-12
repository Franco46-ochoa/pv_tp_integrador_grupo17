import React from 'react'
import { Link } from 'react-router-dom';
import  '../Styles/NavBar.css'


const NavBar = () => {
  return (
    <nav className='NavBar'>       
        <div className='Botones'>
            <Link to="/">Inicio</Link>
            <Link to="/Home">Home</Link>
            <Link to="/Favoritoss">Favoritos</Link>
            <Link to="/CrearProducto">Crear Producto</Link>
            <Link to="/Acerca">Acerca</Link>

        </div>
    </nav>
  )
}

export default NavBar