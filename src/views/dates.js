const Dates = () => {
    return (
        <div className="container">
            <h5>Datos personales</h5>
            <br></br>
            <p>Por favor actualice su información personal si ésta ha cambiado..</p>
            
            <div className="card">
                <h5 className="card-header">* Campo requerido</h5>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text" id="basic-addon1">Nombre</div>
                </div>
                <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text" id="basic-addon1">Apellido</div>
                </div>
                <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text" id="basic-addon1">Correo electrónico</div>
                </div>
                <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text" id="basic-addon1">Contraseña actual</div>
                </div>
                <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text" id="basic-addon1">Nueva contraseña</div>
                </div>
                <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text" id="basic-addon1">Repite la nueva contraseña</div>
                </div>
                <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <button className="btn btn-primary">Guardar</button>
            </div>
        </div>
    )
}

export default Dates;