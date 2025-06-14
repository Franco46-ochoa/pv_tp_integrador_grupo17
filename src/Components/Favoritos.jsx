import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Favoritos() {
  const { entities, favoritos } = useSelector((state) => state.productos);
  const productosFavoritos = entities.filter(producto =>
    favoritos.includes(producto.id)
  );

  if (productosFavoritos.length === 0) {
    return <h2>No tienes productos favoritos aún.</h2>;
  }
  return (
    <>
      <h1>Mis Favoritos</h1>
      <div className="row">
        {productosFavoritos.map(producto => (
          <div className="col-md-4" key={producto.id}>
            <div className="card mb-4">
              <img
                src={producto.image}
                className="card-img-top"
                alt={producto.title}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">${producto.price}</p>
              </div>
              <div className="card-footer">
                <Link className="btn btn-primary" to={`/producto/${producto.id}`}>
                  Ver producto
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Favoritos