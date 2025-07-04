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
import '../Styles/Footer.css';

const Footer = ({ tema }) => {
  return (
    <footer> 
      <div  className={`container footer ${tema} pt-4 pb-4 mt-0`}> 
        <div className="row align-items-center">

          {/* Logo */}
          <div className="col-md-4 mb-3 mb-md-0 text-center text-md-start">
            <img src="/Logo de LIVETECH.png" alt="Logo de LIVETECH" className="footer-logo me-4" />
          </div>

          {/* Botón "Arriba!" */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <a href="#top" className="text-decoration-none footer-up-button">
              <FontAwesomeIcon icon={faArrowUp} size="2x" />
              <div style={{ fontSize: '0.8rem' }}>Arriba!</div>
            </a>
          </div>

          {/* Sección derecha: botón Acerca, redes y copyright */}
          <div className="col-md-4 text-center text-md-end footer-social-section position-relative">

            {/* Botón Acerca */}
            <div className="footer-acerca-container mb-2">
              <Link to="/Acerca" className="footer-acerca-link">
                Acerca
              </Link>
            </div>

            {/* Redes sociales alineadas horizontalmente */}
            <div className="d-flex justify-content-center justify-content-md-end mb-2">
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
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
              <small>&copy; Grupo 17 PV {new Date().getFullYear()} - Todos los derechos reservados.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;