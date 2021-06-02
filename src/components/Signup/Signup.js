import React from 'react';

import { Link } from 'react-router-dom';

import './signup.css';


const Signup =()=> {
  return (
    <Link to="/signup" className="signup">Регистрация</Link>
  )
}

export default Signup;