import React, { useState,useContext , useRef} from 'react'
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css'; 
import logo from '../Assets/logo1.jpg';
import cart from '../Assets/cart_icon.png'; 
import navdropDown from '../Assets/dropdown_icon.png';
import { ShopContext } from '../../Context/ShopContext'; 
const Navbar = () => { 
  const [curr_menu,setMenu]=useState("shop");
  const {countItems}=useContext(ShopContext); 
  const menuRef=useRef();

  const dropDown=(e)=>{
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'> 
      <div className="nav-logo">
        <img src={logo} alt="Logo :)" srcSet="" /> 
        <p>Shopify</p>
      </div>  
      <img className="nav-dropDown" onClick={dropDown} src={navdropDown} alt="" />
      <ul ref={menuRef} className="list-items">
         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: "none",  color:"#626262"}} to="/">Shop</Link>{curr_menu==="shop"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: "none" , color:"#626262"}}  to="/men">Men</Link>{curr_menu==="men"?<hr/>:<></>}</li>
         <li onClick={()=>setMenu("women")}><Link style={{textDecoration: "none" , color:"#626262"}} to="/women">Women</Link>{curr_menu==="women"?<hr/>:<></>}</li>
         <li onClick={()=>setMenu("kids")}><Link style={{textDecoration: "none" , color:"#626262"}} to="/kid">Kids</Link>{curr_menu==="kids"?<hr/>:<></>}</li>
         <li onClick={()=>setMenu("beauty")}><Link style={{textDecoration: "none" , color:"#626262"}}  to="/beauty">Beauty</Link>{curr_menu==="beauty"?<hr/>:<></>}</li>
      </ul> 
      <div className="nav-login-cart"> 
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace("/")}} style={{textDecoration: "none" , color:"#626262"}}>Logout</button>:<button onClick={()=>setMenu("login")}><Link style={{textDecoration: "none" , color:"#626262"}} to="/login">Login</Link></button>}
        {/* <button onClick={()=>setMenu("login")}><Link style={{textDecoration: "none" , color:"#626262"}} to="/login">Login</Link></button> */}
        <Link  to="/cart"><img onClick={()=>setMenu("cart")} src={cart} alt="Cart :)" srcSet=""></img></Link>
         <div className="nav-cart-count">{countItems()}</div>
      </div>
    </div>
  )
}
// src={cart} alt="Cart :)" srcSet="" //
export default Navbar
