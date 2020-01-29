import React from 'react';

import './Education.scss';

const Education = () => (
  <main className='education'>
    <article className='education__item'>
      <h6 className='education__header'>
        The Rolling Scopes School
      </h6>
      <p className='education__text'>
        Course: Front-end developer
      </p>
    </article>
    <article className='education__item'>
      <h6 className='education__header'>Educational Center of HTP</h6>
      <p className='education__text'>Specialization: Front-end developer</p>
      <p className='education__text'>Modules:</p>
      <p className='education__text'>
        «Development websites with HTML and CSS»
      </p>
      <p className='education__text'>
        «Development web applications on Javascript»
      </p>
    </article>
    <article className='education__item'>
      <h6 className='education__header'>
        MSPU named after I.P.Shamyakin
      </h6>
      <p className='education__text'>
        Specialization: Master's degree pedagogical science.
      </p>
    </article>
  </main>
);

export default Education;