import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorito } from '../ProductosSlice';
import '../Styles/DetalleProducto.css';

function ProductoDetalle() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const producto = useSelector(state =>
    state.productos.entities.find(p => p.id === parseInt(id))
  );
  const favoritos = useSelector(state => state.productos.favoritos);
  const esFavorito = producto ? favoritos.includes(producto.id) : false;

  const handleToggleFavorito = () => {
    dispatch(toggleFavorito(producto.id));
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
              <p className="card-text precio"><strong>Precio:</strong> ${producto.price}</p> {/* Clase actualizada */}
              <p className="card-text categoria"><strong>Categoría:</strong> {producto.category}</p> {/* Clase actualizada */}
              <p className="card-text descripcion"><strong>Descripción:</strong> {producto.description}</p> {/* Clase actualizada */}

              <div className="d-flex justify-content-start mt-3">
                <Link to={`/EditarProducto/${producto.id}`} className="btn btn-warning me-2">
                  Editar Producto
                </Link>

                <Link to="/Home" className="btn btn-secondary">
                  Volver
                </Link>
                <div className="d-flex justify-content-start mx-3">
                  <i
                    className={`bi ${esFavorito ? 'bi-star-fill text-warning' : 'bi-star'} fs-3`}
                    role="button"
                    onClick={handleToggleFavorito}
                    title="Marcar como favorito"
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