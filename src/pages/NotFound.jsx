import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NotFound.css'; 
const NotFound = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Oops... Página no encontrada</p>
      <p>La ruta que estás buscando no existe o fue movida.</p>
      <Link to="/Home" className="btn btn-primary mt-3">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
