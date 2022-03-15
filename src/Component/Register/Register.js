import { Row, Col } from "react-bootstrap";
import React from "react";
import "./Register.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='body'>
      <Row className='body-register'>
        <Col md={5} className='left-col'>
          <div className='pembungkus-image-left'>
            <img src='./letters-paperplanes-messages-by-oblik-studio.png' className='image-left' />
          </div>
        </Col>
        <Col className='right-col'>
          <Link to='/'>
            <h4 className='h-4'>
              <i class='fa-solid fa-chevron-left'></i>
              &ensp; Kembali
            </h4>
          </Link>
          <div className='main-register'>
            <div className='pembungkus-input'>
              <div className='teks-Register'>
                <Link to='/login'>
                  <h1>Login</h1>
                </Link>
                &ensp; &ensp; &ensp;
                <Link to='/'>
                  <h1>Register</h1>
                </Link>
              </div>
              <div className='input-text'>
                <p>Masukkan Nama: </p>
                <input type='text' className='input-res' placeholder='Nama' />
              </div>
              <div className='input-text'>
                <p>Masukkan Email:</p>
                <input type='text' className='input-res' placeholder='Email' />
              </div>
              <div className='input-text'>
                <p>Masukkan Np. Telepon:</p>
                <input type='text' className='input-res' placeholder='No. Telepon' />
              </div>
              <div className='input-text'>
                <p>Masukkan Password:</p>
                <input type='text' className='input-res' placeholder='Password' />
              </div>
              <div className='btn-p block'>
                <Button className='Button-Login'>Register</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
