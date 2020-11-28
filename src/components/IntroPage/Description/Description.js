import React from 'react'
import s from './Description.module.css'
import SectionHeader from "../SectionHeader/SectionHeader";

const Description = () => {
  return (
    <section className={s.description}>
      <div className="container">
        <SectionHeader
          suptitle={"Co to jest"}
          title={"MEYS?"}
        />
        <div className={s.description__inner}>
          <div className={s.image}>
            <img src="https://placehold.it/300x400" alt=""/>
          </div>
            <ul className={s.descr}>
              <div className={s.title}>Title</div>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque eum,
                facilis molestias numquam perspiciatis sed sit voluptatibus? Aperiam aspernatur dicta
                distinctio dolore doloremque esse laudantium necessitatibus pariatur tempora vitae?</li>
              <div className={s.title}>Title</div>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque eum,
                facilis molestias numquam perspiciatis sed sit voluptatibus? Aperiam aspernatur dicta
                distinctio dolore doloremque esse laudantium necessitatibus pariatur tempora vitae?</li>
              <div className={s.title}>Title</div>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque eum,
                facilis molestias numquam perspiciatis sed sit voluptatibus? Aperiam aspernatur dicta
                distinctio dolore doloremque esse laudantium necessitatibus pariatur tempora vitae?</li>
              <div className={s.title}>Title</div>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque eum,
                facilis molestias numquam perspiciatis sed sit voluptatibus? Aperiam aspernatur dicta
                distinctio dolore doloremque esse laudantium necessitatibus pariatur tempora vitae?</li>
              <div className={s.title}>Title</div>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque eum,
                facilis molestias numquam perspiciatis sed sit voluptatibus? Aperiam aspernatur dicta
                distinctio dolore doloremque esse laudantium necessitatibus pariatur tempora vitae?</li>
            </ul>
        </div>
      </div>

    </section>
  )
}

export default Description