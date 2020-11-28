import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.logo}>
            <NavLink to="/home"><h2>MEYS</h2></NavLink>
          </div>
          <div className={s.navigation}>
            <div className={s.navigation__item}>
              <NavLink to="/auth">Zaloguj się</NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
