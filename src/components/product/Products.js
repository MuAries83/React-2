import React from 'react'
import "./Products.css";
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from "../pages/StateProvider";

function Products({id, title, image, price, rating}) {
    const [{basket}, dispach] = useStateValue();

    const addToBasket = () => {
      // Mandamos los articulos a la capa de datos
      dispach({
        type: "Agregar_al_carrito",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className='product__rating'>
              {Array(rating).fill().map((_,i)=>(
                <p><StarIcon /></p>
              ))}
            </div>
        </div>
      <img src={image} alt='figura'/>
      <button onClick={addToBasket}>Agrega al carrito</button>
    </div>
  )
}

export default Products