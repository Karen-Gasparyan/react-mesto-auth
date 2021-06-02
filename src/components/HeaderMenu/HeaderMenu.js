import React from 'react';

import './headerMenu.css';


const HeaderMenu =({userEmail, signOut})=> {

  return (
    <div className="header-menu">
      <p className="header-menu__email">{userEmail}</p>
      <button onClick={signOut} className="header-menu__out-btn">Выйти</button>
    </div>
  )
}

export default HeaderMenu;