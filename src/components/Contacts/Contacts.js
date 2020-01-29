import React from 'react';

import './Contacts.scss';

const Contacts = () => (
  <main>
    <ul className='contacts'>
      <li className='contacts__item'>
        <i className="fas fa-phone"></i>
        +375445506338 (Viber, Telegram, WhatsApp); +375336529387
      </li>
      <li className='contacts__item'>
        <i className="fas fa-envelope-open-text"></i>
        yak.gjen@gmail.com
      </li>
      <li className='contacts__item'>
        <i className="fab fa-skype"></i>
        evgeniy.yakimchuk
      </li>
      <li className='contacts__item'>
        <i className="fab fa-linkedin-in"></i>
        https://www.linkedin.com/in/evgeniy-yakimchuk-3175b4161
      </li>
      <li className='contacts__item'>
        <i className="fab fa-github"></i>
        https://github.com/yakGjen
      </li>
    </ul>
  </main>
);

export default Contacts;