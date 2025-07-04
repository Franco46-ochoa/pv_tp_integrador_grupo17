import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const users = useSelector((state) => state.users.entities);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('auth', email);
            toast.success("Inicio de sesión exitoso");
            setTimeout(() => {
                navigate("/Home");
            }, 1000);
        } else {
            toast.error("Credenciales Invalidas");
            setEmail("");
            setPassword("");
            toast.warn('Inicio de sesión Fallido');
        }
    };

    return (
        <div className="container mt-5">
            <ToastContainer />
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Iniciar Sesión</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                aria-describedby="emailHelp" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <div id="emailHelp" className="form-text">Nosotros nunca compartiremos tu correo electrónico.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                    </form>
                    <div className="text-center mt-3">
                        <Link to="/FormLogin" className="text-decoration-none">¿No tienes una cuenta? Regístrate aquí</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;