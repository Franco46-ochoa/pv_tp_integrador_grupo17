import { useParams, Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 

function ProductoDetalle() {
  const { id } = useParams(); 
  const productos = useSelector(state => state.productos.entities); 

  // buscar producto por ID (convertido a número)
  const producto = productos.find(p => p.id === parseInt(id));

  // mostrar mensaje si no se encuentra
  if (!producto) {
    return (
      <div className="container mt-4">
        <h2>Producto no encontrado</h2>
        <Link to="/Home" className="btn btn-secondary mt-3">Volver a Home</Link> {/* ✅ AGREGADO */}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Detalle del Producto</h2>
      <div className="card">
        <img src={producto.image} className="card-img-top" alt={producto.title} />
        <div className="card-body">
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text"><strong>Precio:</strong> ${producto.price}</p>
          <p className="card-text"><strong>Categoría:</strong> {producto.category}</p>
          <p className="card-text"><strong>Descripción:</strong> {producto.description}</p>

       
          <Link to={`/EditarProducto/${producto.id}`} className="btn btn-warning me-2">
            Editar Producto
          </Link>

    
          <Link to="/Home" className="btn btn-secondary">
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
                                    