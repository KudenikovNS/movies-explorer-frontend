import "./Portfolio.css";

import arrowUp from "../../images/arrowUp.svg";

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://kudenikovns.github.io/How-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <img
              className='portfolio__link-arrow'
              src={arrowUp}
              alt='Стрелка вверх'
            />
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://kudenikovns.github.io/Russian-travel/russian-travel/index.html'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <img
              className='portfolio__link-arrow'
              src={arrowUp}
              alt='Стрелка вверх'
            />
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://github.com/KudenikovNS/react-mesto-api-full'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <img
              className='portfolio__link-arrow'
              src={arrowUp}
              alt='Изображение стрелки'
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
