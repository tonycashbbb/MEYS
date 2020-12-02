import React from 'react';
import s from './Auth.module.css';
import LoginForm from "./LoginForm/LoginForm";

//as the props comes function toggleIsLogged
//give it to LoginForm
const Auth = (props) => {

  return (
    <div className={s.auth}>
      <div className="container">
        <div className={s.row}>
          <div className={s.text}>
            <div className={s.title}>Meys</div>
            <div className={s.description}>MEYS pomaga umieszczac wlasne przetargi oraz brac udzial w przetargach innych osob</div>
          </div>
          <LoginForm toggleIsLogged={props.toggleIsLogged}/>
        </div>
      </div>
    </div>
  );
}

export default Auth;