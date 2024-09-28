import React, { useEffect, useState } from 'react';
import { fetchCampers } from '../../services/api';
import css from './CampersList.module.css'; // Ваші стилі для списку кемперів
import CamperCard from '../CamperCard/CamperCard';

const CampersList = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCampers = async () => {
      try {
        const data = await fetchCampers();
        setCampers(data.items); // Витягуємо масив кемперів
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getCampers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul className={css.campersList}>
      {campers.map(camper => (
        <li key={camper.id} className={css.camperCard}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
