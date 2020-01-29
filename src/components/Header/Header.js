import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.scss';

const Header = () => (
  <header className='header'>
    <nav className='navigation'>
      <NavLink
        to={'/'}
        exact
        className='navigation__link'
        activeClassName='navigation__link_active'
      >
        Welcome
      </NavLink>
      <NavLink
        to={'/summary'}
        className='navigation__link'
        activeClassName='navigation__link_active'
      >
        Summary
      </NavLink>
      <NavLink
        to={'/skills'}
        className='navigation__link'
        activeClassName='navigation__link_active'
      >
        Skills
      </NavLink>
      <NavLink
        to={'/projects'}
        className='navigation__link'
        activeClassName='navigation__link_active'
      >
        Projects
      </NavLink>
      <NavLink
        to={'/education'}
        className='navigation__link'
        activeClassName='navigation__link_active'
      >
        Education
      </NavLink>
      <NavLink
        to={'/contacts'}
        className='navigation__link'
        activeClassName='navigation__link_active'
      >
        Contacts
      </NavLink>
    </nav>
  </header>
);

export default Header;