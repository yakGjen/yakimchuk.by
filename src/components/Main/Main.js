import React from 'react';

import './Main.scss';
import img from '../../assets/my-photo.jpg';

const Main = () => (
  <main className='main'>
    <img 
      src={img} 
      alt='my'
      className='main__img'
    />
    <p>
      Main
    </p>
  </main>
);

export default Main;