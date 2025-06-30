import React, { useState, useEffect } from 'react';
import '../App.css';


const CambiarTema = () => {
    const [tema, setTema] = useState('claro'); // Estado del tema

    const cambiarTema = () => {
        setTema(tema === 'claro' ? 'oscuro' : 'claro');
    };

    useEffect(() => {
        document.body.className = tema; // Cambia la clase del body según el tema
    }, [tema]);

    return (
        <button onClick={cambiarTema} className="btn btn-outline-secondary ms-auto {`container-fluid header-container ${tema} d-flex align-items-center justify-content-between px-4 py-3`}">
            <i className={`bi ${tema === 'oscuro' ? 'bi-moon' : 'bi-sun'}`}></i>
        </button>
    );
};

export default CambiarTema;