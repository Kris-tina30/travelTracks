import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import clsx from 'clsx';
import css from './Header.module.css';
import Logo from '../Logo/Logo';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active, isActive && css.current);
};

const Header = () => {
  return (
    <div>
      <header className={css.headerContainer}>
        <Logo />
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
          {/* <NavLink to="/details" className={buildLinkClass}>
            Details
          </NavLink> */}
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Header;
