import React from 'react';

function Filtros(){
    return(
        <div className="filtros-container col-sm-12 col-md-3 col-lg-2">
        <div className="titulo-filtros">
          <p>Filtrar por:</p>
        </div>
        <div className="filtro">
          <p>Categoría</p>
          <div className="caja-filtro">
          <input type="checkbox" id="talabarteria" name="categoria"/>
          <label for="talabarteria">Talabartería</label><br />
          <input type="checkbox" id="marroquineria" name="categoria"/>
            <label for="marroquineria">Marroquinería</label><br />
          </div>
        </div>
        <div className="filtro">
          <p>Precio</p>
          <div className="caja-filtro">
              <input type="radio" id="rango1" name="rango" />
              <label for="rango1">$0-$1.000</label><br />
              <input type="radio" id="rango2" name="rango" />
              <label for="rango2">$1.000-$5.000</label><br />
            

          </div>
        </div>
        <div className="filtro">
          <p>Marca</p>
          <div className="caja-filtro">
              <input type="checkbox" id="mustad" name="marca"/>
              <label for="mustad">Mustad</label><br />
              <input type="checkbox" id="lamartina" name="marca"/>
              <label for="lamartina">La Martina</label><br />
            
          </div>
        </div>
      </div>

    )


}

export default Filtros;