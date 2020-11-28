import React from 'react';
import s from './HomePage.module.css';
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

const HomePage = () => {
  return (
    <main className={s.home__page}>
      <Sidebar isAccountPage={false}/>
      <Content title={"Znajdz wlasciwe przetargi"}/>
    </main>
  );
}

export default HomePage;
