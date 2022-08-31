import "./App.css";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

import UserContext from "../../context/UserContext";
import TooltipContext from "../../context/TooltipContext";
import mainApi from "../../utils/MainApi";
import { NO_CONNECT_SERVER } from "../../utils/constants";

import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [tooltipMessage, setTooltipMessage] = useState("");
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn")) || false;

  const tooltipContext = useMemo(
    () => ({ tooltipMessage, setTooltipMessage }),
    [tooltipMessage]
  );

  const userContext = useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser]
  );

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUser()
        .then((user) => {
          localStorage.setItem("userId", user._id);
          setCurrentUser(user);
        })
        .catch(() => setTooltipMessage(NO_CONNECT_SERVER));
    }
  }, []);

  return (
    <div className='page'>
      <UserContext.Provider value={userContext}>
        <TooltipContext.Provider value={tooltipContext}>
          <InfoTooltip message={tooltipMessage} />
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route
              path='/movies'
              element={
                <ProtectedRoute allowed={loggedIn}>
                  <Movies />
                </ProtectedRoute>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute allowed={loggedIn}>
                  <SavedMovies />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute allowed={loggedIn}>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path='/signup'
              element={
                <ProtectedRoute allowed={!loggedIn}>
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path='/signin'
              element={
                <ProtectedRoute allowed={!loggedIn}>
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </TooltipContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
