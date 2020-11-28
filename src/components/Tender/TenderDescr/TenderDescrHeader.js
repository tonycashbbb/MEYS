import React from 'react'
import s from "./TenderDescr.module.css";

const TenderDescrHeader = (props) => {

  const { title, data, user } = props;

  return (
    <div className={s.header}>
      <div className={s.title}>{title}</div>
      <div className={s.data}>{data} - <a href="#">{user}</a></div>
    </div>
  )
}
export default TenderDescrHeader