import React from 'react'
import s from "./List.module.css";
import ListItem from "./ListItem/ListItem";

const List = () => {
  return (
    <>
      <ul className={s.list}>
        {/*  10 шт, сделать через map, ma-twitter  */}
        <ListItem/>
        <ListItem/>
        <ListItem/>
        {/*<ListItem/>*/}
        {/*<ListItem/>*/}
        {/*<ListItem/>*/}
        {/*<ListItem/>*/}
        {/*<ListItem/>*/}
        {/*<ListItem/>*/}
        {/*<ListItem/>*/}
      </ul>
      {/*<div className={s.nav}>*/}
      {/*  <a href="#">Następne 10 przetargow</a>*/}
      {/*</div>*/}
    </>

  )
}

export default List