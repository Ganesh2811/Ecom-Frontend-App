import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { sendTokenData } from '../redux/slices/tokenSlice';

export default function Header() {

	let {token,username} = useSelector(state=>state.tokenTransfer.value);
	console.log(token,username,"====");
	
	let cartrecord = useSelector(state=>state.cart.value);

	let dispatch = useDispatch();
	// let navigate = useNavigate();
	function logout(){
		localStorage.removeItem('eshoppertoken');
		dispatch(sendTokenData(''));
		
	}
  return (
    <header id="header">
		<div class="header_top">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<div class="contactinfo">
							<ul class="nav nav-pills">
								<li><a href="#"><i class="fa fa-phone"></i> +2 95 01 88 821</a></li>
								<li><a href="#"><i class="fa fa-envelope"></i> info@domain.com</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="social-icons pull-right">
							<ul class="nav navbar-nav">
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="header-middle">
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<div class="logo pull-left">
							<a href="index.html"><img src="images/home/logo.png" alt="" /></a>
						</div>
						<div class="btn-group pull-right">
							<div class="btn-group">
								<button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									USA
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu">
									<li><a href="#">Canada</a></li>
									<li><a href="#">UK</a></li>
								</ul>
							</div>
							
							<div class="btn-group">
								<button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									DOLLAR
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu">
									<li><a href="#">Canadian Dollar</a></li>
									<li><a href="#">Pound</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-sm-8">
						<div class="shop-menu pull-right">
							<ul class="nav navbar-nav">
							
								<li><Link to="/"><i class="fa fa-crosshairs"></i> Home</Link></li>
								<li><Link to="/cart"><i class="fa fa-shopping-cart"></i> Cart ({cartrecord.length})</Link></li>
							
{
	token && token.length>0 && (
		<>
			<li><Link to="/add-category"><i class="fa fa-lock"></i> Add Category</Link></li>
			<li><Link to="/add-brand"><i class="fa fa-lock"></i> Add Brand</Link></li>
			<li><Link to="/add-product"><i class="fa fa-lock"></i> Add Product</Link></li>
			<li><Link to="/password"><i class="fa fa-lock"></i> Change Password</Link></li>
			<li><Link to="/login" onClick={logout}><i class="fa fa-lock"></i> Logout ({username})</Link></li>
		</>
	)
}
{
	token === undefined && (
		<>
			<li><Link to="/login"><i class="fa fa-lock"></i> Login</Link></li>
		</>
	)
}

								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<div class="header-bottom">
			<div class="container">
				<div class="row">
					<div class="col-sm-9">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						<div class="mainmenu pull-left">
							<ul class="nav navbar-nav collapse navbar-collapse">
								<li><a href="index.html" class="active">Home</a></li>
								<li class="dropdown"><a href="#">Shop<i class="fa fa-angle-down"></i></a>
                                    <ul role="menu" class="sub-menu">
                                        <li><Link to="/class1">Class 1</Link></li>
										<li><Link to="/class2">Class 2</Link></li>
										<li><Link to="/class3">Class 3</Link></li>
										<li><Link to="/class4">Class 4</Link></li>
										<li><Link to="/class5">Class 5</Link></li>
										<li><Link to="/class6">Class 6</Link></li>
										<li><Link to="/class7">Class 7</Link></li>
										<li><Link to="/showuser">Show</Link></li>
										<li><Link to="/adduser">Add</Link></li>
										<li><Link to="/memo">Memo</Link></li>
										<li><Link to="/pure">Pure</Link></li>
										<li><Link to="/comp1">comp1</Link></li>
										<li><Link to="/comp2">comp2</Link></li>
										<li><Link to="/comp3">comp3</Link></li>
										<li><Link to="/comp4">comp4</Link></li>
										<li><a href="product-details.html">Product Details</a></li> 
										<li><a href="checkout.html">Checkout</a></li> 
										<li><a href="cart.html">Cart</a></li> 
										<li><a href="login.html">Login</a></li> 
                                    </ul>
                                </li> 
								<li class="dropdown"><a href="#">Blog<i class="fa fa-angle-down"></i></a>
                                    <ul role="menu" class="sub-menu">
                                        <li><a href="blog.html">Blog List</a></li>
										<li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li> 
								<li><a href="404.html">404</a></li>
								<li><a href="contact-us.html">Contact</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="search_box pull-right">
							<input type="text" placeholder="Search"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	
  )
}
