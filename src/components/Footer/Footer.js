import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <ul className='footer__link-list'>
          <li className='footer__links'>
            <a
              className='footer__link'
              href='https://practicum.com'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__links'>
            <a
              className='footer__link'
              href='https://github.com/KudenikovNS'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
          <li className='footer__links'>
            <a
              className='footer__link'
              href='https://www.facebook.com/people/Nikita-Kudenikov/100009445453730/?sk=friends'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </li>
        </ul>
        <p className='footer__year'>@2022</p>
      </div>
    </footer>
  );
}

export default Footer;
