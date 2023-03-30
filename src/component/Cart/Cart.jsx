import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart}=props

    let total=0;
    let totalShipping=0;

    for(const product of cart){
       total=total+product.price;
       totalShipping=totalShipping+product.shipping;
    }
    let tax=total*7/100;

    let grandTotal= total+totalShipping+tax;

    //console.log(cart)
    return (
        <div className='cart'>
            <h4>Cart Summary</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax:$ {tax.toFixed(2)} </p>
            <h3>Grand Total: $ {grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;