import { NavLink } from "react-router";
import { HeaderWrapper } from "./Header.styled";
import { ROUTES_KEY } from "@/constants/ROUTES_KEY";
import { FaClipboardList } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className="nav__link" to={ROUTES_KEY.HOME_ROUTE}>
              <IoHomeSharp />
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to={ROUTES_KEY.ABOUT_US_ROUTE}>
              <FaInfoCircle />
              About Us
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to={ROUTES_KEY.VACANCIES_ROUTE}>
              <FaClipboardList />
              Vacancies
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};
