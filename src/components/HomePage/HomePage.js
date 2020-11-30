import React from 'react';
import s from './HomePage.module.css';
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

const HomePage = () => {
  const homeListItemsData = [
    {id: '000000', title: 'Home page list item title 1', linkTitleUrl: '/sasaz', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},
    {id: '000001', title: 'Home page list item title 2', linkTitleUrl: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},
    {id: '000010', title: 'Home page list item title 3', linkTitleUrl: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},
    {id: '000011', title: 'Home page list item title 4', linkTitleUrl: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},
    {id: '000100', title: 'Home page list item title 5', linkTitleUrl: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},
    {id: '000101', title: 'Home page list item title 6', linkTitleUrl: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},
    {id: '000110', title: 'Home page list item title 7', linkTitleUrl: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},
    {id: '000111', title: 'Home page list item title 8', linkTitleUrl: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},
    {id: '001000', title: 'Home page list item title 9', linkTitleUrl: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},
    {id: '001001', title: 'Home page list item title 10', linkTitleUrl: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo\n' +
        '            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,\n' +
        '            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!\n' +
        '            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!'},

  ]

  return (
    <main className={s.home__page}>
      <Sidebar isAccountPage={false}/>
      <Content title={"Znajdź właściwe przetargi"} listItemsData={homeListItemsData}/>
    </main>
  );
}

export default HomePage;
