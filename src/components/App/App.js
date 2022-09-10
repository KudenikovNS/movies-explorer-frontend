import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import DisableContext from "../../contexts/DisableContext";

import * as mainApi from "../../utils/MainApi";

function chengeClassNameAll(isOpened) {
  document.body.classList.toggle("area", isOpened);
}

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [newNumberCards, setNewNumberCards] = useState(3);
  const [listMoviesLength, setListMoviesLength] = useState(12);

  const [popupText, setPopupText] = useState("");
  const [isLuck, setIsLuck] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem("saved-movies")) ?? []
  );

  const [componentDisable, setComponentDisable] = useState({
    header: false,
    footer: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  function handleClickImg() {
    setIsOpened(!isOpened);
    chengeClassNameAll(!isOpened);
  }

  function updateWidthWindow() {
    setWidth(window.innerWidth);
  }

  function getMoviesMore() {
    setListMoviesLength(listMoviesLength + newNumberCards);
  }

  useEffect(() => {
    if (width >= 1140) {
      setNewNumberCards(3);
      setListMoviesLength(12);
    } else if (width < 1140) {
      setNewNumberCards(2);
      setListMoviesLength(8);
    } else if (width < 708) {
      setNewNumberCards(1);
      setListMoviesLength(5);
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener("resize", updateWidthWindow);
    return () => window.removeEventListener("resize", updateWidthWindow);
  }, []);

  function handleRegister(name, email, password) {
    return mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        setShowPopup(true);
        setPopupText(err.message);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      });
  }

  function handleLogin(email, password) {
    return mainApi
      .login(email, password)
      .then(() => {
        setIsLoggedIn(true);
        setCurrentUser(email, password);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        setShowPopup(true);
        setPopupText(err.message);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      });
  }

  function handleProfileEdit({ name, email }) {
    return mainApi
      .patchUser(name, email)
      .then((data) => {
        setCurrentUser(data);
        setPopupText("Данные успешно сохранены");
        setIsLuck(true);
      })
      .catch((err) => {
        setPopupText(err.message);
        setIsLuck(false);
      });
  }

  function checkUser() {
    mainApi
      .getUser()
      .then((data) => {
        if (data) {
          setIsLoggedIn(true);
          setCurrentUser(data);
          navigate(location.pathname, { replace: true });
        } else {
          setIsLoggedIn(false);
          setCurrentUser({});
          localStorage.clear();
          navigate("/signin");
        }
      })
      .catch((err) => setPopupText(err.message));
  }

  useEffect(() => {
    checkUser();
  }, [isLoggedIn]);

  function handleLogout() {
    return mainApi
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        navigate("/", { replace: true });
      })
      .catch((err) => setPopupText(err.message));
  }

  function handleSavedMovie(movie) {
    return mainApi
      .saveFilm(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
        localStorage.setItem(
          "saved-movies",
          JSON.stringify([...savedMovies, newMovie])
        );
      })
      .catch((err) => console.log(err.message));
  }

  function handleDeletedMovie(movie) {
    return mainApi
      .deleteFilm(movie)
      .then(() => {
        const resultSavedMovie = savedMovies.filter((i) => i._id !== movie._id);
        setSavedMovies(resultSavedMovie);
        localStorage.setItem("saved-movies", JSON.stringify(resultSavedMovie));
      })
      .catch((err) => console.log(err.message));
  }

  function handleMovieClickChenge(movie) {
    const like = savedMovies.some((i) => i.movieId === movie.id);
    if (!like) {
      handleSavedMovie(movie);
    } else {
      const deletLike = savedMovies.find((i) => i.movieId === movie.id);
      handleDeletedMovie(deletLike);
    }
  }

  useEffect(() => {
    if (isLoggedIn && savedMovies.length === 0) {
      mainApi
        .getFilms()
        .then((savedMoviesList) => {
          if (savedMoviesList) {
            localStorage.setItem(
              "saved-movies",
              JSON.stringify(savedMoviesList)
            );
            setSavedMovies(savedMoviesList);
          }
        })
        .catch((err) => console.log(err.message));
    }
  }, [isLoggedIn, savedMovies.length]);

  return (
    <UserContext.Provider value={currentUser}>
      <DisableContext.Provider value={setComponentDisable}>
        <div className='App'>
          <div className={`overlay ${isOpened && "overlay-show"}`}></div>
          <Header
            isOpened={isOpened}
            isLoggedIn={isLoggedIn}
            handleClickImg={handleClickImg}
            headerDisable={componentDisable.header}
          />
          <Routes>
            <Route
              path='/movies'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies
                    listMoviesLength={listMoviesLength}
                    getMoviesMore={getMoviesMore}
                    handleMovieClickChenge={handleMovieClickChenge}
                    savedMovies={savedMovies}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies
                    movies={savedMovies}
                    handleMovieClickChenge={handleDeletedMovie}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    handleLogout={handleLogout}
                    editProfile={handleProfileEdit}
                    isLuck={isLuck}
                    popupText={popupText}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path='/signin'
              element={
                <Login
                  isLoggedIn={isLoggedIn}
                  signin={handleLogin}
                  showPopup={showPopup}
                  popupText={popupText}
                />
              }
            />
            <Route
              path='/signup'
              element={
                <Register
                  isLoggedIn={isLoggedIn}
                  signup={handleRegister}
                  showPopup={showPopup}
                  popupText={popupText}
                />
              }
            />
            <Route path='/' element={<Main />} exact />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer footerDisable={componentDisable.footer} />
        </div>
      </DisableContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
