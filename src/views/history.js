import '../styles/account.css';
import { Link } from 'react-router-dom';
const History = () => {
    return(
    <div className="container">
        <br></br>    
        <h5>Historial de pedido</h5>
        <br></br>
        <p>Lista de pedidos desde la creación de su cuenta.</p>

        <div className="card w-75 primary">
            <div className="row row-cols-2">
                <div className="card-body">
                    <h5 className="card-title">Nombre del producto</h5>
                    <p className="card-text">Fecha de pago:</p>
                    <p className="card-text">Forma de pago:</p>
                    <p className="card-text">Valor:</p>
                    <Link to="/cart"><button className="btn btn-primary">Comprar otro</button></Link>
                </div>
                <div className="card-body">
                    <img src="..." alt="..." className="img-thumbnail"/>
                </div>
            </div>
        </div>
        <Link to="/"><button type="button" className="btn btn-link">Inicio</button></Link>
    </div>
    
    )
}

export default History;