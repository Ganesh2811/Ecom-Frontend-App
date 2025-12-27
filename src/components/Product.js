import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Product() {
  var [product, setProduct] = useState([]);

  var categoryId = useSelector(state=>state.dataTransfer.value);
  useEffect(() => {
    if(categoryId == ""){
      var api = process.env.REACT_APP_API + "/product";
    }
    else{
      var api = process.env.REACT_APP_API + "/product/category/"+categoryId;
    }
    fetch(api)
      .then((res) => res.json())
      .then((val) => {
        // console.log(val);
        console.log(val.data);
        setProduct(val.data);
      });
  }, [categoryId]);

  return (
    <div class="features_items">
      <h2 class="title text-center">Features Items</h2>
      {product &&
        product.map(({ name, _id, price, discount, filepath }) => (
          <div class="col-sm-4">
            <div class="product-image-wrapper">
              <div class="single-products">
                <div class="productinfo text-center">
                  <img
                    src={process.env.REACT_APP_API + "/uploads/" + filepath}
                    alt=""
                  />
                  <h2>
                    <s>{price}</s> {price - (price * discount) / 100}
                  </h2>
                  <p>{name}</p>
                  <p>{filepath}</p>
                  <a href="#" class="btn btn-default add-to-cart">
                    <i class="fa fa-shopping-cart"></i>Add to cart
                  </a>
                </div>
                <div class="product-overlay">
                  <div class="overlay-content">
                    <h2>
                      <s>{price}</s> {price - (price * discount) / 100}
                    </h2>
                    <p>
                      <Link to={"/singleProduct/" + _id}>{name}</Link>
                    </p>

                    <a href="#" class="btn btn-default add-to-cart">
                      <i class="fa fa-shopping-cart"></i>Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div class="choose">
                <ul class="nav nav-pills nav-justified">
                  <li>
                    <a href="#">
                      <i class="fa fa-plus-square"></i>Add to wishlist
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-plus-square"></i>Add to compare
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
