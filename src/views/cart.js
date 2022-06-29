import React, {useState} from 'react';
import {Button} from 'bootstrap-4-react'
import { Link } from 'react-router-dom';

const Cart = () => {
    const [email, setEmail] = useState("");
    const [cartData, setCartData] = useState({
        name: "",
        lastname: "",
        adress: "",
        home:"",
        city: "",
        comuna: "",
        region: "",
        country: "",
        phone: "",
       });

    const handleChange = (evento) => {
        setEmail(evento.target.value);
      } 
    const handleCartData = (evento) => {
        setCartData({...cartData, [evento.target.name] : evento.target.value })
    }
    
    const onSubmit = (evento) => {
    evento.preventDefault()
    console.log("Enviado el formulario")
    }
    return(
        <div className="container">
           <div className="row row-cols-3">
                <div className="col card">1. Producto</div>
                <div className="col card">2. Iniciar Sesión</div>
                <div className="col card">3. Dirección</div>
                <div className="col card">4. Pago</div>
            </div>
            <br></br>
            <div className="row">
                <div className="col">
                    <h5>Información de contacto</h5>
                    <p>¿Ya tienes cuenta? <Link to="">Inicia sesión</Link></p>
                </div>
            </div>
            <form className="row" onSubmit={onSubmit}>
                <div className="col">
                <div className="input-group flex-nowrap w-50">
                <input type="text" className="form-control" placeholder="e-mail" aria-label="email" aria-describedby="addon-wrapping" onChange={handleChange} value={email} name="email"/>
                </div>
                
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                    Enviarme novedades y ofertas por correo electrónico
                </label>
                </div>
                </div>
            </form>
            <br></br>
            <form className="row" onSubmit={onSubmit}>
                <div className="col">
                    <h5>Dirección de envío</h5>
                    <form>
                    <div className="form-group w-50">
                        <div className="row">
                            <div className="col-sm">
                                    <div className="form-group">
                                        <input type="nombre" className="form-control" id="exampleInputPassword1" placeholder="Nombre" onChange={handleCartData} value={cartData.name} name="name"/>
                                    </div>
                            </div>
                            <div className="col-sm">
                                    <div className="form-group">
                                        <input type="apellido" className="form-control" id="exampleInputPassword1" placeholder="Apellido" onChange={handleCartData} value={cartData.lastname} name="lastname"/>
                                    </div>    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                    <div className="form-group">
                                        <input type="direccion" className="form-control" id="exampleInputPassword1" placeholder="Dirección" onChange={handleCartData} value={cartData.adress} name="adress"/>
                                    </div>
                            </div>
                            <div className="col-12">
                                    <div className="form-group">
                                        <input type="datos" className="form-control" id="exampleInputPassword1" placeholder="N° Casa o Dpto. (opcional)" onChange={handleCartData} value={cartData.home} name="home"/>
                                    </div>    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                    <div className="form-group">
                                        <input type="ciudad" className="form-control" id="exampleInputPassword1" placeholder="Ciudad" onChange={handleCartData} value={cartData.city} name="city"/>
                                    </div>
                            </div>
                            <div className="col-sm">
                                    <div className="form-group">
                                        <input type="comuna" className="form-control" id="exampleInputPassword1" placeholder="Comuna" onChange={handleCartData} value={cartData.comuna} name="comuna"/>
                                    </div>    
                            </div>
                        </div>
                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>Región</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>Chile</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-6">
                                    <div className="form-group">
                                        <input type="telefono" className="form-control" id="exampleInputPassword1" placeholder="Teléfono" onChange={handleCartData} value={cartData.phone} name="phone"/>
                                    </div>
                            </div>
                        </div>
                    
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Guardar mi información y consultar más rápidamente la próxima vez</label>
                    </div>
                    <Button type="submit" className="btn btn-primary">Confirmar datos</Button>
                    
                    </form>
                   
                    
                </div>
                

            </form>
            
        </div>
    )
}

export default Cart;