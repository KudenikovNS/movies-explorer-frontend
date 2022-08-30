import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title about-project__text'>О проекте</h2>
      <div className='about-project__block'>
        <h3 className='about-project__subtitle about-project__text'>
          Дипломный проект включал 5 этапов
        </h3>
        <p className='about-project__text'>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </div>
      <div className='about-project__block'>
        <h3 className='about-project__subtitle about-project__text'>
          На выполнение диплома ушло 5 недель
        </h3>
        <p className='about-project__text'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <table className='about-project__tbl'>
        <tbody className='tbl'>
          <tr className='tbl__row'>
            <td className='tbl__text tbl__text_color-grenn'>1 неделя</td>
            <td className='tbl__text tbl__text_color-grey'>4 недели</td>
          </tr>
          <tr className='tbl__row'>
            <td className='tbl__text tbl__text_subtutle'>Back-end</td>
            <td className='tbl__text tbl__text_subtutle'>Front-end</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
