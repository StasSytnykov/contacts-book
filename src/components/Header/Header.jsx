import { NavLink, Outlet } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={style.list}>
            <li className={style.listItem}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? style.activeLink : style.link
                }
              >
                Home
              </NavLink>
            </li>
            <li className={style.listItem}>
              <NavLink
                to="/add"
                className={({ isActive }) =>
                  isActive ? style.activeLink : style.link
                }
              >
                Add Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
