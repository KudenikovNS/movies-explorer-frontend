import "./Portfolio.css";

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title portfolio__text'>Портфолио</h3>
      <ul className='portfolio__links-container'>
        <li className='portfolio__link portfolio__link_border'>
          <a
            className='portfolio__link portfolio__text'
            href='https://kudenikovns.github.io/How-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
          </a>
          <a
            className='portfolio__link portfolio__arrow'
            href='https://kudenikovns.github.io/How-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            ↗
          </a>
        </li>
        <li className='portfolio__link portfolio__link_border'>
          <a
            className='portfolio__link portfolio__text'
            href='https://kudenikovns.github.io/Russian-travel/russian-travel/index.html'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
          </a>
          <a
            className='portfolio__link portfolio__arrow'
            href='https://kudenikovns.github.io/Russian-travel/russian-travel/index.html'
            target='_blank'
            rel='noreferrer'
          >
            ↗
          </a>
        </li>
        <li className='portfolio__link portfolio__link_border'>
          <a
            className='portfolio__link portfolio__text'
            href='https://github.com/KudenikovNS/react-mesto-api-full'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
          </a>
          <a
            className='portfolio__link portfolio__arrow'
            href='https://github.com/KudenikovNS/react-mesto-api-full'
            target='_blank'
            rel='noreferrer'
          >
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
