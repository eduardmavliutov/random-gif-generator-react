import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className={classes.NavBar}>
      <ul>
        <li>
          <NavLink 
            to="/"
            activeClassName={classes.active}
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/history"
            activeClassName={classes.active}
          >
            History
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}