import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";
import cards from "../../utils/cards";

function MoviesCardList({ isSaved }) {
  return (
    <section className='movies-card-list'>
      {cards.length === 0 ? (
        <p className='movies-card-list__error'>
          Мы не смогли найти, то что Вы ищите. Попробуйте по другому.
        </p>
      ) : (
        <>
          <ul className='movies-card-list__items'>
            {cards.map((card) => {
              return (
                <MoviesCard card={card} key={card._id} isSaved={isSaved} />
              );
            })}
          </ul>
          <button className='movies-card-list__btn-more'>Ещё</button>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
