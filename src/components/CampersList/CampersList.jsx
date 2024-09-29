import css from './CampersList.module.css';
import CamperCard from '../CamperCard/CamperCard';

const CampersList = ({ campers }) => {
  if (campers.length === 0) {
    return <div>No campers found.</div>;
  }

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
