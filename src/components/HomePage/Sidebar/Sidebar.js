import React from 'react';
import s from './Sidebar.module.css';
import AccountBlock from "./AccountBlock";
import TenderBlock from "./TenderBlock";
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
  const { isAccountPage, userData } = props;
  const { username } = userData[0];

  const subBlock = isAccountPage ? <AccPageSubBlock userData={userData}/> : <HomePageSubBlock/>;

  return (
      <div className={s.sidebar}>
        <div className={s.inner}>
          <AccountBlock subBlock={subBlock} username={username}/>
          <TenderBlock/>
        </div>
      </div>
  );
}

const AccPageSubBlock = (props) => {
  const {email, nameOfTheBusiness, NIP, country, city, industry} = props.userData[0];

  return (
      <div className={s.acc__block}>
        <div className={s.email}>
          <div className={s.email__text}>
            {email}
          </div>
        </div>
        <ul className={s.firm__info}>
          <div className={s.firm__title}>Dane firmy:</div>
          <li>Nazwa Firmy: {nameOfTheBusiness}</li>
          <li>NIP: {NIP}</li>
          <li>Kraj: {country}</li>
          <li>Miasto: {city}</li>
          <li>Branza: {industry}</li>
          <div className={s.edit}>
            <button>Edytuj dane</button>
          </div>
        </ul>
      </div>
  )
}

const HomePageSubBlock = () => {
  return (
    <ul className={s.links}>
      <li><NavLink to="/account">Moj profil</NavLink></li>
      <li><NavLink to="/">Wyloguj sie</NavLink></li>
    </ul>
  )
}

export default Sidebar;
