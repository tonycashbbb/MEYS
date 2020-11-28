import React from 'react'
import s from './LoginForm.module.css'
import {NavLink} from "react-router-dom";

const LoginForm = () => {
  return (
    <form action="#" method={"POST"} className={s.form}>
      <input type="text" placeholder={"Adres e-mail lub numer telefonu"}/>
      <input type="text" placeholder={"Haslo"}/>
      <div className={s.link__toHome}>
        <NavLink to="/home">Zaloguj sie</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="#">Nie pamietasz hasla?</NavLink>
      </div>
      <hr/>
      <div className={s.register}>
        <NavLink to="#">Utworz nowe konto</NavLink>
      </div>
    </form>
  )
}

export default LoginForm