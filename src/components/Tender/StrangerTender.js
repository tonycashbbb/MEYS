import React from 'react'
import s from './StrangerTender.module.css'
import TenderDescr from "./TenderDescr/TenderDescr";
import {NavLink} from "react-router-dom";

const StrangerTender = () => {

  return (
    <div className={s.tender}>
      <div className="container">
        <TenderDescr/>
        <NavLink className={s.tender__btn} to="/reply_to_tender">Odpowiedź na ogłoszenie</NavLink>
      </div>
    </div>
  )
}

const ReplyToTender = () => {
  return (
    <div className="container">
      <form className={s.reply}>
        <h1>Złożenie wniosku:</h1>
        <textarea name="" id="" cols="30" rows="10" placeholder={"Wypełnij wniosek"}></textarea>
        <a className={s.tender__btn} href="#">Złóż wniosek</a>
      </form>
    </div>
  )
}

export default StrangerTender
export { ReplyToTender }