import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { add, edit } from '../ProductosSlice';

export default function ProductoForm({ edit: isEdit }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productos = useSelector(state => state.productos.entities);

  const productoExistente = isEdit ? productos.find(p => p.id === parseInt(id)) : null;

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    if (isEdit && productoExistente) {
      setFormData({
        title: productoExistente.title,
        price: productoExistente.price,
        category: productoExistente.category,
        description: productoExistente.description,
        image: productoExistente.image
      });
    }
  }, [isEdit, productoExistente]);

  useEffect(() => {
    if (isEdit && !productoExistente) {
      alert('Producto no encontrado');
      navigate('/');
    }
  }, [isEdit, productoExistente, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.title.trim().length < 3) {
      alert('El título debe tener al menos 3 caracteres.');
      return;
    }

    if (Number(formData.price) <= 0) {
      alert('El precio debe ser mayor a cero.');
      return;
    }

    if (formData.category.trim().length < 3) {
      alert('La categoría debe tener al menos 3 caracteres.');
      return;
    }

    if (formData.description.trim().length < 10) {
      alert('La descripción debe tener al menos 10 caracteres.');
      return;
    }

    try {
      new URL(formData.image);
    } catch {
      alert('La URL de imagen no es válida.');
      return;
    }

    // Enviar
    if (isEdit) {
      dispatch(edit({ ...formData, id: parseInt(id) }));
      alert('Producto editado exitosamente');
    } else {
      const nuevoId = Math.floor(Math.random() * 10000) + 100;
      dispatch(add({ ...formData, id: nuevoId }));
      alert('Producto creado exitosamente');
    }

    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>{isEdit ? 'Editar Producto' : 'Crear Producto'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Título:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Categoría:</label>
          <input
            type="text"
            name="category"
            className="form-control"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Imagen (URL):</label>
          <input
            type="text"
            name="image"
            className="form-control"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Descripción:</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          {isEdit ? 'Guardar Cambios' : 'Crear Producto'}
        </button>
      </form>
    </div>
  );
}


