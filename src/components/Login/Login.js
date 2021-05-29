import React, {useState, useEffect} from 'react';

import './login.css';


const Login =()=> {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [userInfoDirty, setUserInfoDirty] = useState(false);
  const [validForm, setValidForm] = useState(false);


  useEffect(()=> {
    if (!email || !password || emailError || passwordError) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [email, password, emailError, passwordError])


  function handleChangeEmail(e) {
    setEmail(e.target.value);

    if((e.target.name === 'email' && e.target.value.length < 6)) {
      setEmailError('Email не должен содержать менее 6 символов');
      setUserInfoDirty(true);
    } else {
      setEmailError('');
    }
  };


  function handleChangePassword(e) {
    setPassword(e.target.value);

    if((e.target.name === 'password' && e.target.value.length < 8)) {
      setPasswordError('Пароль не должен содержать менее 8 символов');
      setUserInfoDirty(true);
    } else {
      setPasswordError('');
    }
  }

  
  function blurHandler(e) {
    if (!e.target.value && e.target.name === 'email') {
      setEmailError('Поле не может быть пустым');
    } else if (!e.target.value && e.target.name === 'password') {
      setPasswordError('Поле не может быть пустым');
    }
  };


  function handleSubmit(e) {
    e.preventDefault();
    console.log('ok!')
  };


  return (
    <div className="login">
      <h2 className="login__title">Регистрация</h2>
      <form
        className="login__form"
        onSubmit={handleSubmit} >
        <div className="login__inputs-wrapper">
          <div className="login__input-wrapper">
            <input 
              className="login__input-text login__input-text_type_email"
              type="email"
              name="email"
              required
              minLength="6"
              autoComplete="off"
              placeholder="Email"
              value={email}
              onBlur={blurHandler}
              onChange={handleChangeEmail} />
            {(userInfoDirty && emailError) && <span id="email-error" className="error">{emailError}</span> }
          </div>
          <div className="login__input-wrapper">
            <input 
              className="login__input-text login__input-text_type_password"
              type="password"
              name="password"
              required
              minLength="8"
              maxLength="50"
              autoComplete="off"
              placeholder="Пароль"
              value={password}
              onBlur={blurHandler}
              onChange={handleChangePassword} />
            {(userInfoDirty && passwordError) && <span id="password-error" className="error">{passwordError}</span> }
          </div>
        </div>
        <button
          type="submit"
          className={`login__register-btn ${!validForm ? 'login__register-btn_invalid' : '' }`}
          disabled={!validForm}
        >Зарегистрироваться
        </button>
        <p className="login__additional-btn">Уже зарегистрированы? Войти</p>
      </form>
    </div>
  )
}

export default Login;