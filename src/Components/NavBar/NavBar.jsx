import { useState } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isDirectorsOpen, setIsDirectorsOpen] = useState(false);

  return (
    <div>
      <nav className={styles.container_nav}>
        <img src="../../../Images/logo1.png" alt="" />
        <ul>
          {/* Menú desplegable para Categorías */}
          <li
            className={`${styles.list_items} ${styles.dropdown}`}
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          >
            Categorías
            {/* Submenú para Categorías */}
            {isCategoriesOpen && (
              <ul className={styles.dropdown_menu}>
                <li className={styles.list_items}>
                  <a href="#" className={styles.enlaces}>
                    Todas las películas
                  </a>
                </li>
                <li className={styles.list_items}>
                  <a href="#" className={styles.enlaces}>
                    Ciencia ficción
                  </a>
                </li>
                <li className={styles.list_items}>
                  <a href="#" className={styles.enlaces}>
                    Aventura
                  </a>
                </li>
                <li className={styles.list_items}>
                  <a href="#" className={styles.enlaces}>
                    Terror
                  </a>
                </li>
                <li className={styles.list_items}>
                  <a href="#" className={styles.enlaces}>
                    Policial
                  </a>
                </li>
                <li className={styles.list_items}>
                  <a href="#" className={styles.enlaces}>
                    Suspenso
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Menú desplegable para Directores */}
          <li
            className={`${styles.list_items} ${styles.dropdown}`}
            onClick={() => setIsDirectorsOpen(!isDirectorsOpen)}
          >
            Directores
            {/* Submenú para Directores */}
            {isDirectorsOpen && (
              <ul className={styles.dropdown_menu}>
                <li className={styles.list_items}>
                  <a href="#" className={styles.enlaces}>
                    Christopher Nolan
                  </a>
                </li>
                <li className={styles.list_items}>
                  <a href="#" className={styles.enlaces}>
                    Steven Spielberg
                  </a>
                </li>
                <li className={styles.list_items}>
                  <a href="#" className={styles.enlaces}>
                    Quentin Tarantino
                  </a>
                </li>
                <li className={styles.list_items}>
                  <a href="#" className={styles.enlaces}>
                    Martin Scorsese
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
