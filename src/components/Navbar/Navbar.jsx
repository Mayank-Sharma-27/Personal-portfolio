import React, { useState } from 'react';

import styles from "./Navbar.module.css";

import { getImageUrl } from '../../utils';

import { Modal } from '../Modal/Modal.jsx';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
};

const handleCloseModal = () => {
  setIsOpen(false);
};

  return (
  <nav className={styles.navbar}>
    <a className={styles.title} href='/'>
      Mayank Sharma
    </a>
    <div className={styles.menu}>
        <img className={styles.menuBtn}
          src={
            menuOpen 
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          />
        <ul 
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
            onClick={() => setMenuOpen(false)}>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#experience'>Experience</a>
            </li>
            <li>
                <a href='#blogs'>Blogs</a>
            </li>
            <li>
                <a href='#about'>Contact</a>
            </li>
            <li>
                <a onClick={handleOpenModal}>Resume</a>
                <Modal isOpen={isOpen} onClose={handleCloseModal} />
            </li>

        </ul>
    </div>
  </nav>
  );
};
