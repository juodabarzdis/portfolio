import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import classNames from "classnames";
import styles from "./Navigation.module.scss";
import Button from "../Button/Button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuClass = classNames(styles.navigation, {
    [styles["navigation--open"]]: isOpen,
    [styles["navigation--close"]]: !isOpen,
  });

  return (
    <nav className={styles["navigation-wrapper"]}>
      <button className={styles["burger-menu"]} onClick={handleOpen}>
        <p>menu</p>
      </button>
      <div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={menuClass}
      >
        <Link to="/">Lukas Baksys</Link>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.navigation__item}>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        <Button>Hire me</Button>
      </div>
    </nav>
  );
};

export default Navigation;
