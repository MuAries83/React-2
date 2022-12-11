import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items) <storng>0</storng>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" /> Esta orden contiene un regalo
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
        <button>Proceder a pago</button>
    </div>
  );
}

export default Subtotal