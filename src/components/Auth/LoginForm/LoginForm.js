import React from 'react'
import s from './LoginForm.module.css'
import {NavLink} from "react-router-dom";

//as the props comes function toggleIsLogged
//on NavLink 'Zaloguj się' set onClick={() => props.toggleIsLogged()}
const LoginForm = (props) => {

  return (
    <form action="#" method={"POST"} className={s.form}>
      <input type="text" placeholder={"Adres e-mail lub numer telefonu"}/>
      <input type="text" placeholder={"Haslo"}/>
      <div className={s.link__toHome} onClick={props.toggleIsLogged}>
        <NavLink to="/home">Zaloguj się</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="#">Nie pamiętasz hasła?</NavLink>
      </div>
      <hr/>
      <div className={s.register}>
        <NavLink to="#">Utwórz nowe konto</NavLink>
      </div>
    </form>
  )
}

export default LoginForm