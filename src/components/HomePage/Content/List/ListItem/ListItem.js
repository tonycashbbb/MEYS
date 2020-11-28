import React from 'react'
import s from './ListItem.module.css'

const ListItem = () => {
  return (
    <li>
      <div className={s.inner}>
        <div className={s.title}>
          <a href="#">Item title</a>
        </div>
        <div className={s.description}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eveniet illo
            impedit incidunt molestias nobis odio quia totam voluptate. Ducimus ea eos illum,
            nesciunt odio praesentium quae saepe voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid aut blanditiis earum eius explicabo ipsum nemo possimus quasi soluta tempora!
            Aspernatur enim error maxime odit optio pariatur placeat provident quibusdam!</p>
        </div>
      </div>
    </li>
  )
}

export default ListItem