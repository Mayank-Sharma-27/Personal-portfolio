import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Modal } from "../Modal/Modal.jsx";

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
      <Link className={styles.title} to="/">
        Mayank Sharma
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
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
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#experience">Experience</Link>
          </li>
          <li>
            <Link to="/#blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
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
