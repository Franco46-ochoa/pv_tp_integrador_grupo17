import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorito } from '../store/ProductosSlice';
import { useState } from 'react';
import '../Styles/DetalleProducto.css';

function ProductoDetalle() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const producto = useSelector(state =>
    state.productos.entities.find(p => p.id === parseInt(id))
  );

  const favoritos = useSelector(state => state.productos.favoritos);
  const esFavorito = producto ? favoritos.includes(producto.id) : false;

  const [pop, setPop] = useState(false);

  const handleToggleFavorito = () => {
    setPop(true);
    dispatch(toggleFavorito(producto.id));
    setTimeout(() => setPop(false), 300);
  };

  if (!producto) {
    return (
      <div className="container mt-4 mensaje-producto-no-encontrado">
        <h2>Producto no encontrado</h2>
        <Link to="/Home" className="btn btn-secondary mt-3">Volver a Home</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4 contenedor-detalle-producto">
      <h2>Detalle del Producto</h2>
      <div className="card mb-3 tarjeta-detalle-producto">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img
              src={producto.image}
              className="img-fluid rounded-start"
              alt={producto.title}
              style={{ maxHeight: '200px', objectFit: 'contain', width: 'auto' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{producto.title}</h5>
              <p className="card-text precio">
                <strong>Precio:</strong> ${producto.price}
              </p>
              <p className="card-text categoria">
                <strong>Categoría:</strong> {producto.category}
              </p>
              <p className="card-text descripcion">
                <strong>Descripción:</strong> {producto.description}
              </p>

              <div className="d-flex justify-content-start mt-3 align-items-center">
                <Link to={`/EditarProducto/${producto.id}`} className="btn btn-warning me-2">
                  <i className="bi bi-pencil-fill"></i>
                </Link>

                <Link to="/Home" className="btn btn-secondary">
                  <i className="bi bi-arrow-left"></i>
                </Link>

                <div className="ms-3">
                  <i
                    className={`bi ${esFavorito ? 'bi-star-fill estrella-activa' : 'bi-star'} estrella-favorito fs-3 ${pop ? 'estrella-pop' : ''}`}
                    onClick={handleToggleFavorito}
                    title="Marcar como favorito"
                    role="button"
                  ></i>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
