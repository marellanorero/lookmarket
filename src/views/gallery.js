import React, {useState} from 'react';
import { Button } from 'bootstrap-4-react';
import {Link} from 'react-router-dom';
import productImage from '../img/product.jpg';
import data from './data.json';

const Gallery = () => {
    const [ products ] = useState(data);

    return(
        <>
        <div className="container">
            <div className="row">
                {
                    products.map((item, index) => {
                        return(
                            <div key={index} className="col-4 xs-3 md-4">
                                <div className="card-body">
                                    <img src={productImage} className="img-thumbnail" alt="..."/>
                                        <h5 className="card-title">{item.product}</h5>
                                        <p className="card-text">
                                        {item.description}
                                        </p>
                                        <p className="card-text">
                                        {item.price}
                                        </p>
                                        <Link to={"/product/" + item.id}><Button variant="primary">Ver más</Button></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Gallery;