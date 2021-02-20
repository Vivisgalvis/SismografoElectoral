import React from 'react';
import logo from '../img/logo-blanco.svg';
import './Login.css'

function Login () {

  return (
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-34">
						Iniciar sesión
					</span>
					
					<div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
						<input id="first-name" className="input100" type="text" name="username" placeholder="Correo" />
						<span className="focus-input100"></span>
					</div>
					<div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
						<input className="input100" type="password" name="pass" placeholder="Contraseña" />
						<span className="focus-input100"></span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Iniciar sesión
						</button>
					</div>

					<div className="login-form-btn">
						<button className="login-gmail">
							Ingresar con gmail
						</button>
					</div>

					<div className="w-full text-center p-t-27 p-b-239">
						<span className="txt1">
							Olvidé
						</span>

						<a href="#" className="txt2">
							mi contraseña
						</a>
					</div>

					<div className="w-full text-center">
						<a href="#" className="txt3">
							Registrarme
						</a>
					</div>
				</form>

				<div className="login100-more">
				<img src={logo} />
			</div>
		</div>
	</div>
	</div>
	
  );
}

export default Login;
