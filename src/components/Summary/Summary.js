import React from 'react';

import './Summary.scss';
import img from '../../assets/my-photo.jpg';

const Summary = () => (
  <main className='summary'>
    <img 
      src={img} 
      alt='my'
      className='summary__img'
    />
    <p className='summary__text'>
      Hello!
    </p>
    <p className='summary__text'>
    Hello! My name is Evgeniy Yakimchuk. I'm a Frontend developer with more than 2 years of well-rounded experience.
Hardworking person who is attentive to details and focused on quality of work.
Like to learn the latest technologies and continuously improves myself, always try to help other team members.
Conflict-free and stress resistant enough. I am not afraid of taking responsibility. Capable of managing my part of a project from start to finish. I always strive to deliver my work on time and enjoy building pixel-perfect UI.
My enthusiasm and knowledge of JavaScript will help me to create the product that will meet the best expectations.

    </p>
  </main>
);

export default Summary;