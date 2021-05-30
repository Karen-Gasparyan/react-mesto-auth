import React from 'react';

import AuthForm from '../AuthForm/AuthForm';

import './register.css';


const Register =({authData})=> {

  return (
    <div className="register">
      <h2 className="register__title">Регистрация</h2>
        <AuthForm
          authData={authData}
          submitButtonText={'Зарегистрироваться'} />
      <p className="register__text-question">Уже зарегистрированы? Войти</p>
    </div>
  )
}

export default Register;