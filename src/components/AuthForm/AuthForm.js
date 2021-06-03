import React from 'react';

import './AuthForm.css';


const AuthForm =(
  {authData: {
    emailError,
    passwordError,
    authDirty,
    validForm,
    handleChangeEmail,
    handleChangePassword,
    blurHandler,
    handleSubmit
  }, submitButtonText, name })=> {

  return (
    <form
      name={name}
      className="auth__form"
      onSubmit={handleSubmit} >
      <div className="auth__inputs-wrapper">
        <div className="auth__input-wrapper">
          <input 
            className="auth__input-text auth__input-text_type_email"
            type="email"
            name="email"
            required
            minLength="6"
            autoComplete="off"
            placeholder="Email"
            onBlur={blurHandler}
            onChange={handleChangeEmail} />
          {(authDirty && emailError) && <span id="email-error" className="error">{emailError}</span> }
        </div>
        <div className="auth__input-wrapper">
          <input 
            className="auth__input-text auth__input-text_type_password"
            type="password"
            name="password"
            required
            minLength="8"
            maxLength="50"
            autoComplete="off"
            placeholder="Пароль"
            onBlur={blurHandler}
            onChange={handleChangePassword} />
          {(authDirty && passwordError) && <span id="password-error" className="error">{passwordError}</span> }
        </div>
      </div>
      <button
        type="submit"
        className={`auth__register-btn ${!validForm ? 'auth__register-btn_invalid' : '' }`}
        disabled={!validForm}
      >{submitButtonText}
      </button>
    </form>
  )
}

export default AuthForm;