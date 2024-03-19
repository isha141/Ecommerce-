import React, { createContext, useState,useEffect } from 'react'
import all_product from '../Components/Assets/all_product';
// import ShopCategory from '../Pages/ShopCategory';

export const ShopContext=createContext(null);   
const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    } 
    return cart;
}
const ShopContextProvider=(props)=>{ 
    // console.log(location);
    const [getcart,setCart]=useState(getDefaultCart()); 
    // const [all_product,setAllProduct]=useState([]); 

    

    const addToCart =(itemId)=>{        // add items in a cart 
         setCart((prev)=>({...prev,[itemId]:prev[itemId]+1})); 
         if(localStorage.getItem('auth-token')){
          fetch ('http://localhost:4000/addToCart',{
            method:'POST',
            headers:{
               Accept:'application/form-data',
              'auth-token':`${localStorage.getItem('auth-token')}`,
              'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId})
          })
          .then((response)=>response.json)
          .then((data)=>console.log(data));
         }
    }
    useEffect(()=>{
          fetch('http://localhost:4000/allproducts')
         .then((Response)=>Response.json())
         .then((data)=>setCart(data)) 
         if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers: {
                  Accept:'application/json',
                  'auth-token':`${localStorage.getItem('auth-token')}`,
                  'Content-Type':'application/json',
                },
                body:""
            }).then((response)=>response.json())
            .then((data)=>setCart(data))
         } 
    },[])
    
    // console.log(getcart);
    const RemoveFromCart =(itemId)=>{        // add items in a cart 
         setCart((prev)=>({...prev,[itemId]:prev[itemId]-1}));
         if(localStorage.getItem('auth-token')){
            fetch ('http://localhost:4000/removefromcart',{
            method:'POST',
            headers:{
               Accept:'application/form-data',
              'auth-token':`${localStorage.getItem('auth-token')}`,
              'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId})
            })
          .then((response)=>response.json)
          .then((data)=>console.log(data));
           }
    } 

    const GetTotalCartAmount=()=>{
       let total=0;
       for(const items in getcart){ 
          
          if(getcart[items]>0){
          let price=all_product.find((product)=> Number(items)===Number(product.id));
          total+=(getcart[items]*price.new_price);
          }
       } 
       return total;
    } 
    const countItems=()=>{
      let total=0;
      for(let i=0;i<301;++i){ 
          if(getcart[i]>0)
          total+=getcart[i];
       } 
    //    console.log(total); 
       return total;
    }
    const ContextValue = {all_product,getcart,addToCart,RemoveFromCart,GetTotalCartAmount,countItems};  
    return(  
    <ShopContext.Provider value={ContextValue}>
        {props.children}
    </ShopContext.Provider>
    )
}
export default ShopContextProvider;
// export default NewCollectionProvider;


