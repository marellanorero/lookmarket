import {Link} from 'react-router-dom'
const Address = () => {
    return(
        <div className="container">
        <p>Configure sus datos de pago y de envío. Estos serán seleccionados por defecto cuando haga un pedido. Puede añadir direcciones adicionales, algo especialmente útil para enviar regalos o recibir pedidos en la oficina.</p>

        <p>Sus direcciones se muestran a continuación</p>
        
        <p>Asegúrese de actualizar sus datos si han cambiado.</p>
        <div className="card w-75 primary">
            <div className="row row-cols-2">
                <div className="card-body">
                    <h5 className="card-title">Dirección Casa</h5>
                    <p className="card-text">Nombre:</p>
                    <p className="card-text">Email:</p>
                    <p className="card-text">Región:</p>
                    <p className="card-text">Comuna:</p>
                    <p className="card-text">RUT:</p>
                    <p className="card-text">Dirección:</p>
                    <p className="card-text">Número de Calle:</p>
                    <p className="card-text">Número Dpto.:</p>
                    <p className="card-text">Celular:</p>
                    <p className="card-text">Teléfono optativo:</p>
                    <p className="card-text">Información adicional:</p>
                    <button className="btn btn-primary">Eliminar</button>
                </div>
            </div>
            <button className="btn btn-primary">Añadir una dirección</button>
        </div>
        <Link to="/"><button type="button" className="btn btn-link">Inicio</button></Link>
        </div>
    )
}

export default Address;
