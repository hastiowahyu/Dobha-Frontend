import { Row, Col } from "react-bootstrap";
import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import FormInput from "./FormInput";

const Register = () => {
  const [showPassword, SetshowPassword] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Nama",
      type: "text",
      placeholder: "Username",
      errorMessage: "Nama pengguna harus terdiri dari 3-16 karakter dan tidak boleh menyertakan karakter khusus apa pun!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Harus Menggunakan Email Yang Benar!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "Number Phone",
      errorMessage: "Isi Nomor Handphone Menggunakan Angka 1 s.d 10",
      label: "Number Phone",
      pattern: "^[0-9]{10,12}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Kata sandi harus 8-20 karakter dan menyertakan setidaknya 1 huruf, 1 angka, dan 1 karakter khusus!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords Harus Sama!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
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
              <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                  <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                <div>
                  <button className='Button-Login-Register'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
