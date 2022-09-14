import { Link } from "react-router-dom";

function Account() {
  return (
    <div className='header__links menu-mobile__links'>
      <Link to='/profile' className='header__link account'>
        Аккаунт
      </Link>
    </div>
  );
}

export default Account;
