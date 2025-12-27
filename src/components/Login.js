import React, { useEffect } from 'react'
import Loginform from './Loginform'
import Registerform from './Registerform'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Login() {

	
	let navigate = useNavigate();
	useEffect(()=>{
		
		// console.log('login called');
		var resultToken = localStorage.getItem('eshoppertoken');
		// console.log(resultToken,"===-===-===");
		
		if(resultToken!==null ){
			navigate("/");
		}
	},[]);

  return (
    <section id="form" className='container'>
		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-sm-offset-1">
					<div class="login-form">
						<h2>Login to your account</h2>
						<Loginform />
					</div>
				</div>
				<div class="col-sm-1">
					<h2 class="or">OR</h2>
				</div>
				<div class="col-sm-4">
					<div class="signup-form">
						<h2>New User Signup!</h2>
						<Registerform />
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}
