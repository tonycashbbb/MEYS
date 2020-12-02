import React from 'react'
import s from '../Tender/StrangerTender.module.css'
import TenderDescr from "../Tender/TenderDescr/TenderDescr";

const Tender = () => {

  return (
    <div className={s.tender}>
      <div className="container">
        <TenderDescr/>
        <a className={s.tender__btn} href="#">Edycja ogłoszenia</a>
      </div>
    </div>
  )
}

export default Tender