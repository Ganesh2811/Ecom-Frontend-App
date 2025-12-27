import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { replaceCart } from '../redux/slices/cartSlice';
import { sendTokenData } from '../redux/slices/tokenSlice';
import { jwtDecode } from "jwt-decode";

export default function App() {

  let dispatch = useDispatch();
  useEffect(()=>{

    var cartRecord = localStorage.getItem('cart');
    console.log(cartRecord);
    

    //eshoppertoken
    var tokenValue = localStorage.getItem('eshoppertoken');
    console.log(tokenValue,"app.js");
    
    if(cartRecord!==null){
      cartRecord = JSON.parse(cartRecord);
      dispatch(replaceCart(cartRecord));
    }

    if(tokenValue!==null){
      const decoded = jwtDecode(tokenValue);
      
        console.log(decoded);
        dispatch(sendTokenData({token:tokenValue , username:decoded.name}));
    }
  },[]);

  return (
    <>
        <ToastContainer />
        <Header/>
        <Outlet />
        <Footer/>
    </>
  )
}
