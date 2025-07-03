import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const users = useSelector((state) => state.users.entities);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        //console.log(users)
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('auth', email)
            alert('Inicio de sesión Exitoso')
            navigate('/home');
        } else {
            alert("Credenciales Invalidas")
            setEmail("");
            setPassword("");
            alert('Inicio de sesión Fallido')
        }
    };
    return (
        <>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">Nosotros nunca compartiremos tu correo electronico.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
        </>
    )
}

export default Login;