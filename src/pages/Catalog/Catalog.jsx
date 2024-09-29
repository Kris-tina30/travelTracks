import React, { useState, useEffect } from 'react';
import { fetchCampers } from '../../services/api';
import SearchBar from '../../components/SearchBar/SearchBar';
import CampersList from '../../components/CampersList/CampersList';
import css from './Catalog.module.css';

const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [filteredCampers, setFilteredCampers] = useState([]); // Відфільтровані кемпери
  const [filters, setFilters] = useState({
    location: '',
    vehicleType: '',
    ac: false,
    kitchen: false,
    automatic: false,
    TV: false,
    bathroom: false,
  });

  useEffect(() => {
    // Завантажуємо кемпери з API при завантаженні сторінки
    const getCampers = async () => {
      const data = await fetchCampers();
      setCampers(data.items);
      setFilteredCampers(data.items); // Спочатку показуємо всі кемпери
    };

    getCampers();
  }, []);

  // Функція для фільтрації кемперів
  const filterCampers = () => {
    let filtered = campers;

    // Фільтр за локацією
    if (filters.location) {
      filtered = filtered.filter(camper =>
        camper.location.toLowerCase().includes(filters.location.toLowerCase()),
      );
    }

    // Фільтр за типом кузова
    if (filters.vehicleType) {
      filtered = filtered.filter(camper => camper.form === filters.vehicleType);
    }

    // Фільтр за наявністю кондиціонера
    if (filters.ac) {
      filtered = filtered.filter(camper => camper.AC);
    }

    // Фільтр за наявністю кухні
    if (filters.kitchen) {
      filtered = filtered.filter(camper => camper.kitchen);
    }
    if (filters.automatic) {
      filtered = filtered.filter(camper => camper.transmission === 'automatic');
    }
    if (filters.TV) {
      filtered = filtered.filter(camper => camper.TV);
    }
    if (filters.bathroom) {
      filtered = filtered.filter(camper => camper.bathroom);
    }

    setFilteredCampers(filtered);
  };

  // Функція для оновлення фільтрів
  const updateFilters = newFilters => {
    setFilters(newFilters);
  };

  return (
    <div className={css.catalogContainer}>
      {/* SearchBar приймає поточні фільтри, функцію для оновлення фільтрів, і функцію фільтрації */}
      <SearchBar filters={filters} updateFilters={updateFilters} filterCampers={filterCampers} />
      {/* CampersList приймає відфільтровані кемпери */}
      <CampersList campers={filteredCampers} />
    </div>
  );
};

export default Catalog;
