import React from 'react'
import s from "./List.module.css";
import ListItem from "./ListItem/ListItem";
import {NavLink} from "react-router-dom";

const List = (props) => {

  const { listItemsData } = props;
  let counter = 0;

  let listItemsElements = listItemsData
    .map( ({ id, title, description, linkTitleUrl }) => {
      counter++;
      return ( <ListItem key={id} title={title} description={description} linkTitleUrl={linkTitleUrl}/> )
    })

  const viewNextTenItems = counter >= 10 ? <ViewNextTenItems/> : null;

  return (
    <>
      <ul className={s.list}>
        {listItemsElements}
      </ul>
      {viewNextTenItems}
    </>
  )
}

const ViewNextTenItems = () => {
  return (
    <div className={s.nav}>
      <NavLink to="#">Następne 10 przetargow</NavLink>
    </div>
  )
}

export default List