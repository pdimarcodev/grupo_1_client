import React, { Fragment } from 'react';

import Login from '../users/Login';
import Products from '../products/Products';
import Filtros from '../products/Filtros';
import Carousel from './Carousel';

function Main(){
    return(
        <Fragment>
            <Carousel />
            <div className="container">
            <div className="row">
                <Login />
                <Products />
                <Filtros />
            </div>
            </div>
        </Fragment>
    )

}

export default Main;