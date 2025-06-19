import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css'; // Importa el CSS específico para el footer

// Footer diseñado con bootstrap
function Footer() {
  return (
    <footer className="footer-custom pt-4 pb-4 mt-0">
      <div className="container">
        <div className="row align-items-center">

          {/* Marca o título */}
          <div className="col-md-4 mb-3 mb-md-0 text-center text-md-start">
            <img src="/Logo de LIVETECH.png" alt="Logo de LIVETECH" className="footer-logo me-4" />
          </div>

          {/* Botón subir */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <a href="#top" className="text-decoration-none footer-up-button">
              <FontAwesomeIcon icon={faArrowUp} size="2x" />
              <div style={{ fontSize: '0.8rem' }}>Arriba!</div>
            </a>
          </div>

          {/* Redes sociales y Copyright */}
          <div className="col-md-4 text-center text-md-end footer-social-section">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon mx-2">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon mx-2">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon mx-2">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://github.com/Franco46-ochoa/pv_tp_integrador_grupo17" target="_blank" rel="noopener noreferrer" className="footer-social-icon mx-2">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <div className="footer-copyright mt-2">
              <small>&copy; Grupo 17 PV {new Date().getFullYear()} - Todos los derechos reservados.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;