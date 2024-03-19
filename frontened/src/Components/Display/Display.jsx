import React, { useContext } from 'react'
// import first from '../Assets/bg1.jpg';
// import second from '../Assets/bg2.jpg';
// import third from '../Assets/bg3.jpg'; 
import star_dull from '../Assets/star_dull_icon.png';  
import star from '../Assets/star_icon.png';
import '../Display/Display.css';
import { ShopContext } from '../../Context/ShopContext';
const Display = (props) => { 
  const {product}=props; 
  const {addToCart}=useContext(ShopContext);
  return (
    <div className='product_display'>
          <div className="product_display-left">
            <div className="product_display_image_list">
              <img src={product.image} alt="1st image" />
              <img src={product.image} alt="2nd image" />
              <img src={product.image} alt="3rd image" />
              <img src={product.image} alt="4th image" />
            </div> 
            <div className="product-image">
              <img  className="product_display_main_img" src={product.image} alt="" srcSet=""/>
            </div>
          </div>
      <div className="product_display-right">
            <h1>{product.name}</h1>
            <div className="product_display_right_stars">
              <img src={star} alt="" srcSet=""/>
              <img src={star} alt="" srcSet=""/>
              <img src={star} alt="" srcSet=""/>
              <img src={star} alt="" srcSet=""/>
              <img src={star_dull} alt="" srcSet=""/> 
              <p>(1380)</p>
            </div> 
            <div className="product-display-right-prices">
              <div className="product-old-price">Rs. {product.old_price}</div>
              <div className="product-new-price">Rs. {product.new_price}</div> 
            </div>
            <div className="product-right-desc">
               A pair of shirt & trouser co-cords set
               Yellow, green & purple lilac floral printed shirt, shirt collar, three quartered sleeves , button closure
               Yellow green & purple lilac floral printed mid-rise trouser, has an partially elasticated waistband with slip closure, two pockets
            </div> 
            <div className="product_disply-right-size">
              <h1>Select Size </h1> 
              <div className="product-write-sizes">
                <div>Small</div>
                <div>Medium</div>
                <div>Large</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div> 
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> 
            <p className="product-display-right-category"><span>Category : </span>  Women,T-Shirt,CropTop</p>
            <p className="product-display-right-category"><span>Modern : </span> Latest </p> 
        <div className='descriptionBox'>
           <div className="descriptionBox-navigator">
           <div className="descriptionBox-navbox">Description</div> 
           <div className="descriptionBox-navbox-fade">Reviews (132)</div>    
          </div>
         <div className="descriptionBox-description">
         <p>An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service. It's tough to imagine daily life without e-commerce. We order food, clothes, and furniture; we register for classes and other online services; we download books, music, and movies; and so much more. E-commerce has taken root and is here to stay.</p>
         <p>Much like a traditional physical retail store, e-commerce websites allow consumers and businesses to buy and sell to one another on a designated platform. The main difference between e-commerce and physical commerce, however, is that e-commerce transactions occur entirely over the internet rather than at a brick-and-mortar location.</p>
       </div>
       </div>
    </div>
    </div>
  )
}

export default Display
