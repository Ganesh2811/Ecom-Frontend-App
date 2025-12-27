import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {

	let result = useSelector(state=>state.cart.value);

	let dispatch = useDispatch();
	function deleteRecord(ev,val){
		ev.preventDefault();
		console.log(val);

		var localData = localStorage.getItem('cart');
		localData = JSON.parse(localData);
		console.log(localData , localData.length);
		
		if(localData.length > 1){
			var result = localData.filter(obj=> obj._id != val._id)
			console.log(result);
			
			var finalData = JSON.stringify(result);
			localStorage.setItem('cart',finalData);

			dispatch(removeCart(result));
		}
		else{
			localStorage.removeItem('cart');
			dispatch(removeCart([]));
		}
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
							<td></td>
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
							<td class="cart_delete">
								<a onClick={(ev)=>{deleteRecord(ev,val)}} class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
							</td>
						</tr>

)
						}
						

						
					</tbody>
				</table>
			</div>
			
			<Link to="/checkout-page">Checkout Page</Link>

		</div>
	</section>
  )
}
