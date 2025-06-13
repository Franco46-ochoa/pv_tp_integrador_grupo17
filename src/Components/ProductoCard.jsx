import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ProductoCard() {
  const { entities } = useSelector((state) => state.productos);

  return (
    <>
      <h1>Productos</h1>
      <div className="row my-4 mx-2">
        {entities.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <div className="card mb-4">
              <img
                src={producto.image}
                className="card-img-top"
                alt={producto.title}
                style={{ height: "200px", objectFit: "cover" }}

              />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">${producto.price}</p>

              </div>
              <div className="card-footer">
                <Link className="btn btn-primary" to={`/producto/${producto.id}`}>
                  Ver producto
                </Link>
                <input
                  type="checkbox"
                  className='mx-2'
                />
                <label>favorito</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export default ProductoCard