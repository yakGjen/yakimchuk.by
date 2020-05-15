import React from 'react';
import {NavLink} from 'react-router-dom';

const NavItem = ({name, to, cls, activeCls}) => (
  <NavLink
    to={to}
    exact
    className={cls}
    activeClassName={activeCls}
  >
    {name}
  </NavLink>
);

export default NavItem;