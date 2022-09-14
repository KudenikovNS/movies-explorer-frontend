import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  listMoviesLength,
  savedMovies,
  handleMovieClickChenge,
}) {
  return (
    <section className='card-movies-list'>
      {movies
        .map((movie) => (
          <MoviesCard
            movie={movie}
            handleMovieClickChenge={handleMovieClickChenge}
            savedMovies={savedMovies}
            key={movie.id ? movie.id : movie.movieId}
          />
        ))
        .slice(0, listMoviesLength)}
    </section>
  );
}

export default MoviesCardList;
