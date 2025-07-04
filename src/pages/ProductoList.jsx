import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/ProductosSlice';
import '../Styles/productolist.css'; // Importa el CSS específico
import { ToastContainer, toast } from 'react-toastify';

function ProductoList() {
    const { entities } = useSelector((state) => state.productos);
    const dispatch = useDispatch();

    const handleEliminar = (id) => {
        const toastId = toast.warn(
            <div>
                <p>¿Seguro que quieres eliminar este producto?</p>
                <button onClick={() => {
                    dispatch(remove(id));
                    toast.success("Producto eliminado con éxito");
                    toast.dismiss(toastId); // Cierra el toast
                }}>Sí</button>
                <button onClick={() => {
                    toast.info("Eliminación cancelada");
                    toast.dismiss(toastId); // Cierra el toast
                }}>No</button>
            </div>,
            {
                autoClose: false,
                closeOnClick: false,
                draggable: false,
                position: "top-center",
            }
        );
    };

    return (
        <div>
            <ToastContainer />
            <Link to="/CrearProducto" className='btn btn-primary mx-2 my-2'>Crear producto</Link>
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
                            {entities.map((producto) => (
                                <tr key={producto.id}>
                                    <th scope="row">{producto.id}</th>
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
        </div>
    );
}

export default ProductoList;