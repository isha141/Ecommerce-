import React from 'react'
import '../BreadCrum/BreadCrum.css';
import arrow_icon from '../Assets/right-arrows.png';
const BreadCrum = (props) => { 
   const {product}=props;
  return (
    <div className='breadcrum'> 
       HOME <img src={arrow_icon} alt="" srcSet=""/> SHOP <img src={arrow_icon} alt="" srcSet=""/> 
       {/* {product.category} */} {product.name}
    </div>
  )
}
// {product.category}
// {product.name}
export default BreadCrum;
