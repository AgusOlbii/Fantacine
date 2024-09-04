import { useState } from "react";
import stylesNav from "./NavBar.module.css";
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
      <nav className={stylesNav.container_nav}>
        <img src="../../../Images/logo1.png" alt="Page Logo" />
        <ul>
          {/* Drop-down menu for Categories */}
          <li
            className={`${stylesNav.list_items} ${stylesNav.dropdown}`}
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          >
            Categorías
            {/* Submenú para Categorías */}
            {isCategoriesOpen && (
              <ul className={stylesNav.dropdown_menu}>
                <li className={stylesNav.list_items}>
                  <a href="#" className={stylesNav.enlaces}>
                    Todas las películas
                  </a>
                </li>
                <li className={stylesNav.list_items}>
                  <a href="#" className={stylesNav.enlaces}>
                    Ciencia ficción
                  </a>
                </li>
                <li className={stylesNav.list_items}>
                  <a href="#" className={stylesNav.enlaces}>
                    Aventura
                  </a>
                </li>
                <li className={stylesNav.list_items}>
                  <a href="#" className={stylesNav.enlaces}>
                    Terror
                  </a>
                </li>
                <li className={stylesNav.list_items}>
                  <a href="#" className={stylesNav.enlaces}>
                    Policial
                  </a>
                </li>
                <li className={stylesNav.list_items}>
                  <a href="#" className={stylesNav.enlaces}>
                    Suspenso
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Drop-down menu for Directors */}
          <li
            className={`${stylesNav.list_items} ${stylesNav.dropdown}`}
            onClick={() => setIsDirectorsOpen(!isDirectorsOpen)}
          >
            Directores
            {/* Submenú para Directores */}
            {isDirectorsOpen && (
              <ul className={stylesNav.dropdown_menu}>
                <li className={stylesNav.list_items}>
                  <a href="#" className={stylesNav.enlaces}>
                    Christopher Nolan
                  </a>
                </li>
                <li className={stylesNav.list_items}>
                  <a href="#" className={stylesNav.enlaces}>
                    Steven Spielberg
                  </a>
                </li>
                <li className={stylesNav.list_items}>
                  <a href="#" className={stylesNav.enlaces}>
                    Quentin Tarantino
                  </a>
                </li>
                <li className={stylesNav.list_items}>
                  <a href="#" className={stylesNav.enlaces}>
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
          className={stylesNav.navBarInput}
        />
        <button type="submit" className={stylesNav.NavButtons}>
          <FontAwesomeIcon icon={faSearch} className={stylesNav.awesomeIcons} />
        </button>
        <div className={stylesNav.navIconsRight}>
          <button type="submit" className={stylesNav.NavButtons}>
            <FontAwesomeIcon icon={faHome} className={stylesNav.awesomeIcons} />
          </button>
          <li
            className={`${stylesNav.list_items} ${stylesNav.dropdown}`}
            onClick={() => setIsUserOpen(!isUserOpen)}
          >
            <button type="submit" className={stylesNav.NavButtons}>
              <FontAwesomeIcon
                icon={faUserCircle}
                className={stylesNav.awesomeIcons}
              />
            </button>
            {isUserOpen && (
              <ul
                className={`${stylesNav.dropdown_menu} ${stylesNav.dropdownUser}`}
              >
                <li className={stylesNav.list_items}>
                  <a href="#" className={stylesNav.enlaces}>
                    Iniciar sesion
                  </a>
                </li>
                <li className={stylesNav.list_items}>
                  <a href="#" className={stylesNav.enlaces}>
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
