import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <p className='footer__copyrights footer__text'>&copy; 2022</p>
        <nav>
          <ul className='footer__links'>
            <li className='footer__link'>
              <a
                className='footer__link footer__text footer__text_link-black'
                href='https://practicum.com'
                target='_blank'
                rel='noreferrer'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__link'>
              <a
                className='footer__link footer__text footer__text_link-black'
                href='https://github.com/KudenikovNS'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
            <li className='footer__link'>
              <a
                className='footer__link footer__text footer__text_link-black'
                href='https://www.facebook.com/people/Nikita-Kudenikov/100009445453730/?sk=friends'
                target='_blank'
                rel='noreferrer'
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
