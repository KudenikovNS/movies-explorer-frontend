export const MAIN_API = "https://api.kudenikovns.diplom.nomoredomains.sbs";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((data) => {
    throw new Error(data.message);
  });
}

export const register = (name, email, password) => {
  return fetch(`${MAIN_API}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const login = (email, password) => {
  return fetch(`${MAIN_API}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ password, email }),
  }).then(checkResponse);
};

export const logout = () => {
  return fetch(`${MAIN_API}/signout`, {
    method: "POST",
    withCredentials: true,
    credentials: "include",
  }).then(checkResponse);
};

export const getUser = () => {
  // Готово
  return fetch(`${MAIN_API}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    credentials: "include",
  }).then(checkResponse);
};

export const patchUser = (name, email) => {
  // Готово
  return fetch(`${MAIN_API}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    credentials: "include",
    body: JSON.stringify({ name, email }),
  }).then(checkResponse);
};

export const getFilms = () => {
  // Готово
  return fetch(`${MAIN_API}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    credentials: "include",
  }).then(checkResponse);
};

export const saveFilm = (movie) => {
  //Готово
  return fetch(`${MAIN_API}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    credentials: "include",
    body: JSON.stringify({
      country: movie.country || "не указано",
      director: movie.director || "не указано",
      duration: movie.duration || "не указано",
      year: movie.year || "не указано",
      description: movie.description || "не указано",
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink
        ? movie.trailerLink
        : `https://www.youtube.com/results?search_query=трейлер+${movie.nameRU}`,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU || movie.nameEN,
      nameEN: movie.nameEN || movie.nameRU,
    }),
  }).then(checkResponse);
};

export const deleteFilm = (movie) => {
  //Готово
  return fetch(`${MAIN_API}/movies/${movie._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    credentials: "include",
  }).then(checkResponse);
};
