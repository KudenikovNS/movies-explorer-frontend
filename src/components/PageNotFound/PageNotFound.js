import "./PageNotFound.css";

import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className='page-not-found'>
      <h3 className='page-not-found__title'>
        <span className='page-not-found__span'>404</span>
        Страница не найдена
      </h3>
      <Link className='page-not-found__link' to='/'>
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
