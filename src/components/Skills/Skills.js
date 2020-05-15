import React, {Component} from 'react';

import './Skills.scss';

const technologies = [
  'html',
  'css/scss/less',
  'javascript',
  'typescript',
  'node.js'
];

const frameworks = [
  'angular',
  'react',
  'bootstrap',
  'material',
  'protractor'
];

const tools = [
  'git',
  'webpack',
  'webstorm',
  'vs code',
  'photoshop'
];

const practices = [
  'responsive / adaptive markup',
  'bem',
  'agile'
];

class Skills extends Component {
  state = {
    technologies: false,
    frameworks: false,
    tools: false,
    practices: false
  }

  openSkillsSection = (field) => {
    switch(field) {
      case 'technologies':
        this.setState({technologies: !this.state.technologies});
        break;
      case 'frameworks':
        this.setState({frameworks: !this.state.frameworks});
        break;
      case 'tools':
        this.setState({tools: !this.state.tools});
        break;
      case 'practices':
        this.setState({practices: !this.state.practices});
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <main className='skills'>
        <div className='skills__card'>
          <h4 
            className='skills__header' 
            // onClick={() => this.openSkillsSection('technologies')}
            onClick={this.openSkillsSection.bind(this, 'technologies')}
          >
            Programming languages and technologies:
          </h4>
          <ul 
            className={`skills__list ${this.state.technologies ? 'show-skills-section' : null}`}
          >
            {technologies.map((item, i) => {
              return <li className='skills__skill' key={`a${i}`}>{item}</li>
            })}
          </ul>
        </div>

        <div className='skills__card'>
          <h4 
            className='skills__header'
            onClick={this.openSkillsSection.bind(this, 'frameworks')}
          >
            Frameworks and libraries:
          </h4>
          <ul 
            className={`skills__list ${this.state.frameworks ? 'show-skills-section' : null}`}
          >
            {frameworks.map((item, i) => {
              return <li className='skills__skill' key={`b${i}`}>{item}</li>
            })}
          </ul>
        </div>

        <div className='skills__card'>
          <h4 
            className='skills__header'
            onClick={this.openSkillsSection.bind(this, 'tools')}
          >
            Tools:
          </h4>
          <ul 
            className={`skills__list ${this.state.tools ? 'show-skills-section' : null}`}
          >
            {tools.map((item, i) => {
              return <li className='skills__skill' key={`c${i}`}>{item}</li>
            })}
          </ul>
        </div>

        <div className='skills__card'>
          <h4 
            className='skills__header'
            onClick={this.openSkillsSection.bind(this, 'practices')}
          >
            Programming practices:
          </h4>
          <ul 
            className={`skills__list ${this.state.practices ? 'show-skills-section' : null}`}
          >
            {practices.map((item, i) => {
              return <li className='skills__skill' key={`d${i}`}>{item}</li>
            })}
          </ul>
        </div>
      </main>
    );
  }
}

export default Skills;