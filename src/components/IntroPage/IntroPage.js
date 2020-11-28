import React from 'react';
import s from './IntroPage.module.css';
import Contracts from "./Contracts/Contracts";
import AboutUs from "./AboutUs/AboutUs";
import Statistics from "./Statistics/Statistics";
import Description from "./Description/Description";

const IntroPage = () => {
  return (
    <main className={s.intro__page}>
      <div className={s.content}>
        <Description/>
        <Contracts/>
        <Statistics/>
        <AboutUs/>
      </div>
    </main>
  );
}

export default IntroPage;
