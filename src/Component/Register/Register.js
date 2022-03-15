import { Row, Col, Container } from "react-bootstrap";
import React, { Fragment } from "react";
import "./Register.css";
import { IoChevronBackSharp } from "react-icons/io5";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Row className='body-register'>
        <Col md={5} className='left-col'>
          <div className='pembungkus-image-left'>
            <img src='./letters-paperplanes-messages-by-oblik-studio.png' className='image-left' />
          </div>
        </Col>
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
