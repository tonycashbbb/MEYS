import React from 'react';
import s from './AccountPage.module.css';
import Sidebar from "../HomePage/Sidebar/Sidebar";
import Content from "../HomePage/Content/Content";

const AccountPage = () => {
  const accountListItemsData = [
    {id: '000110', title: 'Account page list item title 1', linkTitleUrl: '/sasaz', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},
    {id: '000111', title: 'Account page list item title 2', linkTitleUrl: '/#', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},
    {id: '001000', title: 'Account page list item title 3', linkTitleUrl: '/#', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},
  ]

  return (
    <div className={s.account__page}>
      <Sidebar isAccountPage={true}/>
      <Content title={"Moje ogłoszenia"} listItemsData={accountListItemsData}/>
    </div>
  );
}

export default AccountPage;
