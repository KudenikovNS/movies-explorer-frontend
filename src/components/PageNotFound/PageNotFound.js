import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className='page-not-found'>
      <h1 className='page-not-found__title page-not-found__text'>404</h1>
      <p className='page-not-found__text'>Страница не найдена</p>
      <button
        className='page-not-found__btn page-not-found__text '
        onClick={handleBack}
        type='button'
      >
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
