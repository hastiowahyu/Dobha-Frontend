import { Row, Col, Container } from "react-bootstrap";
import React, { Fragment } from "react";
import "./Register.css";
import { IoChevronBackSharp } from "react-icons/io5";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Register from "./Register";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
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
              <IoChevronBackSharp
                className='icon'
                style={{
                  top: "15px",
                  right: "15px",
                }}
                size='40px'
                color='rgb(182, 112, 0)'
              />
              Kembali
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
                  <Button className='Button-Login'>Register</Button>
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
