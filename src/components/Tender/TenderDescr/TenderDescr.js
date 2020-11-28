import React from 'react'
import s from './TenderDescr.module.css'
import TenderInfo from "./TenderInfo";
import ContractorInfo from "./ContractorInfo";
import TenderDescrHeader from "./TenderDescrHeader";

const TenderDescr = () => {
  return (
    <div className={s.decription}>
      <TenderDescrHeader
        title={"Nazwa przetargu"}
        data={"Środa, 4/11/2020 - 15:34"}
        user={"Użytkownik"}
      />
      <div className={s.row}>
        <div className={s.column}>
          <h2>Informacja o ogloszeniu:</h2>
          <TenderInfo
            branza={"IT"}
            wojewodzstwo={"XXXXXX"}
            miasto={"XXXXXX"}
          />
        </div>
        <div className={s.column}>
          <h2>Informacja o ogłaszającym:</h2>
          <ContractorInfo
            firma={"XXXXXX"}
            wojewodzstwo={"XXXXXX"}
            miasto={"XXXXXX"}
          />
        </div>
      </div>
      <div className={s.details}>
        <h2>Szczegóły:</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ipsa ipsam quod.
          Illum placeat possimus quos. Ad aliquid aspernatur cupiditate in ipsum libero maxime quae reprehenderit
          sequi tenetur. Autem, libero! Ex repellat, reprehenderit! Corporis doloribus hic incidunt
          nihil praesentium recusandae repudiandae sequi vero? Adipisci aliquam, asperiores cum debitis dicta
          eligendi, et ipsam iste mollitia quisquam recusandae sequi voluptatem. Autem, odio. Cumque et optio placeat
          quasi quo sapiente similique? Dolorem esse, harum illum maiores, modi necessitatibus, neque perferendis possimus
          praesentium provident quibusdam quisquam quos sapiente! Accusantium consequuntur magnam mollitia quam voluptate!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda, blanditiis cumque cupiditate
          dolore dolorem dolorum ea eligendi maxime minus modi nesciunt nisi praesentium quia recusandae,
          repellat soluta temporibus, voluptatem.</p>
      </div>
    </div>
  )
}

export default TenderDescr