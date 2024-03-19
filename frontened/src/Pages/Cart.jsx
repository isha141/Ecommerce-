import React, { useContext } from 'react'
import './CSS/Cart.css';
import CartItems from '../Components/CartItems/CartItems';
// import { ShopContext } from '../Context/ShopContext';
const Cart = () => { 
  //  const {getcart}=useContext(ShopContext);
  return (
    <div className='cart'>
      <CartItems></CartItems>
    </div>
  )
}

export default Cart
