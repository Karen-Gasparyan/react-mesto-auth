import React, {useEffect} from 'react';

import AuthForm from '../AuthForm/AuthForm';

import './Login.css';


const Login =({authData, setLoginPage})=> {

  useEffect(()=> {
    setLoginPage(true);
  })

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
        <AuthForm
          authData={authData}
          name={'authorize'}
          submitButtonText={'Войти'} />
    </div>
  )
}

export default Login;