import '../styles/account.css';
import { Link } from 'react-router-dom';
const Account = () => {
    return(
    <div className="container">
        <br></br>    
        <h5>Mi Cuenta</h5>
        <br></br>
        <p>Bienvenido a tu cuenta, desde aquí puedes administrar tus direcciones y pedidos.</p>

        <div className="col-6">
        <label className="sr-only" for="inlineFormInputGroup"></label>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text"></div>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Historial y detalle de mis pedidos"/>             
            </div>
        </div>
        <div className="col-6">
        <label className="sr-only" for="inlineFormInputGroup"></label>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text"></div>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Mis direcciones"/>             
            </div>
        </div>
        <div className="col-6">
        <label className="sr-only" for="inlineFormInputGroup"></label>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text"></div>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Mis datos personales"/>             
            </div>
        </div>
        <Link to="/"><button type="button" className="btn btn-link">Inicio</button></Link>
    </div>
    )
}

export default Account;