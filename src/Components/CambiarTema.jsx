import React from 'react';
import '../App.css';

const CambiarTema = ({ tema, cambiarTema }) => {
    return (
        <div className="ms-auto">
            <button onClick={cambiarTema} className={`btn btn-outline-secondary`}>
                <i className={`bi ${tema === 'oscuro' ? 'bi-moon' : 'bi-sun'}`}></i>
            </button>
        </div>
    );
};

export default CambiarTema;