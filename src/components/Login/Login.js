import React from 'react';

import Header from '../Header/Header';
import AuthForm from '../AuthForm/AuthForm';

import './login.css';


const Login =(
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

      <div className="login">
        <h2 className="login__title">Вход</h2>
          <AuthForm
            name={'authorize'}
            authData={authData}
            submitButtonText={'Войти'} />
      </div>
    </>
  )
}

export default Login;