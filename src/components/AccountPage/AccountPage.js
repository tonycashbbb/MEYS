import React from 'react';
import s from './AccountPage.module.css';
import Sidebar from "../HomePage/Sidebar/Sidebar";
import Content from "../HomePage/Content/Content";

const AccountPage = () => {
  return (
    <div className={s.account__page}>
      <Sidebar isAccountPage={true}/>
      <Content title={"Moje przetargi"}/>
    </div>
  );
}

export default AccountPage;
