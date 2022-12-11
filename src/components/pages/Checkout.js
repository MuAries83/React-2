import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src="http://localhost:3000/banner3.jpg" alt='banner2'/>
        </div>
        <div>
            <h2 className='checkout__title'>Tu Carrito de compras</h2>
        </div>
        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout