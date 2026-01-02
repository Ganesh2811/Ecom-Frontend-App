import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';

 import * as Yup from 'yup';
 import { ToastContainer, toast } from 'react-toastify';
export default function Registerform() {


  
  return (
    <Formik
      initialValues={{ email: "", password: "", name:"",mobile:"",confirmpassword:"" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        mobile: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
        .min(4, "Must be 4 characters or more")
        .max(8, "Must be 8 characters or less")
        .required("Required"),
        confirmpassword:Yup.string().required("Required")
      })}
      onSubmit={(values, { setSubmitting,resetForm }) => {
        console.log("cliked !!");
        
        var record = JSON.stringify(values);
        // console.log(record);
        // console.log(process.env.REACT_APP_API);
        // console.log(process.env.REACT_APP_API+"/users/new-user");

        fetch(process.env.REACT_APP_API+"/users/new-user" , {
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
          resetForm();
          toast.success(value.message);
        })
        
      }}
    >
      <Form>
        <Field name="name" type="text" placeholder="Name" />

        <ErrorMessage name="name" />

        <Field name="mobile" type="text" placeholder="Mobile" />

        <ErrorMessage name="email" />

        <Field name="email" type="email" placeholder="Email" />

        <ErrorMessage name="email" />

        <Field name="password" type="password" placeholder="password" />

        <ErrorMessage name="password" />

        <Field name="confirmpassword" type="password" placeholder="Confirm password" />

        <ErrorMessage name="confirmpassword" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
