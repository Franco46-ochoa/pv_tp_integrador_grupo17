import React, { useEffect } from 'react';
import '../styles/Acerca.css';

const creadores = [
  {
    nombre: 'Franco Luciano Emmanuel Ochoa',
    descripcion: 'Estudiante de la carrera Analista Programador Universitario.',
    lu: 'APU006358',
    imagen: '/Fotos/Franco.png',
  },
  {
    nombre: 'Taritolay Gonzalo Ricardo',
    descripcion: 'Estudiante de la carrera Analista Programador Universitario.',
    lu: 'APU004293',
    imagen: '/Fotos/gonzalo.png',
  },
  {
    nombre: 'Compañero 2',
    descripcion: 'Estudiante de la carrera Analista Programador Universitario.',
    lu: 'APU002222',
    imagen: '/Fotos/compañero2.jpg',
  },
  {
    nombre: 'Ortiz Marcelo Fernando',
    descripcion: 'Estudiante de la carrera Analista Programador Universitario.',
    lu: 'APU004872',
    imagen: '/Fotos/marcelo.png',
  },
];

// División 2 - 2 - 1
const grupos = [
  creadores.slice(0, 2),
  creadores.slice(2, 4),
  creadores.slice(4),
];

const Acerca = () => {
  useEffect(() => {
    const el = document.querySelector('#carouselCreadores');
    if (el && window.bootstrap) {
      new window.bootstrap.Carousel(el, {
        interval: 4000,
        ride: 'carousel',
      });
    }
  }, []);

  return (
    <div className="acerca-container">
      <h2 className="acerca-titulo">Acerca de los Creadores</h2>

      <div
        id="carouselCreadores"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">
          {grupos.map((grupo, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className={`d-flex ${grupo.length === 1 ? 'justify-content-center' : 'justify-content-center'} gap-2 flex-wrap`}>
                {grupo.map((persona, subIndex) => (
                  <div className="acerca-card" key={subIndex}>
                    <img src={persona.imagen} alt={persona.nombre} className="acerca-img" />
                    <div className="acerca-nombre">{persona.nombre}</div>
                    <div className="acerca-desc">{persona.descripcion}</div>
                    <div className="acerca-lu">LU: {persona.lu}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCreadores"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselCreadores"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default Acerca;
