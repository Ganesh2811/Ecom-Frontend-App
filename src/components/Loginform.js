import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

 import * as Yup from 'yup';
 import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { sendTokenData } from '../redux/slices/tokenSlice';
import { jwtDecode } from "jwt-decode";
 
export default function Loginform() {

  const dispatch = useDispatch()

  var[errmsg , setErrmsg] = useState("");

  const navigate = useNavigate();
  return (
    <Formik
    
           initialValues={{ email: '', password: '' }}
    
           validationSchema={Yup.object({
    
             email: Yup.string().email('Invalid email address').required('Required'),
             password: Yup.string()
             .min(4, 'Must be 4 characters or more')
             .max(8, 'Must be 8 characters or less')
    
             .required('Required'),
    
           })}
    
           onSubmit={(values, { setSubmitting,resetForm  }) => {
    
             var record = JSON.stringify(values);
            // console.log(record);
            
            fetch(process.env.REACT_APP_API+"/users/login" , {
                      method: "POST",
                      body:record,
                      headers:{
                        'Content-Type': 'application/json'
                      }
                    })
                    .then(res=>res.json())
                    .then(value=>{
                      console.log(value);
                      console.log(value.message);

                      if(value.status == 200 && value.message=="Success"){
                        setErrmsg('');

                        localStorage.setItem('eshoppertoken' ,value.token );
                        const decoded = jwtDecode(value.token);

                        console.log(decoded);
                        dispatch(sendTokenData({token:value.token , username:decoded.name}));
                        navigate('/');
                      }
                      else{
                        setErrmsg( value.message);
                      }
                      resetForm();
                      toast.success(value.message);
                    })
           }}
    
         >
       
                            <Form>
    
    
                                <Field name="email" type="email" placeholder="Email"/>
    
                                <ErrorMessage name="email" />
    
                        
    
    
                                <Field name="password" type="password" placeholder="password" />
    
                                <ErrorMessage name="password" />
    
                        
    
                                <button type="submit">Submit</button>
                                {errmsg}
                            </Form>

                           
                       
        </Formik>
  )
}
