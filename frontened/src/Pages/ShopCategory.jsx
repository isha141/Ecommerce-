import React ,{useContext} from 'react'
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext'; 
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Items from '../Components/Items/Items';
// import all_product from '../Components/Assets/all_product';
const ShopCategory = (props) => { 
  const {all_product}=useContext(ShopContext);
  return (
    <div className="shopCategory">
       <img  className="shopCategoryBanner" src={props.banner} alt="" srcset="" />
       <div className="shop-category-indexSort">
         <p>
           <span>Showing 1-12</span> out of 10000 products 
         </p>
         <div className="shop-category-sort">
           Sort by <img src={dropdown_icon} alt="" srcset="" />
         </div>
       </div> 
       <div className="shop-category-Products"> 
         {/* console.log(all_product); */}
          {all_product && all_product.map((prod,i) => 
        (  
        props.category===prod.category?  
        <Items key={i} id={prod.id} name={prod.name} image={prod.image} old_price={prod.old_price} new_price={prod.new_price} /> :
        <></>
        )
         )} 
       </div>
      <div className="loadmore">
        Explore More  
      </div>
    </div> 
    
  )
}

export default ShopCategory
