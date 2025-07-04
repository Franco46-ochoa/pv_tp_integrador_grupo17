import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { add } from "../store/UsersSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Login.css'; // Usamos el mismo archivo que login

function FormLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const lastId = useSelector((state) => state.users.entities.length);

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            newErrors.email = "El correo no es válido.";
        }
        if (password.length < 8) {
            newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const data = {
            id: lastId + 1,
            email,
            password
        };

        dispatch(add(data));
        toast.success("Registro exitoso");
        setTimeout(() => {
            navigate("/Home");
        }, 1000);
    };

    return (
        <>
            <ToastContainer />
            <div className="container-fluid login-page d-flex justify-content-center align-items-center">
                <div className="card p-4 login-box shadow">
                    <h1 className="text-center mb-4">Crear Cuenta</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control custom-input"
                                placeholder="Correo Electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control custom-input"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control custom-input"
                                placeholder="Confirmar Contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Registrar</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FormLogin;
