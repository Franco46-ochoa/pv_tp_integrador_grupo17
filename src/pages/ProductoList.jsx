import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/ProductosSlice';
import '../Styles/productolist.css'; // Importa el CSS específico

function ProductoList() {
    const { entities } = useSelector((state) => state.productos);
    const dispatch = useDispatch();

    const handleEliminar = (id) => {
        if (window.confirm("¿Seguro que quieres eliminar este producto?")) {
            dispatch(remove(id));
        }
    }
    return (
        <>
            <div className="container mt-5 mb-0">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover my-3 custom-table"> 
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Título</th>
                                <th scope="col">Categoría</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entities.map((producto, index) => (
                                <tr key={producto.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{producto.title}</td>
                                    <td>{producto.category}</td>
                                    <td>${producto.price}</td>
                                    <td>
                                        <button type="button" className="btn-eliminar me-2" onClick={() => handleEliminar(producto.id)}>
                                            <i className="bi bi-trash3-fill" title="Eliminar producto"></i>
                                        </button>
                                        <Link to={`/Producto/${producto.id}`}>
                                            <button type="button" className="btn-ver me-2">
                                                <i className="bi bi-eye-fill" title="Ver Detalles del Producto"></i>
                                            </button>
                                        </Link>
                                        <Link to={`/EditarProducto/${producto.id}`}>
                                            <button type="button" className="btn-editar my-2">
                                                <i className="bi bi-pencil-fill" title="Editar"></i>
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductoList;