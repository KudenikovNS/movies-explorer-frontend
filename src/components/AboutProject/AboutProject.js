import "./AboutProject.css";

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__description'>
        <p className='about-project__text'>
          <span className='about-project__text-span'>
            Дипломный проект включал 5 этапов
          </span>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className='about-project__text'>
          <span className='about-project__text-span'>
            На выполнение диплома ушло 5 недель
          </span>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className='about-project__weeks'>
        <p className='about-project__item'>1 неделя</p>
        <p className='about-project__item'>4 недели</p>
        <p className='about-project__item'>Back-end</p>
        <p className='about-project__item'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
