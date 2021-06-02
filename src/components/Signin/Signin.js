import React from 'react';

import {Link} from 'react-router-dom';

import './signin.css';


const Signin =()=> {
  return (
    <Link to="/signin" className="signin">Войти</Link>
  )
}

export default Signin;