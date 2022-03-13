import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <main>
      <div className='col-12 col-lg-3 offset-lg-9 panel h-100 py-5'>
        <div className='card'>
          <h1 className='card-title text-center mb-4'>Log In</h1>
          <form action='#' method='POST' className='card-body'>
            <div className='form-group'>
              <input type='email' name='email' id='email' className='form-control' placeholder='Masukan Email' required='' />
            </div>
            <div className='form-group'>
              <input type='password' name='password' id='password' className='form-control' placeholder='Masukan Password' required='' />
            </div>
            <div className='form-group text-center pt-4'>
              <input type='submit' defaultValue='Iniciar sesión' className='btn btn-primary w-100' />
            </div>
          </form>
          <div className='card-body'>
            <p className='text-center'>
              Tidak Punya Akun?{" "}
              <a href='#' id='registrate'>
                Registrasi Disini
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
