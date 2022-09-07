import { useMemo } from "react";

function useSearchFilter(movies, checkLocal, valueLocal) {
  return useMemo(
    () =>
      movies.filter((movie) => {
        const nameRU = movie.nameRU;
        const nameEN = movie.nameEN;
        const values = valueLocal.toLowerCase();

        if (checkLocal && movie.duration > 40) {
          return false;
        }

        if (
          nameRU?.toLowerCase().includes(values) ||
          nameEN?.toLowerCase().includes(values)
        ) {
          return true;
        }

        return false;
      }),
    [checkLocal, valueLocal, movies]
  );
}

export default useSearchFilter;
