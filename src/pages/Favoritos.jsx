import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorito } from '../store/ProductosSlice';
import '../Styles/Favoritos.css';

function Favoritos() {
  const dispatch = useDispatch();
  const { entities, favoritos } = useSelector((state) => state.productos);

  const productosFavoritos = entities.filter(producto =>
    favoritos.includes(producto.id)
  );

  const handleToggleFavorito = (id) => {
    dispatch(toggleFavorito(id));
  };

  if (productosFavoritos.length === 0) {
    return <h2 className="text-center mt-4">No tienes productos favoritos aún.</h2>;
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">Mis Favoritos</h2>
      <div className="row g-4">
        {productosFavoritos.map(producto => (
          <div className="col-12" key={producto.id}>
            <div className="card favorito-card d-flex flex-row align-items-center p-3">
              <img
                src={producto.image}
                alt={producto.title}
                className="favorito-img me-3"
              />
              
              {/* Contenedor de info + botones */}
              <div className="d-flex justify-content-between w-100 align-items-start">
                
                {/* Información del producto */}
                <div>
                  <h5 className="card-title mb-1">{producto.title}</h5>
                  <p className="card-text fw-bold text-success">${producto.price}</p>
                </div>
                
                {/* Botones alineados a la derecha */}
                <div className="d-flex gap-3 align-items-center">
                  <Link className="btn btn-sm btn-outline-primary" to={`/producto/${producto.id}`} title="Ver producto">
                    <i className="bi bi-eye-fill fs-4"></i>
                  </Link>
                  <i
                    className="bi bi-star-fill text-warning fs-4"
                    role="button"
                    onClick={() => handleToggleFavorito(producto.id)}
                    title="Quitar de favoritos"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoritos;
