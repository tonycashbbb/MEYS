import React from 'react';
import s from './AccountPage.module.css';
import Sidebar from "../HomePage/Sidebar/Sidebar";
import Content from "../HomePage/Content/Content";

const AccountPage = (props) => {
  const { accountListItemsData, userData } = props;

  return (
    <div className={s.account__page}>
      <Sidebar isAccountPage={true} userData={userData}/>
      <Content title={"Moje ogłoszenia"} listItemsData={accountListItemsData}/>
    </div>
  );
}

export default AccountPage;
