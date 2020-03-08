import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Carousel from './components/layout/Carousel';
import Footer from './components/layout/Footer';

import Login from './components/users/Login';

import Products from './components/products/Products';
import Detalle from './components/products/Detalle';
import Filtros from './components/products/Filtros';


function App() {

  return (
  <BrowserRouter>
    <Fragment >
      <Header />
      <Nav />
      <Carousel />

    <div className="container">
    <div className="row">

      <Login /> 

      <Switch>

        <Route exact path="/" component={Products} />
        <Route exact path="/products/detalle/:id" component={Detalle} />
      </Switch>

     <Filtros /> 

    </div>
    </div>
   
      <Footer />
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
