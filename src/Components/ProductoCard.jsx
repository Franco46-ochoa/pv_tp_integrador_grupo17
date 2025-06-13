import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../Styles/Cards.css';

function ProductoCard() {
  const { entities } = useSelector((state) => state.productos);
  const [favoritos, setFavoritos] = useState({});

  const toggleFavorito = (id) => {
    setFavoritos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <h1 className="mt-4 text-center">Productos</h1>
      <div className="container d-flex flex-wrap justify-content-center gap-4 mt-4">
        {entities.map((producto) => (
          <div
            className="card mb-4 shadow-sm rounded-3"
            style={{ width: '18rem' }}
            key={producto.id}
          >
            <img
              src={producto.image}
              className="card-img-top rounded-top"
              alt={producto.title}
              style={{ height: '160px', objectFit: 'contain', padding: '10px' }}
            />
            <div className="card-body"> {/* The gradient will be applied here */}
              <h6 className="card-title">{producto.title}</h6>
              <p className="card-text text-muted small">${producto.price}</p>
            </div>
            <div className="card-footer border-0 d-flex justify-content-between align-items-center"> {/* Removed bg-white */}
              <Link
                className="btn btn-sm btn-primary rounded-pill px-3"
                to={`/producto/${producto.id}`}
              >
                Ver producto
              </Link>

              <i
                className={`bi ${favoritos[producto.id] ? 'bi-star-fill text-warning' : 'bi-star'} fs-5`}
                role="button"
                onClick={() => toggleFavorito(producto.id)}
                title="Marcar como favorito"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductoCard;