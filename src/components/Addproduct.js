import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import * as Yup from "yup";
import { toast } from "react-toastify";
import useBeforelogin from "../utilities/useBeforelogin";
export default function Addproduct() {

  useBeforelogin();

  var [cat, setCat] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_API + "/category")
      .then((res) => res.json())
      .then((val) => {
        // console.log(val);
        // console.log(val.data);
        setCat(val.data);
      });
  }, []);

  var [brand, setBrand] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_API + "/brand")
      .then((res) => res.json())
      .then((val) => {
        // console.log(val);
        // console.log(val.data);
        setBrand(val.data);
      });
  }, []);

  return (
    <Formik
      initialValues={{
        name: "",
        price: "",
        discount: "",
        categoryid: "",
        brandid: "",
        productimage: "",
        description: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Must be 2 characters or more")
          .required("Required"),
        price: Yup.string().required("Required"),
        discount: Yup.string().required("Required"),
        categoryid: Yup.string().required("Required"),
        brandid: Yup.string().required("Required"),
        productimage: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);

        var formRec = new FormData();

        var file = document.getElementById("file");
        console.log(file.files[0]);

        formRec.append("filepath", file.files[0]);
        formRec.append("name", values.name);
        formRec.append("price", values.price);
        formRec.append("discount", values.discount);
        formRec.append("categoryid", values.categoryid);
        formRec.append("brandid", values.brandid);
        formRec.append("description", values.description);

        fetch(process.env.REACT_APP_API + "/product", {
          method: "POST",
          body: formRec,
          
        })
          .then((res) => res.json())
          .then((value) => {
            console.log(value);
            // // console.log(value.message);
            // resetForm();
            // toast.success(value.message);
          });
      }}
    >
      <div class="container">
        <div class="col-sm-12 col-sm-offset-1">
          <div class="login-form">
            <h2>Add Product</h2>
            <Form id="form">
              <Field name="name" type="text" placeholder="Product Name" />
              <ErrorMessage name="name" />
              <Field name="price" type="text" placeholder="Product Price" />
              <ErrorMessage name="price" />
              <Field
                name="discount"
                type="number"
                placeholder="Product Discount"
              />
              <ErrorMessage name="discount" />
              <Field as="select" name="categoryid">
                <option value="">Please Select Category</option>

                {cat &&
                  cat.map((value) => (
                    <option value={value._id}>{value.name}</option>
                  ))}
              </Field>
              <ErrorMessage name="categoryid" /> <br />
              <br />
              <Field as="select" name="brandid">
                <option value="">Please Select Brand</option>
                {brand &&
                  brand.map((value) => (
                    <option value={value._id}>{value.name}</option>
                  ))}
              </Field>
              <ErrorMessage name="brandid" /> <br />
              <br />
              <Field name="productimage" id="file" type="file" />
              <ErrorMessage name="productimage" />
              <Field as="textarea" name="description" />
              <ErrorMessage name="description" />
              <button type="submit">Submit</button>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
}
