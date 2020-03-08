import React from 'react';

function Nav(){
    return(

        <nav className="navbar navbar-custom navbar-expand-lg navbar-dark">
        <div className="container">
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-toggler" aria-controls="nav-toggler" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
         </button>
     <div className="collapse navbar-collapse" id="nav-toggler">
       <ul className="navbar-nav w-100 justify-content-around">
         <li className="nav-item dropdown active">
           <a className="nav-link dropdown-toggle" 
           href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Inicio
           </a>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
             <a className="dropdown-item" href="/products/">Lista productos</a>
           </div>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">Talabartería</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">Marroquinería</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">Platería</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">Vestimenta</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">Calzado</a>
         </li>
       </ul>
     </div>
  
     </div>
     </nav>

    )



}

export default Nav;
