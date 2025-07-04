import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { add, edit } from '../store/ProductosSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductoForm({ edit: isEdit }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productos = useSelector(state => state.productos.entities);
  const categorias = [...new Set(productos.map(p => p.category))];

  const productoExistente = isEdit
    ? productos.find(p => p.id === parseInt(id))
    : null;

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
      toast.warn('Producto no encontrado');
      navigate('/');
    }
  }, [isEdit, productoExistente, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title.trim().length < 3) {
      toast.error('El título debe tener al menos 3 caracteres.');
      return;
    }

    if (Number(formData.price) <= 0) {
      toast.error('El precio debe ser mayor a cero.');
      return;
    }

    if (formData.category.trim().length < 3) {
      toast.error('La categoría debe tener al menos 3 caracteres.');
      return;
    }

    if (formData.description.trim().length < 10) {
      toast.error('La descripción debe tener al menos 10 caracteres.');
      return;
    }

    try {
      new URL(formData.image);
      if (!formData.image.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
        toast.error('La URL debe apuntar a una imagen (.jpg, .png, etc).');
        return;
      }
    } catch {
      toast.error('La URL de imagen no es válida.');
      return;
    }

    if (isEdit) {
      dispatch(edit({ ...formData, id: parseInt(id) }));
      toast.success('Producto editado exitosamente');
    } else {
      const ultimoId = productos.length ? Math.max(...productos.map(p => p.id)) : 100;
      const nuevoId = ultimoId + 1;
      dispatch(add({ ...formData, id: nuevoId }));
      toast.success('Producto creado exitosamente');
    }

    setTimeout(() => {
      navigate("/Home");
    }, 1000);
  };

  return (
    <>
      <ToastContainer />
      <div
        className="d-flex justify-content-center align-items-start"
        style={{ paddingTop: '60px', paddingBottom: '60px', minHeight: '100vh' }}
      >
        <div className="card shadow p-4" style={{ maxWidth: '600px', width: '100%' }}>
          <h3 className="text-center mb-4">
            {isEdit ? 'Editar Producto' : 'Crear Producto'}
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ej. Mouse gamer RGB"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input
                type="number"
                name="price"
                className="form-control"
                value={formData.price}
                onChange={handleChange}
                placeholder="Ej. 4999.99"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Categoría</label>
              <select
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar categoría</option>
                {categorias.map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Imagen (URL)</label>
              <input
                type="text"
                name="image"
                className="form-control"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://ejemplo.com/imagen.jpg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Descripción</label>
              <textarea
                name="description"
                className="form-control"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe tu producto..."
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              {isEdit ? 'Guardar Cambios' : 'Crear Producto'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
