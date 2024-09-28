import React from 'react';
import { Link } from 'react-router-dom';
// import { BsCupHot } from 'react-icons/bs';
// import { BsWind } from 'react-icons/bs';
// import { BsDroplet } from 'react-icons/bs';
// import { PiSquaresFourLight } from 'react-icons/pi';
// import { SlGrid } from 'react-icons/sl';
// import { BsGrid3X3Gap } from 'react-icons/bs';
// import { BsGrid1X2 } from 'react-icons/bs';
// import { BsFuelPump } from 'react-icons/bs';
// import { BsUiRadios } from 'react-icons/bs';
// import { BsMap } from 'react-icons/bs';
// import { BsPeople } from 'react-icons/bs';
// import { FaDesktop } from 'react-icons/fa';
// import { BsDiagram3 } from 'react-icons/bs';
import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  return (
    <div className={css.cardContainer}>
      <div className={css.camperImg}>
        <img
          src={camper.gallery[0].thumb}
          alt={camper.description}
          width={292}
          className={css.img}
        />
      </div>
      <div>
        <div className={css.textWrap}>
          <h2>{camper.name}</h2>
          <div className={css.priceWrap}>
            <p>€{camper.price}</p>
            <div>
              <svg width="16" height="16">
                <use href="/src/images/svg-sprite.svg#icon-heart"></use>
              </svg>
            </div>
          </div>
        </div>
        <div className={css.contentWrap}>
          <div>
            <svg width="16" height="16">
              <use href="/src/images/svg-sprite.svg#icon-star"></use>
            </svg>
          </div>
          <p>{camper.rating}</p>
          <p>({camper.reviews[0].reviewer_rating} reviews)</p>

          <div>
            <svg width="16" height="16">
              <use href="/src/images/svg-sprite.svg#icon-map"></use>
            </svg>
          </div>
          <p>{camper.location}</p>
        </div>
        <p>{camper.description}</p>
        <Link to={`/campers/${camper.id}`}>Show more</Link>
      </div>
    </div>
  );
};

export default CamperCard;
