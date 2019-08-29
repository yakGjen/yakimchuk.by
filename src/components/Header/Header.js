import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => (
  <header>
    <nav>
      <Link
        to={'/'}
        exact='true'
      >
        <li>Welcome</li>
      </Link>
      <Link
        to={'/summary'}
        exact='false'
      >
        <li>Summary</li>
      </Link>
      <Link
        to={'/skills'}
        exact='false'
      >
        <li>Skills</li>
      </Link>
      <Link
        to={'/experience'}
        exact='false'
      >
        <li>Experience</li>
      </Link>
      <Link
        to={'/education'}
        exact='false'
      >
        <li>Education</li>
      </Link>
      <Link
        to={'/contacts'}
        exact='false'
      >
        <li>Contacts</li>
      </Link>
    </nav>
  </header>
);

export default Header;