import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';

const Main = () => (
  <main className='main'>
    <h1 className='main__header'>Evgeniy Yakimchuk</h1>
    <p className='main__text'>Front-end developer</p>
    <Link
      to={'/summary'}
      exact='false'
      className='main__button'
    >
      To learn more
    </Link>
  </main>
);

export default Main;