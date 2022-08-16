import "./AboutMe.css";
import studentPhoto from "../../images/studentPhoto.jpg";

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <img
          className='about-me__student-photo'
          alt='Фотография студента'
          src={studentPhoto}
        />
        <div className='about-me__info'>
          <h3 className='about-me__student-name'>Никита</h3>
          <p className='about-me__student-description about-me__student-description_font'>
            Фронтенд-разработчик, 29 года
          </p>
          <p className='about-me__student-description'>
            Я живу в солнечной Малаге, у меня есть разрешение на работу в
            Испании. Я люблю слушать музыку, а ещё увлекаюсь компьютерными
            играми. Недавно начала кодить. Успела поработать риелтором,
            оператором кол-центра и преподавателем английского. Весь мой опыт
            помог мне определиться с выбором профессии. Ну и чуть-чуть понимать
            людей.
          </p>
        </div>
        <ul className='about-me__student-links'>
          <li className='about-me__student-link'>
            <a
              className='about-me__student-link-item'
              href='https://www.facebook.com/people/Nikita-Kudenikov/100009445453730/?sk=friends'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </li>
          <li className='about-me__student-link'>
            <a
              className='about-me__student-link-item'
              href='https://github.com/KudenikovNS'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
