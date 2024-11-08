import React from 'react';
import css from './Categories.module.css';

const Categories = ({
  engine,
  AC,
  bathroom,
  kitchen,
  TV,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
}) => {
  return (
    <div>
      <ul className={css.categories}>
        {AC && (
          <li className={css.categoriesList}>
            <svg className={css.categoriesSvg} width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-AC"></use>
            </svg>
            AC
          </li>
        )}
        {engine && (
          <li className={css.categoriesList}>
            <svg className={css.categoriesSvg} width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-petrol"></use>
            </svg>
            Petrol
          </li>
        )}
        {bathroom && (
          <li className={css.categoriesList}>
            <svg className={css.categoriesSvg} width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-bathroom"></use>
            </svg>
            Bathroom
          </li>
        )}
        {kitchen && (
          <li className={css.categoriesList}>
            <svg className={css.categoriesSvg} width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-kitchen"></use>
            </svg>
            Kitchen
          </li>
        )}
        {TV && (
          <li className={css.categoriesList}>
            <svg className={css.categoriesSvg} width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-tv"></use>
            </svg>
            TV
          </li>
        )}
        {radio && (
          <li className={css.categoriesList}>
            <svg className={css.categoriesSvg} width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-radio"></use>
            </svg>
            Radio
          </li>
        )}
        {refrigerator && (
          <li className={css.categoriesList}>
            <svg className={css.categoriesSvg} width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-refrigerator"></use>
            </svg>
            Refrigerator
          </li>
        )}
        {microwave && (
          <li className={css.categoriesList}>
            <svg className={css.categoriesSvg} width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-microwave"></use>
            </svg>
            Microwave
          </li>
        )}
        {gas && (
          <li className={css.categoriesList}>
            <svg className={css.categoriesSvg} width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-gas"></use>
            </svg>
            Gas
          </li>
        )}
        {water && (
          <li className={css.categoriesList}>
            <svg className={css.categoriesSvg} width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-water"></use>
            </svg>
            Water
          </li>
        )}
      </ul>
    </div>
  );
};

export default Categories;
