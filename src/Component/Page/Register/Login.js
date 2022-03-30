import { Row, Col, Container } from "react-bootstrap";
import React, { Fragment } from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [showPassword, SetshowPassword] = useState(false);

  return (
    <div className='body'>
      {" "}
      <>
        <Row className='body-register'>
          {/* kiri */}
          <Col md={5} className='left-col'>
            <div className='pembungkus-image-left'>
              <img src='./letters-paperplanes-messages-by-oblik-studio.png' className='image-left' />
            </div>
          </Col>
          {/* kanan */}
          <Col className='right-col'>
            <h4 className='h-4'>
              <i class='fa-solid fa-chevron-left'></i>
              &ensp; Kembali
            </h4>
            <Container className='main-register'>
              <div className='pembungkus-input'>
                <div className='teks-Register'>
                  <Link to='/login'>
                    <h1>Login</h1>
                  </Link>
                  &ensp; &ensp; &ensp;
                  <a href='/'>
                    <h1>Register</h1>
                  </a>
                </div>
                <div className='input-text'>
                  <p>Masukan Email:</p>
                  <input type='text' className='input-res' placeholder='Email' />
                </div>
                <div className='input-text'>
                  <p>Masukkan Password:</p>
                  <input type={showPassword ? "text" : "password"} className='from-control input-res' placeholder='Password' id='number' />
                  <button className='Button-show-password' onClick={() => SetshowPassword(!showPassword)}>
                    {showPassword ? <i className='fa-solid fa-eye-slash' /> : <i className='fa-solid fa-eye' />}
                  </button>
                </div>
                <div className='btn-p'>
                  <Button className='Button-Login'>Log In</Button>
                  <p>
                    <a href='/'>Lupa Password?</a>
                  </p>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </>
    </div>
  );
};

export default Login;
