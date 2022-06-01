import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpened, setNavbarOpened] = useState(false);

  const navLinks = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },

    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },

    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  const handleToggle = () => {
    setNavbarOpened((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpened(false);
  };

  return (
    <div className="nav-col flex">
      <h1>Math Magicians</h1>
      <nav className={`navBar ${navbarOpened ? 'show-menu' : ''}`}>
        <button type="button" onClick={handleToggle}>
          {navbarOpened ? (<MdClose style={{ color: '#fff', height: '40px', width: '40px' }} />) : (<FiMenu style={{ color: '#7b7b7b', height: '40px', width: '40px' }} />)}
        </button>
        <ul className={`${navbarOpened ? 'navList-sm' : 'navList-bg'}`}>
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <NavLink
                to={navLink.path}
                activeclassname="active-link"
                exact="true"
                onClick={() => closeMenu()}
              >
                {navLink.text}
              </NavLink>
            </li>
          ))}

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
