import React, {Component} from 'react';
import CardModal from './Modal/Modal';

import './Projects.scss';

import cultureHome from '../../assets/projects/culture/home.jpg';
import cultureItems from '../../assets/projects/culture/items.jpg';
import cultureMobile from '../../assets/projects/culture/mobile.jpg';

import youtubeAngularMain from '../../assets/projects/youtube-angular/main.png';
import youtubeAngularLogin from '../../assets/projects/youtube-angular/login.png';
import youtubeAngularDetailed from '../../assets/projects/youtube-angular/detailed.png';
import youtubeAngular404 from '../../assets/projects/youtube-angular/404.png';

import piskelMain from '../../assets/projects/piskel/main.jpg';
import piskelLogin from '../../assets/projects/piskel/login.jpg';

import youtubeWebpackMain from '../../assets/projects/youtube-webpack/main.png';
import youtubeWebpackFirst from '../../assets/projects/youtube-webpack/first.png';

import rssChatWelcom from '../../assets/projects/rss-chat/welcom.png';
import rssChatLogin from '../../assets/projects/rss-chat/login.png';

import animationPlayerMain from '../../assets/projects/animation-player/main.png';

const myProjects = [
  {
    name: 'Culture portal',
    img: cultureHome,
    imgArr: [cultureHome, cultureItems, cultureMobile],
    href: 'https://nostalgic-goldstine-17dca9.netlify.app/',
    environment: ['html', 'css', 'javascript', 'angular', 'angular-material', 'scully', 'contentful']
  },
  {
    name: 'Youtube-Angular',
    img: youtubeAngularMain,
    imgArr: [youtubeAngularLogin, youtubeAngularMain, youtubeAngularDetailed, youtubeAngular404],
    href: 'https://yakgjen.github.io/youtube-angular',
    environment: ['html', 'css', 'javascript', 'angular', 'angular-material']
  },
  {
    name: 'Piskel clone',
    img: piskelMain,
    imgArr: [piskelLogin, piskelMain],
    href: 'https://github.com/yakGjen/piskel-clone-build',
    environment: ['html', 'css', 'javascript', 'angular']
  },
  {
    name: 'Youtube-Webpack',
    img: youtubeWebpackMain,
    imgArr: [youtubeWebpackFirst, youtubeWebpackMain],
    href: 'https://yakgjen.github.io/youtube-client/',
    environment: ['html', 'css', 'javascript', 'webpack']
  },
  {
    name: 'Rss-Chat',
    img: rssChatWelcom,
    imgArr: [rssChatWelcom, rssChatLogin],
    href: 'https://yakgjen.github.io/chat-rss-build',
    environment: ['html', 'css', 'javascript', 'react.js']
  },
  {
    name: 'Animation player',
    img: animationPlayerMain,
    imgArr: [animationPlayerMain],
    href: 'https://yakgjen.github.io/animation-player/',
    environment: ['html', 'css', 'javascript', 'webpack']
  }
];

class Projects extends Component {
  state = {
    showUpButton: false
  }

  handleScroll = () => {
    const scroolTop = window.pageYOffset;
    if (scroolTop > 150) {
      this.setState({showUpButton: true});
    } else {
      this.setState({showUpButton: false});
    }
  }

  runToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  componentDidMount() {
    document.onscroll = this.handleScroll;
  }

  componentWillUnmount() {
    document.onscroll = null;
  }

  render() {
    return (
      <main id='main' className='projects'>
        {myProjects.map((item, i) => {
          return (
            <article className='card' key={i}>
              <img src={item.img} alt='project-img' className='card__img' />
              <h3 className='card__header'>{item.name}</h3>
              {/* <a 
                href={item.href}
                target='_blank'
                className='card__button'
              >
                see more
              </a> */}
              <CardModal data={item} />
            </article>
          );
        })}
        <button
          className={`up-btn ${this.state.showUpButton ? 'up-btn__show' : null}`}
          onClick={this.runToTop}
        ><i className="fas fa-chevron-up"></i></button>
      </main>
    );
  }
}

export default Projects;