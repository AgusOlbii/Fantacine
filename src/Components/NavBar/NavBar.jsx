import { useState } from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isDirectorsOpen, setIsDirectorsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <div>
      <nav className={styles.container_nav}>
        <img src="../../../Images/logo1.png" alt="" />
        <ul>
          {/* Drop-down menu for Categories */}
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

          {/* Drop-down menu for Directors */}
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
        <input
          type="text"
          placeholder="Buscar..."
          className={styles.navBarInput}
        />
        <button type="submit" className={styles.NavButtons}>
          <FontAwesomeIcon icon={faSearch} className={styles.awesomeIcons} />
        </button>
        <div className={styles.navIconsRight}>
          <button type="submit" className={styles.NavButtons}>
            <FontAwesomeIcon icon={faHome} className={styles.awesomeIcons} />
          </button>
          <li
            className={`${styles.list_items} ${styles.dropdown}`}
            onClick={() => setIsUserOpen(!isUserOpen)}
          >
            <button type="submit" className={styles.NavButtons}>
              <FontAwesomeIcon
                icon={faUserCircle}
                className={styles.awesomeIcons}
              />
            </button>
            {isUserOpen && (
              <ul className={`${styles.dropdown_menu} ${styles.dropdownUser}`}>
                <li className={styles.list_items}>
                  <a href="#" className={styles.enlaces}>
                    Iniciar sesion
                  </a>
                </li>
                <li className={styles.list_items}>
                  <a href="#" className={styles.enlaces}>
                    Registrarme
                  </a>
                </li>
              </ul>
            )}
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
