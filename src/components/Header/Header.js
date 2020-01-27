import React from 'react';
import { Link } from "react-router-dom";

import './Header.scss';

const Header = () => (
  <header className='header'>
    <nav className='navigation'>
      <Link
        to={'/'}
        exact='true'
        className='navigation__link'
      >
        <li className='navigation__item'>
          Welcome
        </li>
      </Link>
      <Link
        to={'/summary'}
        exact='false'
        className='navigation__link'
      >
        <li className='navigation__item'>
          Summary
        </li>
      </Link>
      <Link
        to={'/skills'}
        exact='false'
        className='navigation__link'
      >
        <li className='navigation__item'> 
          Skills
        </li>
      </Link>
      <Link
        to={'/experience'}
        exact='false'
        className='navigation__link'
      >
        <li className='navigation__item'>
          Experience
        </li>
      </Link>
      <Link
        to={'/education'}
        exact='false'
        className='navigation__link'
      >
        <li className='navigation__item'>
          Education
        </li>
      </Link>
      <Link
        to={'/contacts'}
        exact='false'
        className='navigation__link'
      >
        <li className='navigation__item'>
          Contacts
        </li>
      </Link>
    </nav>
  </header>
);

export default Header;