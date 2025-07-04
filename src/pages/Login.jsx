import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const users = useSelector((state) => state.users.entities);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('auth', email)
            toast.success("Inicio de sesión exitoso");
            setTimeout(() => {
                navigate("/Home");
            }, 1000);
        } else {
            toast.error("Credenciales inválidas");
            setEmail("");
            setPassword("");
        }
    };

    return (
        <>
            <ToastContainer />

            <div className="container-fluid login-page d-flex justify-content-center align-items-center">
                <div className="card p-4 login-box shadow">
                    <h1 className="text-center mb-4 ">Bienvenido</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control custom-input"
                                placeholder="Correo Electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
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
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
