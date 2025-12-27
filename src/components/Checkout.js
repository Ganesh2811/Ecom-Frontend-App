import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
export default function Checkout() {
    // let history = useHistory();
        var x1 = useRef();
    var x2 = useRef();
    var x3 = useRef();
    var x4 = useRef();
    var x5 = useRef();
    var x6 = useRef();
    let result = useSelector(state=>state.cart.value);
    // console.log(result);
    
    var total = result.reduce(function (acc, obj) { return acc + (obj.price - (obj.price*obj.discount/100)); }, 0);


    function myFunc(ev){
        ev.preventDefault();
        // console.log(ev)
        var dataSet = {
            firstname:x1.current.value,
            lastname:x2.current.value,
            phone:x3.current.value,
            email:x4.current.value,
            amount:x5.current.value,
            productinfo:x6.current.value
        }

        // console.log(dataSet);

        fetch(process.env.REACT_APP_API + '/payment', {
            method: 'POST',
            body: JSON.stringify(dataSet),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            if(val['status']){
                // console.log(val['url']);
                window.location.href= val['url'];
            }
        })
        
    }
    return (
    <section id="cart_items" className='container'>
            <div class="container">
                <div class="breadcrumbs">
                    <ol class="breadcrumb">
                      <li><a href="#">Home</a></li>
                      <li class="active">Shopping Cart</li>
                    </ol>
                </div>
                <div class="table-responsive cart_info">
                    <table class="table table-condensed">
                        <thead>
                            <tr class="cart_menu">
                                <td class="image">Item</td>
                                <td class="description">Name</td>
                                <td class="price">Price</td>
                                <td class="quantity">Discount</td>
                                <td class="total">Total</td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
    
    
    result && result.length > 0 && result.map( val=> 
       
        <tr>
                                <td class="cart_product">
                                    <a href=""><img width="150" height="150" src={process.env.REACT_APP_API + "/uploads/" + val.filepath} alt="" /></a>
                                </td>
                                <td class="cart_description">
                                    <h4><a href="">{val.name}</a></h4>
                                    
                                </td>
                                <td class="cart_price">
                                    <p>{val.price}</p>
                                </td>
                                <td class="cart_quantity">
                                    <p>{val.discount}%</p>
                                </td>
                                <td class="cart_total">
                                    <p class="cart_total_price">
                                        {val.price - (val.price * val.discount/100)}
                                    </p>
                                </td>
                               
                            </tr>

                            
    
    )

    
                            }
                            
    
                            
                        </tbody>
                    </table>
                    
                </div>

                <form onSubmit={myFunc}>
                    
                    <input ref={x1} type='text' name="firstname" placeholder='FirtName' className='form-control' /><br />
                    <input ref={x2} type='text' name="lastname"  placeholder='LastName' className='form-control' /><br />
                    <input ref={x3} type='text' name="phone"  placeholder='Mobile' className='form-control' /><br />
                    <input ref={x4} type='text' name="email" placeholder='EMail' className='form-control' /><br />
                    <input ref={x5} type='text' name="amount" defaultValue={total} key={total} placeholder='Amount' className='form-control' /><br />
                    <textarea ref={x6}  name="productinfo" className='form-control' placeholder='Description'></textarea><br />
                    <button className='btn btn-dark'>Pay</button>
                </form>
            </div>
        </section>
  )
}
