import React from 'react'
import s from './CreateTender.module.css'

const CreateTender = () => {
  return (
    <div className={s.tender}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.title}>
            Aby stworzyć nowe ogłoszenie wypełnij poniższy formularz
          </div>
          <form className={s.form} action="#" method="POST">
            <input type="text" name="tender" placeholder={"Nazwa przetargu"}/>
            <input type="text" name="industry" placeholder={"Branża"}/>
            <div className={s.location}>
              <input type="text" name="province" placeholder={"Województwo"}/>
              <input type="text" name="city" placeholder={"Miasto"}/>
            </div>
            <input type="text" name="budget" placeholder={"Budżet"}/>
            <textarea name="" id="" cols="30" rows="10" placeholder={"Szczegoly"}></textarea>
            <div className={s.btn}>
              <button>Zatwierdź</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateTender