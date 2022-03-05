// @src/components/Navbar/index.jsx
import React from "react";
import { CgMonday } from "react-icons/cg";
import classNames from "classnames";

import styles from "./Navbar.module.css";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
        <CgMonday />
      </span>
      <ul className={styles.navItems}>
        {navigationData.map((item, index) => (
          <li
            className={classNames([
              styles.navItem,
              currentRoute === item && styles.selectedNavItem,
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className={styles.actions}>Logout</button>
    </nav>
  );
};

export default Navbar;