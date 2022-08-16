import "./MoviesCard.css";

import React from "react";

function MoviesCard({ card, isSaved }) {
  const [isLiked, setIsLiked] = React.useState(false);

  const btnChangeClass = `movies-card__btn ${
    isSaved && "movies-card__btn_delete"
  } ${isLiked && "movies-card__btn_active"}`;

  function handleSaveMovie() {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  }

  return (
    <li className='movies-card'>
      <div className='movies-card__container'>
        <h2 className='movies-card__title'>{card.title}</h2>
        <p className='movies-card__subtitle-time'>{card.time}</p>
        <button className={btnChangeClass} onClick={handleSaveMovie} />
      </div>
      <img
        className='movies-card__cover'
        src={card.img}
        alt='Обложка кинофильма'
      />
    </li>
  );
}

export default MoviesCard;
