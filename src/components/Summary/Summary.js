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
      My name is Evgeniy Yakimchuk. I studied front-end development at
Educational Center of Hi-Tech Park. The final project was the game “Tennis” with
saving data on a server with AJAX. Then, I was an intern in the project “subbotnik.by”.
My task was to write autotests using the Protractor framework. After the internship, I
began to study Angular and apply new knowledge and skills in the project “Home
Accounting”. I also started learning English and improving JS knowledge. After that, I
joined the online front-end web development course of the Rolling Scopes School.
During this course, I made a lot of projects such as Piskel Clone, Youtube Client, Chat,
and landing markup. I have finished this training so far. Since June 2019, I have been
working as a freelance developer.
    </p>
  </main>
);

export default Summary;