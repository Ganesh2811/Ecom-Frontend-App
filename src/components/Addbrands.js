import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import * as Yup from "yup";
import { toast } from "react-toastify";
import useBeforelogin from "../utilities/useBeforelogin";
import { sendTokenData } from "../redux/slices/tokenSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Addbrand() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useBeforelogin();

  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Must be 2 characters or more")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting,resetForm }) => {
        var record = JSON.stringify(values);
        console.log(record);

        fetch(process.env.REACT_APP_API + "/brand", {
          method: "POST",
          body: record,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((value) => {
            // console.log(value);
            // console.log(value.message);
            if(value['status']==401){
              localStorage.removeItem('eshoppertoken');
              dispatch(sendTokenData(''));
              navigate("/login");
            } 
            resetForm();
            toast.success(value.message);
          });
      }}
    >
      <div class="container">
        <div class="col-sm-12 col-sm-offset-1">
          <div class="login-form">
            <h2>Add Brand</h2>
            <Form>
              <Field name="name" type="text" placeholder="Brand Name" />

              <ErrorMessage name="name" />

              <button type="submit">Submit</button>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
}
