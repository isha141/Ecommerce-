import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import { useParams } from 'react-router-dom';
import Display from '../Components/Display/Display'; 
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';
const Product = () => { 
  const {all_product}=useContext(ShopContext); 
  const {productId}=useParams();  
  // console.log("Jai shree krisha " + productId);
  const product =all_product.find((e)=> e.id === Number(productId));
  //  console.log("isha jindal id is " +  product.name + product.id);
  return (
    <div> 
      <BreadCrum product={product}></BreadCrum> 
      <Display product={product}></Display> 
      <RelatedProduct></RelatedProduct>
    </div>
  )
}

export default Product
