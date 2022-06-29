import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Login = () => {
    const [loginData, setLoginData] = useState({
        user: "",
        password: "",
       });
    
    const handleChangeLogin = (evento) => {
        setLoginData({...loginData, [evento.target.name] : evento.target.value })
      }
    return (
        
        <div className="container">
            <div className="row row-cols-3">
                <div className="col card">1. Producto</div>
                <div className="col card">2. Iniciar Sesión</div>
                <div className="col card">3. Dirección</div>
                <div className="col card">4. Pago </div>
            </div>
            <div className="input-group">
                <div className="col mt-4">
                <input type="text" className="form-control" placeholder="Usuario" onChange={handleChangeLogin} value={loginData.user} name="user"/>
                </div>
                <div className='col mt-4'>
                <input type="text" className="form-control" placeholder="Contraseña"onChange={handleChangeLogin} value={loginData.password}  name="password"/>
                </div>
            </div>
            <br></br>
            <div className="input-group-prepend col mt-4">
               <Link to='/cart'><button className="input-group-text" type="submit">Entrar</button></Link> 
            </div>
            
        </div>
    )
}

export default Login;