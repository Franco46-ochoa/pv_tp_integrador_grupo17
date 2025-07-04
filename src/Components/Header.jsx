import React from 'react';
import '../Styles/Header.css';
import CambiarTema from './CambiarTema';

const Header = ({ tema, cambiarTema }) => {
  return (
    <div className="container-fluid header-container d-flex align-items-center justify-content-start px-4 py-3">
      <img src="/Logo de LIVETECh.png" alt="Logo de LIVETECH" className="header-logo me-4" />
      <div className="header-separator"></div>
      <div className="header-text ms-4">
        TECNOLOGÍA, ESTILO Y ELEGANCIA PARA VOS.
      </div>
      <CambiarTema tema={tema} cambiarTema={cambiarTema} />
    </div>
  );
}

export default Header;
