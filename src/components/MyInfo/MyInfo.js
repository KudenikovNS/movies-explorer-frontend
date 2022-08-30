import "./MyInfo.css";
import studentPhoto from "../../images/studentPhoto.jpg";

function MyInfo() {
  return (
    <section className='my-info'>
      <img className='my-info__img' src={studentPhoto} alt='Фото студента' />
      <h3 className='my-info__title my-info__text'>Никита</h3>
      <h4 className='my-info__subtitle my-info__text'>
        Фронтенд-разработчик, 29 лет
      </h4>
      <p className='my-info__description my-info__text'>
        Я живу в городе Батуми, тот что в Грузии. Я люблю слушать музыку и
        смотреть. Активно изучаю Английский язык. Хочу работать frontend
        разработчиком. Весь мой опыт помог мне определиться с выбором профессии.
        Ну и чуть-чуть понимать людей.
      </p>
      <ul className='my-info__links'>
        <li className='my-info__link'>
          <a
            className='my-info__link-item my-info__text'
            href='https://www.facebook.com/people/Nikita-Kudenikov/100009445453730/?sk=friends'
            target='_blank'
            rel='noreferrer'
          >
            Facebook
          </a>
        </li>
        <li className='my-info__link'>
          <a
            className='my-info__link-item my-info__text'
            href='https://github.com/KudenikovNS'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </li>
      </ul>
    </section>
  );
}

export default MyInfo;
