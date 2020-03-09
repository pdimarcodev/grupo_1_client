import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

import Detalle from './components/products/Detalle';

function App() {

  return (
  <BrowserRouter>
    <Fragment >
      <Header />
      <Nav />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/products/detalle/:id" component={Detalle} />
      </Switch>

      <Footer />
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
