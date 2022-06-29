import React, {useState, useContext, useEffect} from 'react';
import { Context } from '../store/appContext';
import {  Button } from 'bootstrap-4-react';
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import '../styles/navbar.css'




const Menu = () => {
  const {store, actions} = useContext(Context);

  useEffect(() => {
		actions.clearCart();
    actions.delFromCart();
    actions.resumeCart();
	}, [])

  const [search, setSearch] = useState("");
  
  const [loginData, setLoginData] = useState({
    user: "",
    password: "",
   });

  const handleChange = (evento) => {
    setSearch(evento.target.value);
  } 
  
  const handleChangeLogin = (evento) => {
    setLoginData({...loginData, [evento.target.name] : evento.target.value })
  }

  const onSubmit = (evento) => {
    evento.preventDefault()
    console.log("Enviado el formulario")
  }  

  
    return (
        <>
        <div className="nav mt-5">
          <Link to="/" className="navbar-brand ml-5"><img alt="foto starwars" src={logo} /></Link>
          <div className="container">
            <form onSubmit={onSubmit} className="row w-100 md-center mb-5">
               
                <div className="col mt-4 w-50">
                  <div className="input-group inline justify-center">
                    <input type="text" className="form-control" placeholder="Buscar" onChange={handleChange} value={search} name="search"/>
                  <div className="input-group-prepend">
                    <button className="input-group-text" type="submit">Buscar</button>
                  </div>
                </div>
                </div>
                <div className="col mt-4">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Usuario" onChange={handleChangeLogin} value={loginData.user} name="user"/>
                    <input type="text" className="form-control" placeholder="Contraseña"onChange={handleChangeLogin} value={loginData.password}  name="password"/>
                  <div className="input-group-prepend">
                    <button className="input-group-text" type="submit">Entrar</button>
                  </div>
                </div>
              </div>
            
              </form>
          </div>
          <div className="container">
            <div className="row bg-dark w-100 ml-4 mt-4">
              <div className="col" >
              <div className="btn-group" role="group" aria-label="Basic example">
                <Button role="button" type="button" className="btn btn-dark" data-toggle="dropdown"><strong>Marcas</strong></Button>
                <div className="drop dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/gallery" className="a dropdown-item" href="#">Producto</Link>
                  <Link to="/gallery" className="a dropdown-item" href="#">Producto</Link>
                  <Link to="/gallery" className="a dropdown-item" href="#">Producto</Link>
                </div>
              </div>
              </div>
              <div className="col" >
              <div className="btn-group" role="group" aria-label="Basic example">
                <Button role="button" type="button" className="btn btn-dark" data-toggle="dropdown"> <strong>Cuidado Corporal</strong></Button>
                <div className="drop dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/gallery" className="a dropdown-item" href="#">Producto</Link>
                  <Link to="/gallery" className="a dropdown-item" href="#">Producto</Link>
                  <Link to="/gallery" className="a dropdown-item" href="#">Producto</Link>
                </div>
              </div>
              </div>
              <div className="col" >
              <div className="btn-group" role="group" aria-label="Basic example">
                <Button role="button"  type="button" className="btn btn-dark" data-toggle="dropdown"><strong>Cuidado del cabello</strong></Button>
                <div className="drop dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/gallery" className="a dropdown-item" href="#">Producto</Link>
                  <Link to="/gallery" className="a dropdown-item" href="#">Producto</Link>
                  <Link to="/gallery" className="a dropdown-item" href="#">Producto</Link>
                </div>
              </div>
              </div>
              <div className="col" >
              <div className="btn-group" role="group" aria-label="Basic example">
                <Button role="button" type="button" className="btn btn-dark" data-toggle="dropdown"><strong>Productos de Peinado</strong></Button>
                <div className="drop dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/gallery" className="a dropdown-item" href="#">Producto</Link>
                  <Link to="/gallery" className="a dropdown-item" href="#">Producto</Link>
                  <Link to="/gallery" className="a dropdown-item" href="#">Producto</Link>
                </div>
              </div>
              </div>
              <div className="col bg-white" >
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Carro de compras
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                
                {
                store.show.map((item, index) => {
                  return (
                    <a className="dropdown-item" href="#" key={index} onClick={() => actions.delFromCart()}>{item.product} <button className='btn btn-secondary' onClick={() => actions.delAllFromCart(item)}>X</button></a>
                        )
                  })
                }
               
                <div className='container text-align-center'>
                  <div className='row'>
                    <div className='col-4'>
                      <button className='btn btn-secondary' onClick={() => actions.clearCart()}>Limpiar carro</button>
                      <Link to="/cartresumen" onClick={() => actions.addToCart()}><button className='btn btn-secondary' >Finalizar compra</button></Link>
                    </div>
                  </div>
                </div>
                       
                </div>
              </div>
              </div>
              
            </div>
         </div>   
      </div>
      <hr className="header"/>

      </>
    )
}
export default Menu;