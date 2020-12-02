import React from 'react';
import s from './HomePage.module.css';
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

const HomePage = (props) => {
  const { homeListItemsData, userData } = props;

  return (
    <main className={s.home__page}>
      <Sidebar isAccountPage={false} userData={userData}/>
      <Content title={"Znajdź właściwe przetargi"} listItemsData={homeListItemsData}/>
    </main>
  );
}

export default HomePage;
