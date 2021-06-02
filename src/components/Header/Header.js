import React from 'react';

import HeaderMenu from '../HeaderMenu/HeaderMenu';

import './header.css';


function Header({
  component: Component,
  userEmail,
  loggedIn,
  visibleHeaderMenu,
  signOut,
  changeHeaderMenu,
  headerMenuBurger
}) {

  return (
    <>
      <div className="header page__header">

        <div className="header__logo"></div>
        <div className="header__component">
          
        </div>

      </div>

      
    </>
  )
}

export default Header;


{/* <>
  <div className="my-profile">
    {(loggedIn && visibleHeaderMenu) ? (<HeaderMenu userEmail={userEmail} signOut={signOut} />) : null}
  </div>

  <div className="header page__header">
    <div className="header__logo"></div>
    <div className="header__items">
      {loggedIn ? <HeaderMenu signOut={signOut} userEmail={userEmail} /> : <Component /> }
    </div>
    <div className="header__component">
      {loggedIn ? <Component changeHeaderMenu={changeHeaderMenu} headerMenuBurger={headerMenuBurger} /> : null }
    </div>
  </div>
</> */}