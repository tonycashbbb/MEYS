import React from 'react';
import s from './Content.module.css';
import List from "./List/List";

const Content = (props) => {

  const { title } = props;

  return (
    <div className={s.content}>
      <div className={s.inner}>
        <div className={s.title}>
          {title}
        </div>
        <div className={s.search}>
          <input type="text" placeholder={"Szukaj"}/>
        </div>
        <List/>
      </div>
    </div>
  );
}

export default Content;
