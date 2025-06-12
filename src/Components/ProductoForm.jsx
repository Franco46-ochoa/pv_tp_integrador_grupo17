import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addProduct, editProduct } from '../redux/productSlice';

export default function ProductFormPage({ edit }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productos = useSelector(state => state.productos.entities); // o state.products.list según tu slice

  const productoExistente = edit ? productos.find(p => p.id === parseInt(id)) : null;

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    if (edit && productoExistente) {
      setFormData({
        title: productoExistente.title,
        price: productoExistente.price,
        category: productoExistente.category,
        description: productoExistente.description,
        image: productoExistente.image
      });
    }
  }, [edit, productoExistente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      dispatch(editProduct({ ...formData, id: parseInt(id) }));
      alert('Producto editado exitosamente (simulado)');
    } else {
      dispatch(addProduct({ ...formData }));
      alert('Producto creado exitosamente (simulado)');
    }

    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>{edit ? 'Editar Producto' : 'Crear Producto'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Título:</label>
          <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Precio:</label>
          <input type="number" name="price" className="form-control" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Categoría:</label>
          <input type="text" name="category" className="form-control" value={formData.category} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Imagen (URL):</label>
          <input type="text" name="image" className="form-control" value={formData.image} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Descripción:</label>
          <textarea name="description" className="form-control" value={formData.description} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">
          {edit ? 'Guardar Cambios' : 'Crear Producto'}
        </button>
      </form>
    </div>
  );
}
