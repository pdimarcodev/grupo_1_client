import React from 'react';

function Header(){
    return (

   <header className="main-header">
   <div className="container">
     <div className="row justify-content-between">


   <a className="navbar-brand logo" href="/">El Palenque</a>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
   </button>


   <div className="buscador align-self-center">
     <form>
       <input type="text" name="search" placeholder="Ando buscando..." />
       <input type="submit" name="submit" value="Buscar" className="btn btn-secondary" />
     </form>
   </div>

  
   <div className="cart-container align-self-center">
     <button className="btn btn-secondary cart"  type="button" data-toggle="collapse" data-target="#show-cart">
       <img src="/images/cart.png" alt="Carrito" />
     </button>
     <div className="cart-products collapse" id="show-cart">
         <div className="cart-product">
             <img src="https://via.placeholder.com/20" alt="Producto1"  />
             <div className="cart-product-info">
                 <span className="cantidad">1</span>
                 <p>Producto1</p>
                 <p>$50,00</p>
                 <p className="cambiar-cantidad">
                     <button>-</button>
                     <button>+</button>
                 </p>
                 <p className="cart-product-delete">
                     <button>Eliminar</button>
                 </p>
             </div>
         </div>

     </div>
   
   </div>
   </div>
   </div>
 </header>

    )}

    export default Header;