import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Password() {

    let navigate = useNavigate();
    useEffect(()=>{

        var tokenValue = localStorage.getItem('eshoppertoken');

        if(tokenValue === null || tokenValue == ''){
            localStorage.removeItem('eshoppertoken');
            navigate("/login")
        }

    },[]);

  return (
    <div>Password</div>
  )
}
