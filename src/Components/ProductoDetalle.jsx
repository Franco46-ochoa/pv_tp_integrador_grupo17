import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductoDetalle() {   
   const { id } = useParams();

  const producto = useSelector(state =>
    state.productos.entities.find(p => p.id === parseInt(id))
  );

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }                                                                                                                                                                         
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={producto.image} className="card-img-top" alt={producto.title} />
        <div className="card-body">
          <h5 className="card-title">Nombre: {producto.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Categoría: {producto.category}</h6>
          <p className="card-text">Descripción: {producto.description}</p>
          <p className="card-text">Precio: ${producto.price}</p>
          <p className="card-text">Stock: {producto.rating.count}</p>
        </div>
        <div className="card-footer">
          <input
            type="checkbox"
          />
          <label>favorito</label>
        </div>
      </div>
    </>
  )
}

export default ProductoDetalle                                    