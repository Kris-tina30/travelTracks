import Button from '../../components/Button/Button';
import css from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={css.hero}>
      <h1>Campers of your dreams</h1>
      <h2 className={css.heroText}>You can find everything you want in our catalog</h2>
      <Link to="/catalog">
        <Button text="View Now" />
      </Link>
    </div>
  );
};

export default Home;
