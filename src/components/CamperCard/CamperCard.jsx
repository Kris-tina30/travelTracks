import React from 'react';
import { Link } from 'react-router-dom';
import css from './CamperCard.module.css';
import Button from '../Button/Button';
import Categories from '../Categories/Categories';

const CamperCard = ({ camper }) => (
  <div className={css.cardContainer}>
    <div className={css.camperImg}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.description}
        width={292}
        height={320}
        className={css.img}
      />
    </div>
    <div className={css.informationContainer}>
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
          <svg width="16" height="16" className={css.iconStar}>
            <use href="/src/images/svg-sprite.svg#icon-star"></use>
          </svg>
        </div>
        <p>{camper.rating}</p>
        <p>({camper.reviews[0].reviewer_rating} Reviews)</p>

        <div>
          <svg width="16" height="16" className={css.iconMap}>
            <use href="/src/images/svg-sprite.svg#icon-map"></use>
          </svg>
        </div>
        <p>{camper.location}</p>
      </div>
      <p className={css.imgDescription}>{camper.description}</p>
      <Link to={`/campers/${camper.id}`}>
        <Categories text={camper.engine} />
        <Button text="Show more" />
      </Link>
    </div>
  </div>
);

export default CamperCard;
