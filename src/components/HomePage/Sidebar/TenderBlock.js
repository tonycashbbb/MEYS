import React from 'react'
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const TenderBlock = () => {
  return (
    <div className={s.block}>
      <div className={s.header}>
        <div className={s.title}>Ogloszenie o przetargu </div>
      </div>
      <ul className={s.links}>
        <li><NavLink to="/create_tender">Stworzyc nowe ogloszenie</NavLink></li>
        <li><NavLink to="/my_tenders">Moje ogloszenia o przetargach</NavLink></li>
        <li><NavLink to="/stranger_tender">Moje odpowiedzi na ogloszenia konkursowe</NavLink></li>
      </ul>
    </div>
  )
}

export default TenderBlock