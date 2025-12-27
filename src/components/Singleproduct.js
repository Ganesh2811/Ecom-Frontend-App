import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addCart } from '../redux/slices/cartSlice';

export default function Singleproduct() {

    let {proid} = useParams();
    let[data,setData] = useState({});
    useEffect(()=>{
        console.log(proid);
        fetch(process.env.REACT_APP_API + "/product/" +proid )
        .then(res=>res.json())
        .then(val=>{
            // console.log(val);
            console.log(val.data);
            setData(val.data);
        })
    },[proid])

    
  let dispatch = useDispatch();
  let navigate = useNavigate();

    function myfunc(data){
        // console.log(data);

        var cartitem = localStorage.getItem('cart');
        console.log(cartitem);

        if(cartitem === null){
            var arr = [];
            arr.push(data);
            arr = JSON.stringify(arr);
            localStorage.setItem('cart',arr);
            dispatch(addCart(data));
            navigate("/cart");
        }
        else{
            var record = JSON.parse(cartitem);
            console.log(record);
            var ansFilter = record.filter(val=> val._id == data._id );
            // console.log(ansFilter);
            if(ansFilter.length > 0) {
                alert('exist');
                navigate("/cart");
            }
            else{
                
                record.push(data)
                console.log(record);
                
                record = JSON.stringify(record);
                localStorage.setItem('cart',record);
                dispatch(addCart(data));
                navigate("/cart");
            }

            
            
        }
        
        // dispatch(addCart(data));

        
       
        // navigate("/cart");
    }

  return (

    <>
        {
            data && Object.keys(data).length>0 && (
                
            <div className='container'>
            <div class="product-details">
                            <div class="col-sm-5">
                                <div class="view-product">
                                    <img src={process.env.REACT_APP_API+"/uploads/"+data.filepath} alt="" />
                                </div>
                              
    
                            </div>
                            <div class="col-sm-7">
                                <div class="product-information">
                                    <img src="images/product-details/new.jpg" class="newarrival" alt="" />
                                    <h2>{data.name}</h2>
                                    <p>Web ID: 1089772</p>
                                    <img src="images/product-details/rating.png" alt="" />
                                    <span>
                                        <span>INR {data.price}</span>
                                        <label>Discount:</label>
                                        <i>{data.discount}%</i>
                                        <button onClick={()=>{myfunc(data)}} type="button" class="btn btn-fefault cart">
                                            <i class="fa fa-shopping-cart"></i>
                                            Add to cart
                                        </button>
                                    </span>
                                    <p><b>Final Price:</b> {data.price - data.price*data.discount/100}</p>
                                    
                                    <p><b>Brand:</b> E-SHOPPER</p>
                                    <p><b>Category:</b> E-SHOPPER</p>
                                    <h3>Product Info:</h3>
                                    <p>
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        </div>
        </div>
            )
        }
    </>
    
  )
}
