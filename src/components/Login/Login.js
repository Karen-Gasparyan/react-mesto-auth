import React from 'react';

import AuthForm from '../AuthForm/AuthForm';

import './login.css';


const Login =({authData})=> {

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <AuthForm
        authData={authData}
        submitButtonText={'Войти'} />
    </div>
  )
}

export default Login;