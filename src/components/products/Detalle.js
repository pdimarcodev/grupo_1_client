import React, {useState, useEffect, Fragment} from 'react';
import axios from '../../config/axios';


function Detalle(props){

  
  const {id} = props.match.params;

  const [ product, setProduct ] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    brand: '',
    category: '',
    colors: [],
    
});
 
    useEffect(() => {
        const reqAPI = async () => {
        const reqProduct = await axios.get(`/products/detalle/${id}`);
        setProduct(reqProduct.data);
   }

   reqAPI();
}, []);

    return(
        <div className="container detalle">
  <div className="row">
    <figure className="product-img col-4" >
      <img src={`http://localhost:5000/images/${product.image}`} alt={product.name} width="100%" />
    </figure>
  <div className="producto col-6">
    <h1>{product.name}</h1> <br />
    <h5>Cód: {id}</h5><br />  
    <h5>{product.description}</h5> <br />
    <h5>Marca: {product.brand.name}</h5> <br />
    <h5>Categoría: {product.category.name}</h5> <br />
    <h5>Colores:</h5>
    { product.colors.map( item => (
      <ul>
          <li
          key={item.id}
          >
              {item.name}
          </li>
      </ul>
    ))}
    <br />
    <h1>$ {product.price}</h1> <br />
    <figure className="medios-de-pago">
      <img src="http://localhost:5000/images/medios-de-pago.png" alt="Medios de Pago" width="300" height="auto" />
    </figure>
    <button className="btn btn-primary">Comprar</button>
    
  </div>

  </div>

</div>

    )
}

export default Detalle;