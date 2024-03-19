import React, { useState } from 'react'
import './CSS/LoginSignUp.css';

const LoginSignUp = () => {

  const [login,setlogin]=useState("Login"); 
  const [FormData,SetFormData]=useState({
      username:"",
      password:"",
      email:"", 
  });
  const changeHandler=(e)=>{
        SetFormData({...FormData,[e.target.name]:e.target.value})   
  }

  const UserLogin=async()=>{
      console.log("Login Function Executed",FormData);
      let ResponseData;
      await fetch('http://localhost:4000/login',{
           method:'POST',
           headers:{
              Accept:'application/form-data',
              'Content-Type':'application/json',
           },
           body:JSON.stringify(FormData)
      }).then((response)=>response.json()).then((data)=>ResponseData=data)
      if(ResponseData.success){
        localStorage.setItem('auth-token',ResponseData.token);
        window.location.replace("/");
      }
      else{
        alert("Wrong Password  ");
      }
  }
  const UserSignUp=async()=>{
      console.log("SignUp Function Executed",FormData); 
      let ResponseData;
      await fetch('http://localhost:4000/signup',{
           method:'POST',
           headers:{
              Accept:'application/form-data',
              'Content-Type':'application/json',
           },
           body:JSON.stringify(FormData)
      }).then((response)=>response.json()).then((data)=>ResponseData=data)
      if(ResponseData.success){
        localStorage.setItem('auth-token',ResponseData.token);
        window.location.replace("/");
      }
      else{
        alert("Existing User found with the same Email Address ");
      }
  }

  return (
    <div className='loginSignUp'>
      <div className="loginSignUpcontainer">
          <h1>{login}</h1>
          <div className="login-signUp-feilds">
             {login==="SignUp"?<input type="text" name="username" value={FormData.username} onChange={changeHandler} placeholder='Your Name' />:""}
             <input type="email"  name="email" value={FormData.email} onChange={changeHandler} placeholder='Email Address' />
              <input type="password" name="password" value={FormData.password} onChange={changeHandler} placeholder='Password'/>
          </div>   
          <button onClick={login==='Login'?UserLogin:UserSignUp}>Continue</button>  
          {login==="SignUp"?<p className="loginSignUp-login">Already have an account? <span onClick={()=>setlogin("Login")}>Login Here</span></p>:""}
          {login==="Login"?<p className="loginSignUp-login">Create an Account <span onClick={()=>setlogin("SignUp")}>Sign Up</span></p>:""}   
          {login==="SignUp"?<div className="loginSignUp-agree">
           <input type="checkbox" name='' id=''/>
           <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>:""}
      </div>
    </div>
  )
}

export default LoginSignUp
