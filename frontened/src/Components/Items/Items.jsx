import React from 'react'
import '../Items/Items.css';
import { Link } from 'react-router-dom';
const Items = (props) => {
  return (
    <div>
      <div className="items">
         <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" srcSet=""/></Link>
         <p>{props.name}</p>
         <div className="items-prices">
           <div className="items-prices-new">
            Rs.{props.new_price}
           </div>
           <div className="items-prices-old">
            Rs.{props.old_price} 
           </div>
         </div>
      </div>
    </div>
  )
}

export default Items
