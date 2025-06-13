import { Link } from 'react-router-dom';
import { useSelector,useDispatch  } from 'react-redux';
import {remove} from '../ProductosSlice';

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
            <div className="container my-5">
                <table className="table table-bordered my-3 ">
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
                                    <button type="button" className="btn btn-danger me-2" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
                                    <Link to={`/Producto/${producto.id}`}>
                                        <button type="button" className="btn btn-primary me-2">Ver</button>
                                    </Link>
                                    <Link to={`/EditarProducto/${producto.id}`}>
                                        <button type="button" className="btn btn-warning my-2">Editar</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ProductoList