import React from 'react';

import Header from '../Header/Header';
import AuthForm from '../AuthForm/AuthForm';

import './register.css';


const Register =(
  { authData,
    component,
    userEmail,
    loggedIn,
    visibleHeaderMenu,
    signOut,
    changeHeaderMenu,
    headerMenuBurger
  })=> {

  return (
    <>
      <Header
        component={component}
        userEmail={userEmail}
        loggedIn={loggedIn}
        visibleHeaderMenu={visibleHeaderMenu}
        signOut={signOut}
        changeHeaderMenu={changeHeaderMenu}
        headerMenuBurger={headerMenuBurger} />

      <div className="register">
        <h2 className="register__title">Регистрация</h2>
          <AuthForm
            name={'register'}
            authData={authData}
            submitButtonText={'Зарегистрироваться'} />
        <p className="register__text-question">Уже зарегистрированы? Войти</p>
      </div>
    </>
  )
}

export default Register;