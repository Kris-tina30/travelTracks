import React from 'react';
import CategoriesFilter from '../CategoriesFilter/CategoriesFilter';
import css from './SearchBar.module.css';

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
      <label>
        Location
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleInputChange}
          placeholder="Enter location"
        />
      </label>
      <p>Filters</p>
      {/* Фільтрація за типом транспорту */}

      {/* Фільтрація за обладнанням */}
      <div className={css.categoriesFilter}>
        <label>Vehicle Equipment</label>
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
      <div className={css.categoriesFilter}>
        <label>Vehicle type</label>
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
      <button onClick={filterCampers}>Search</button>
    </div>
  );
};

export default SearchBar;
