
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function useBeforelogin(){
    let navigate = useNavigate();
        useEffect(()=>{
          
          // console.log('login called');
          var resultToken = localStorage.getItem('eshoppertoken');
          // console.log(resultToken,"===-===-===");
          
          if(resultToken===null ){
            navigate("/login");
          }

          fetch(process.env.REACT_APP_API + "/checkToken", {
              method:'get',
              headers: {
                "Authorization": resultToken,
              },
            })
              .then((res) => res.json())
              .then((value) => {
                console.log(value);
                console.log(value['status']);
                
                if(value['status']==401){
                  localStorage.removeItem('eshoppertoken');
                  navigate("/login");
                } 
              });


        },[]);
    
}

export default useBeforelogin;