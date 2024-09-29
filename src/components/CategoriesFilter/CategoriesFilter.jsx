import React from 'react';
import css from './CategoriesFilter.module.css'; // Імпорт файлу зі стилями

const CategoriesFilter = ({
  type = 'radio',
  value,
  icon,
  text,
  name,
  filters,
  handleInputChange,
}) => {
  return (
    <label className={css.lableFilter}>
      <input
        type={type}
        name={name}
        value={value}
        checked={filters[name] === value || filters[name] === true}
        onChange={handleInputChange}
        className={css.inputFilter}
      />
      <div className={css.contentFilter}>
        <svg className={css.iconFilter} width="32" height="32">
          <use href={icon}></use>
        </svg>
        {text === 'Fully Integrated' ? (
          <span className={css.textFilter}>
            <span>Fully</span>
            <span>Integrated</span>
          </span>
        ) : (
          <span className={css.textFilter}>{text}</span>
        )}
      </div>
    </label>
  );
};

export default CategoriesFilter;
