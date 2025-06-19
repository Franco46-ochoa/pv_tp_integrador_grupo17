import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorito } from '../ProductosSlice';
import '../Styles/Cards.css';

function ProductoCard() {
  const { entities, favoritos } = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  const handleToggleFavorito = (id) => {
    dispatch(toggleFavorito(id));
  }



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
            <div className="card-footer border-0 d-flex justify-content-between align-items-center">
              <Link className="btn btn-sm btn-custom-eye rounded-pill px-3" to={`/producto/${producto.id}`}>
                <i className="bi bi-eye-fill fs-4"></i>
              </Link>
              <i
                className={`bi ${favoritos.includes(producto.id) ? 'bi-star-fill text-warning' : 'bi-star'} fs-5`}
                role="button"
                onClick={() => handleToggleFavorito(producto.id)}
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