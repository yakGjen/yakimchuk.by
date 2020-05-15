import React, {Component} from 'react';
import NavItem from './NavItem/NavItem';

import './Header.scss';

const nav = [
  {name: 'Welcome', to: '/'},
  {name: 'Summary', to: '/summary'},
  {name: 'Skills', to: '/skills'},
  {name: 'Projects', to: '/projects'},
  {name: 'Education', to: '/education'},
  {name: 'Contacts', to: '/contacts'}
];

class Header extends Component {
  state = {
    showMenu: false,
  }

  toogleMobileMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  }

  closeMobileMenu = () => {
    this.setState({showMenu: false});
  }

  render() {
    return (
      <header className='header'>
        <button 
          className='header__mobile-btn'
          onClick={this.toogleMobileMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
        
        <nav 
          className={`navigation ${this.state.showMenu ? 'show-nav' : null}`}
          onClick={this.closeMobileMenu}
        >
          {nav.map((item, i) => {
            return (<NavItem 
                    name={item.name} 
                    to={item.to} 
                    cls='navigation__link'
                    activeCls='navigation__link_active'
                    key={i}
                  />);
          })}
        </nav>
      </header>
    );
  }
}

export default Header;