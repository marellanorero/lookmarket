import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Resumen = () => {
    const {store, actions} = useContext(Context);

    useEffect(() => {
            actions.addToCart();
        }, [])
    return (
        <div className="container">
            <div className="row row-cols-3">
                <div className="col card">1. Producto</div>
                <div className="col card">2. Iniciar Sesión</div>
                <div className="col card">3. Dirección</div>
                <div className="col card">4. Pago </div>
            </div>

            <table className="table">
                <thead>
                    <ul className='row'>
                    <li scope="col">#</li>
                    <li className='col'>Producto</li>
                    <li className='col'>Cantidad</li>
                    <li className='col'>Precio</li>
                    <span>x</span>
                    </ul>
                </thead>
                <tr>
                
                {
                store.show.map((item, index) => {
                  return (
                    <ul className='row'>
                        <li scope="col">#</li>
                        <li className='col'>{item.product}</li>
                        <li className='col'>{store.len.length}</li>
                        <li className='col'>{item.price}</li>
                    </ul>
                    )
                  })
                }
                </tr>
            </table>
            <Link to='/inicioSecion'><button>Continuar</button></Link>
        </div>
    )
}

export default Resumen;