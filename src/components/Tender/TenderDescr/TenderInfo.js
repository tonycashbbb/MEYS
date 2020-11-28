import React from 'react'
import s from './TenderDescr.module.css'

const TenderInfo = (props) => {

  const {branza, wojewodzstwo, miasto} = props;

  return (
    <ul className={s.info}>
      <li><span>Branza</span><span>{branza}</span></li>
      <li><span>Województwo</span><span>{wojewodzstwo}</span></li>
      <li><span>Miasto</span><span>{miasto}</span></li>
    </ul>
  )
}

export default TenderInfo