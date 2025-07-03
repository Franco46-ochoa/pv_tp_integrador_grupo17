import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { add } from "../store/UsersSlice";

function FormLogin() {    
    
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const lastId = useSelector((state) => state.users.entities.length);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: lastId + 1,
            email,
            password
        }
        dispatch(
            add(data)
        )
        alert("El usuario se agrego correctamente")
        navigate("/")
            };
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <div id="emailHelp" className="form-text">Nunca compartiremos tu correo con nadie más.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        //value={confirmPassword} 
                       // onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </div>

                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
        </>
    );
}

export default FormLogin;

