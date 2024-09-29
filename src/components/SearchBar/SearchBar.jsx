import React from 'react';
import CategoriesFilter from '../CategoriesFilter/CategoriesFilter';
import css from './SearchBar.module.css';
import Button from '../Button/Button';

const SearchBar = ({ filters, updateFilters, filterCampers }) => {
  // Функція для оновлення поля у фільтрах
  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    updateFilters({
      ...filters,
      [name]: newValue,
    });
  };

  return (
    <div>
      {/* Фільтрація за локацією */}
      <div className={css.locationContainer}>
        <label className={css.locationFilter}>
          Location
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleInputChange}
            placeholder="City"
            className={css.locationInput}
          />
        </label>

        <svg className={css.iconLocation} width="20" height="20">
          <use href="/src/images/svg-sprite.svg#icon-map"></use>
        </svg>
      </div>
      <p className={css.textFilters}>Filters</p>
      {/* Фільтрація за типом транспорту */}

      {/* Фільтрація за обладнанням */}
      <div>
        <label className={css.lableFilters}>Vehicle Equipment</label>
        <div className={css.categoriesFilter}>
          <CategoriesFilter
            type="checkbox"
            name="ac"
            value="ac"
            icon="/src/images/svg-sprite.svg#icon-wind"
            text="AC"
            filters={filters}
            handleInputChange={handleInputChange}
          />
          <CategoriesFilter
            type="checkbox"
            name="automatic"
            value="automatic"
            icon="/src/images/svg-sprite.svg#icon-diagram"
            text="Automatic"
            filters={filters}
            handleInputChange={handleInputChange}
          />
          <CategoriesFilter
            type="checkbox"
            name="kitchen"
            value="kitchen"
            icon="/src/images/svg-sprite.svg#icon-cup-hot"
            text="Kitchen"
            filters={filters}
            handleInputChange={handleInputChange}
          />
          <CategoriesFilter
            type="checkbox"
            name="TV"
            value="TV"
            icon="/src/images/svg-sprite.svg#icon-tv"
            text="TV"
            filters={filters}
            handleInputChange={handleInputChange}
          />
          <CategoriesFilter
            type="checkbox"
            name="bathroom"
            value="bathroom"
            icon="/src/images/svg-sprite.svg#icon-droplet"
            text="Bathroom"
            filters={filters}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
      <div className={css.categoriesFilterContainer}>
        <label>Vehicle type</label>
        <div className={css.categoriesFilter}>
          <CategoriesFilter
            type="radio"
            name="vehicleType"
            value="panelTruck"
            icon="/src/images/svg-sprite.svg#icon-grid-1x2"
            text="Van"
            filters={filters}
            handleInputChange={handleInputChange}
          />
          <CategoriesFilter
            type="radio"
            name="vehicleType"
            value="fullyIntegrated"
            icon="/src/images/svg-sprite.svg#icon-grid"
            text="Fully Integrated"
            filters={filters}
            handleInputChange={handleInputChange}
          />
          <CategoriesFilter
            type="radio"
            name="vehicleType"
            value="alcove"
            icon="/src/images/svg-sprite.svg#icon-grid-gap"
            text="Alcove"
            filters={filters}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
      <Button text="Search" onClick={filterCampers} />
    </div>
  );
};

export default SearchBar;
