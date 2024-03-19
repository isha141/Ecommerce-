import React from 'react'
import './RelatedProduct.css';
import data_product from '../Assets/data.js'; 
import Items from '../Items/Items.jsx';
const RelatedProduct = () => {
  return (
    <div className='realtedProduct'>
      <h1>Related Products</h1>
      <hr />
      <div className="related_products-items">
        {data_product.map((prod,i)=>(
           <Items key={i} id={prod.id} name={prod.name} image={prod.image} old_price={prod.old_price} new_price={prod.new_price} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProduct
