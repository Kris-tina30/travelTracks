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
          <li>
            <svg width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-AC"></use>
            </svg>
            AC
          </li>
        )}
        {engine && (
          <li>
            <svg width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-petrol"></use>
            </svg>
            Petrol
          </li>
        )}
        {bathroom && (
          <li>
            <svg width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-heart"></use>
            </svg>
            Bathroom
          </li>
        )}
        {kitchen && (
          <li>
            <svg width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-kitchen"></use>
            </svg>
            Kitchen
          </li>
        )}
        {TV && (
          <li>
            <svg width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-tv"></use>
            </svg>
            TV
          </li>
        )}
        {radio && (
          <li>
            <svg width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-icon-radio"></use>
            </svg>
            Radio
          </li>
        )}
        {refrigerator && (
          <li>
            <svg width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-heart"></use>
            </svg>
            Refrigerator
          </li>
        )}
        {microwave && (
          <li>
            <svg width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-heart"></use>
            </svg>
            Microwave
          </li>
        )}
        {gas && (
          <li>
            <svg width="20" height="20">
              <use href="/src/images/svg-sprite.svg#icon-heart"></use>
            </svg>
            Gas
          </li>
        )}
        {water && (
          <li>
            <svg width="20" height="20">
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
