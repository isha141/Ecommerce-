import React , {useContext} from 'react'
import '../CartItems/CartItems.css';
// import Items from '../Items/Items';
import { ShopContext } from '../../Context/ShopContext'; 
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => { 
   const {all_product,getcart,RemoveFromCart,GetTotalCartAmount}=useContext(ShopContext);
  return (  
    <div className='cartItems'>  
      <div className="cart-item-format-main">
       <p>Products</p>
       <p>Title</p>
       <p>Price</p>
       <p>Quantity</p>
       <p>Total</p>
       <p>Remove</p>
      </div> 
      <hr />
      {all_product.map((e)=>{
         if(getcart[e.id]>0){
        return <div>
          <div className="cart-items-format cart-item-format-main">
          <img className="carticon-product-icon" src={e.image} alt="" srcset="" />
          <p>{e.name}</p>
          <p>Rs. {e.new_price}</p>
          <button className='cartitems-quantity'>{getcart[e.id]}</button> 
          <p>Rs. {e.new_price*getcart[e.id]}</p>
          <img className='cartitems-remove-icon' src={remove_icon}  onClick={()=>{RemoveFromCart(e.id)}} alt="" srcset="" />
          </div> 
          <hr />
          </div>
         } 
         return null;
      })} 
      <div className="cart-items-down">
        <div className="cart-items-total">
           <h1>Cart Total</h1>
            <div>
              <div className="cart-items-total-items">
               <p>Subtotal</p>
               <p>Rs . {GetTotalCartAmount()}</p>
              </div> 
              <hr />  
              <div className="cart-items-total-items">
                 <p>Shipping Fee</p>
                 <p>Free </p>
              </div> 
              <hr /> 
              <div className='cart-items-total-items'>
                <h3>Total</h3>
                <h3>Rs. {GetTotalCartAmount()}</h3>
              </div>
            </div> 
            <button>PROCEED TO CHECKOUT</button>
        </div> 
        <div className="cart-items-promocode">
         <p>If you have promo code, Enter it here </p> 
         <div className="cart-item-promo-box">
           <input type="text" placeholder='Promo Code'/>
           <button>Submit</button>
         </div>
        </div>
      </div>
    </div>
  )
}




{/* <div>
        <div className="cart-items-format">
          <img className="carticon-product-icon" src="" alt="" srcset="" />
          <p></p>
          <p></p>
          <button className='cartitems-quantity'></button> 
          <p></p>
          <img src={remove_icon}  onClick={()=>{RemoveFromCart()}} alt="" srcset="" />
        </div> 
        <hr />
</div> */}












export default CartItems
