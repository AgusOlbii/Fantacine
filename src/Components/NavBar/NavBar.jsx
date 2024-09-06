import { useState } from "react";
import stylesNav from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import Login from "../Login/Login";
import Register from "../register/Register";
const NavBar = () => {
  // creation of UseState and Handle for categories
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const handleCategoriesOpen = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
    setIsDirectorsOpen(false);
    setIsUserOpen(false);
  };
  // creation of UseState and Handle for directors
  const [isDirectorsOpen, setIsDirectorsOpen] = useState(false);
  const handleDirectorsOpen = () => {
    setIsCategoriesOpen(false);
    setIsDirectorsOpen(!isDirectorsOpen);
    setIsUserOpen(false);
  };
  // creation of UseState and Handle for user
  const [isUserOpen, setIsUserOpen] = useState(false);
  const handleUserOpen = () => {
    setIsCategoriesOpen(false);
    setIsDirectorsOpen(false);
    setLogin(false);
    setIsUserOpen(!isUserOpen);
  };
  // creation of UseState and Handle for login
  const [login, setLogin] = useState(false);
  const handleLogin = (e) => {
    e.stopPropagation();
    setLogin(!login);
  };
  const [register, setRegister] = useState(false);
  const handleRegister = (e) => {
    e.stopPropagation();
    setRegister(!register);
  };
  return (
    <div>
      <nav className={stylesNav.container_nav}>
        <img src="../../../Images/logo1.png" alt="Page Logo" />
        <ul>
          {/* Drop-down menu for Categories */}
          <li
            className={`${stylesNav.list_items} ${stylesNav.dropdown}`}
            onClick={handleCategoriesOpen}
          >
            Categorías
            {/* Submenu for Categorías */}
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
            onClick={handleDirectorsOpen}
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
            onClick={handleUserOpen}
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
                  <button className={stylesNav.enlaces} onClick={handleLogin}>
                    Iniciar sesion
                  </button>
                </li>
                <li className={stylesNav.list_items}>
                  <button
                    className={stylesNav.enlaces}
                    onClick={handleRegister}
                  >
                    Registrarme
                  </button>
                </li>
              </ul>
            )}
          </li>
        </div>
      </nav>
      {login && (
        <div className={stylesNav.divLogin}>
          <Login handleLogin={handleLogin} />
        </div>
      )}
      {register && (
        <div className={stylesNav.divLogin}>
          <Register handleRegister={handleRegister} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
