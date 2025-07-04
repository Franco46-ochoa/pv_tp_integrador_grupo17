import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorito } from '../store/ProductosSlice';
import '../Styles/Cards.css';
const ProductoCard = ({ tema }) => {
  const { entities, favoritos } = useSelector((state) => state.productos);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const dispatch = useDispatch();

  const handleToggleFavorito = (id) => {
    dispatch(toggleFavorito(id));
  }

  const productosFiltrados = categoriaSeleccionada
    ? entities.filter((producto) => producto.category === categoriaSeleccionada)
    : entities;


  return (
    <>
      
      <h1 className="mt-4 text-center">Productos</h1>
      <div className="text-center my-3">
        <button className="badge  text-bg-dark m-1" onClick={() => setCategoriaSeleccionada('')}>Todas</button>
        <button className="badge text-bg-dark m-1" onClick={() => setCategoriaSeleccionada("men's clothing")}>Hombre</button>
        <button className="badge text-bg-dark m-1" onClick={() => setCategoriaSeleccionada("women's clothing")}>Mujer</button>
        <button className="badge text-bg-dark m-1" onClick={() => setCategoriaSeleccionada("jewelery")}>Joyería</button>
        <button className="badge text-bg-dark m-1" onClick={() => setCategoriaSeleccionada("electronics")}>Electrónica</button>
      </div>
      
      <div className={`container ${tema} d-flex flex-wrap justify-content-center gap-4 mt-4` }>
        
        {productosFiltrados.map((producto) => (
          console.log("Filtro seleccionado:", categoriaSeleccionada),
          console.log("Productos filtrados:", productosFiltrados),

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