import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Login from "../Login/Login";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import PageNotFound from "../PageNotFound/PageNotFound";
import Preloader from "../Preloader/Preloader";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SearchForm from "../SearchForm/SearchForm";

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Header isBackground={true} isLog={false} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <>
              <Header isBackground={false} isLog={true} />
              <SearchForm />
              <Preloader isWaiting={false} />
              <MoviesCardList />
              <Footer />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header isBackground={false} isLog={true} />
              <SearchForm />
              <Preloader isWaiting={false} />
              <MoviesCardList isSaved={true} />
              <Footer />
            </>
          }
        />
        <Route
          path='/signup'
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path='/signin'
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path='/profile'
          element={
            <>
              <Header isBackground={false} isLog={true} />
              <Profile />
            </>
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
