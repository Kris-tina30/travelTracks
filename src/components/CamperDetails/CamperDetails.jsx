import React, { useEffect, useState } from 'react';
import { fetchCamperById } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './CamperDetails.module.css';

const CamperDetails = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCamper = async () => {
      try {
        const data = await fetchCamperById(id);
        setCamper(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getCamper();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!camper) return <div>No camper found.</div>;

  return (
    <div className={css.camperDetails}>
      <h1>{camper.name}</h1>
      <p>Price: ${camper.price}</p>
      <p>Location: {camper.location}</p>
      <p>Description: {camper.description}</p>
      <img src={camper.gallery[0].original} alt={camper.name} />
    </div>
  );
};

export default CamperDetails;
