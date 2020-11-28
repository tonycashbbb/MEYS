import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.inner}>
          <ul className={s.footer__links}>
            <h3>MEYS@2020</h3>
            <li><a href="#"><h3>Regulamin</h3></a></li>
            <li><a href="#"><h3>Aktualnosci</h3></a></li>
            <li><a href="#"><h3>Polityka cookies</h3></a></li>
            <li><a href="#"><h3>Klauzula RODO</h3></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;