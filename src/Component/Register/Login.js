import { Row, Col, Container } from "react-bootstrap";
import React, { Fragment } from "react";
import "./Register.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Login = () => {
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
                  <input type='text' className='input-res' placeholder='Password' />
                </div>
                <div className='btn-p'>
                  <Button className='Button-Login'>Log In</Button>
                  <p>Lupa Password?</p>
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
