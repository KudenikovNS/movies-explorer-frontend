import { MOVIES_API } from "./constants";

export default function getFilms() {
  return fetch(MOVIES_API, { method: "GET" }).then((res) =>
    res.ok ? res.json() : Promise.reject(res)
  );
}
