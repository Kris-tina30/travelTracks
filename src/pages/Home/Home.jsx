import css from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={css.hero}>
      <h1>Campers of your dreams</h1>
      <h2 className={css.heroText}>You can find everything you want in our catalog</h2>
      <Link to="/catalog">
        <button type="button" className={css.buttonRed} aria-label="Open new page">
          View Now
        </button>
      </Link>
    </div>
  );
};

export default Home;
