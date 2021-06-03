import React from 'react';

import AuthForm from '../AuthForm/AuthForm';

import './Register.css';


const Register =({authData})=> {

  return (
    <div className="register">
      <h2 className="register__title">Регистрация</h2>
        <AuthForm
          authData={authData}
          name={'register'}
          submitButtonText={'Зарегистрироваться'} />
      <p className="register__text-question">Уже зарегистрированы? Войти</p>
    </div>
  )
}

export default Register;