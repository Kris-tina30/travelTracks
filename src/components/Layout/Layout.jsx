import Header from '../Header/Header';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
