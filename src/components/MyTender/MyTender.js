import React from 'react'
import s from '../Tender/StrangerTender.module.css'
import styles from '../CreateTender/CreateTender.module.css'
import TenderDescr from "../Tender/TenderDescr/TenderDescr";
import {NavLink} from "react-router-dom";

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

const MyTender = () => {
  return (
    <a className={s.tender__btn} href="#">Edycja ogłoszenia</a>
  )
}

const StrangerTender = () => {
  return (
    <NavLink className={s.tender__btn} to="">Odpowiedź na ogłoszenie</NavLink>
  )
}

const ReplyToTender = () => {
  return (
    <form className={s.reply}>
      <h1>Złożenie wniosku:</h1>
      <textarea name="" id="" cols="30" rows="10" placeholder={"Wypełnij wniosek"}></textarea>
      <a className={s.tender__btn} href="#">Złóż wniosek</a>
    </form>

  )
}

export default Tender