import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import productImage from '../img/product.jpg'
import data from './data.json';
import { Context } from '../store/appContext';

const Product = () => {
    const { id } = useParams();
    const { actions} = useContext(Context)

    useEffect(() => {
		actions.addToCart();
	}, [])

    const [ products ] = useState(data);

    console.log(id)

    let found = products.find(function (element) {
        return element.id == id;
      });
    
return(
        <>
        <div className="container">
            <br></br>
            <div>
                <div className="row">	
                    <div className="col xs-6 md-4" >
                        <h5>Marca</h5>
                        <p >{found.product}</p>
                    </div>
                    <div className="col xs-6 md-4">
                        <img src={productImage} className="img-thumbnail" alt="..."></img>
                    </div>
                    <div className="col xs-6 md-4">
                        <h5>{found.product}</h5>
                        <p>{found.description}</p>
                        <div className="input-group w-100 justify-content-center">
                            <input type="text" className="form-control" placeholder="Cantidad" aria-label="Recipient's username with two button addons"/>
                            <button type="submit" onClick={() => actions.addToCart(found)}>Añadir</button>
                            
                        </div>
                    </div>
                
                            <br></br>

                    <div className="row">
                        <div className="col">
                            <p>{products.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="/gallery"><Button variant="primary">Volver</Button></Link>
                        </div>   
                    </div>
                </div>
            </div>
            <br></br>
        </div>
        </>
    )
}

export default Product;