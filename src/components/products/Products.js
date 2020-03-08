import React, { useEffect, useState, Fragment } from 'react';

import axios from '../../config/axios';

import Product from './Product';
import Spinner from '../layout/Spinner';

function Products(){

    const [products, setProducts] = useState([]);

    const reqAPI = async () => {
        try {
            const reqProducts = await axios.get('/products');
            setProducts(reqProducts.data);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect( () => {
        reqAPI();
    }, []);

    if (!products.length) return <Spinner />

    return(
        
            <div class="product-container col-sm-12 col-md-6 col-lg-7">
                <div class="row">
               
               {products.map( item => (
                   <Product 
                   key={item.id}
                   product={item}
                   />
               ))}
               
                </div>
            </div>       
    )
}

export default Products;