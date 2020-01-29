import React from 'react';

import './Skills.scss';

const mySkills = [
  'html',
  'css',
  'scss/less',
  'flexbox/grid',
  'javascript',
  'typescript',
  'angular',
  'react.js',
  'node.js',
  'webpack',
  'git',
  'english: pre-intermediate',
  'portfolio: github.com/yakGjen'
];

const Skills = () => (
  <main className='skills'>
    <ul>
      {mySkills.map((item, i) => {
        return <li className='skills__skill' key={i}>{item}</li>
      })}
    </ul>
  </main>
);

export default Skills;