import React from 'react';
import "./Checkout.css";

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src="http://localhost:3000/banner2.jpg" alt='banner2'/>
        </div>
        <div>
            <h2 className='checkout__title'>Tu Carrito de compras</h2>
        </div>
        <div className='checkout__right'>
            <h2>Subtotal</h2>
        </div>
    </div>
  )
}

export default Checkout