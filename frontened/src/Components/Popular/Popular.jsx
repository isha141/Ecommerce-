import React from 'react'
import '../Popular/Popular.css'; 
import Items from '../Items/Items';
import productData from '../Assets/data.js';
const Popular = () => {
  return (
      <div className="popular">
         <h1>POPULAR IN WOMEN </h1>
         <hr />  
      <div className="product_items">
         {productData.map((prod,i)=>
        (
          <Items key={i} id={prod.id} name={prod.name} image={prod.image} old_price={prod.old_price} new_price={prod.new_price} />
        )
      )}  
      </div> 
      </div>
  )
}

export default Popular