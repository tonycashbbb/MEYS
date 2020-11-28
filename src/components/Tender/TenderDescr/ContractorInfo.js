import React from 'react'
import s from './TenderDescr.module.css'

const ContractorInfo = (props) => {

  const {firma, wojewodzstwo, miasto} = props;

  return (
    <ul className={s.info}>
      <li><span>Firma</span><span>{firma}</span></li>
      <li><span>Województwo</span><span>{wojewodzstwo}</span></li>
      <li><span>Miasto</span><span>{miasto}</span></li>
    </ul>
  )
}

export default ContractorInfo