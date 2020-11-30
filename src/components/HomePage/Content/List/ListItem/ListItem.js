import React from 'react'
import s from './ListItem.module.css'
import {NavLink} from "react-router-dom";

const ListItem = (props) => {
  const { title, description, linkTitleUrl } = props;

  return (
    <li>
      <div className={s.inner}>
        <div className={s.title}>
          <NavLink to={`${linkTitleUrl}`}>{title}</NavLink>
        </div>
        <div className={s.description}>
          <p>{description}</p>
        </div>
      </div>
    </li>
  )
}

export default ListItem