import React from 'react';
import s from './Sidebar.module.css';
import AccountBlock from "./AccountBlock";
import TenderBlock from "./TenderBlock";
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {

  const { isAccountPage } = props;

  const subBlock = isAccountPage ? <AccPageSubBlock/> : <HomePageSubBlock/>;

  return (
      <div className={s.sidebar}>
        <div className={s.inner}>
          <AccountBlock subBlock={subBlock}/>
          <TenderBlock/>
        </div>
      </div>
  );
}

const AccPageSubBlock = () => {
  return (
      <div className={s.acc__block}>
        <div className={s.email}>
          <div className={s.email__text}>
            Twoj e-mail: xxx@gmail.com
          </div>
        </div>
        <ul className={s.firm__info}>
          <div className={s.firm__title}>Dane firmy:</div>
          <li>Nazwa Firmy: XXXXXX</li>
          <li>NIP: XXXXXX</li>
          <li>Kraj: Polska</li>
          <li>Miasto: XXXXXX</li>
          <li>Branza: XXXXXX</li>
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
