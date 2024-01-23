import { NavLink } from "react-router-dom";
import { Button } from "../components/Button/Button";

const Navbar = () => {
  return (
    <header className="w-full px-12 pb-[19px] pt-5">
      <nav className="flex w-full items-center justify-between">
        <div>Logo</div>
        <ul className="inline-flex items-center justify-start gap-20 self-stretch">
          <li>
            <NavLink
              to="/"
              className="text-xsm font-normal text-blue-primary-color-700"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about-us"
              className="text-xsm font-normal text-blue-primary-color-700"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="services"
              className="text-xsm font-normal text-blue-primary-color-700"
            >
              Services
            </NavLink>
          </li>
          <li>
            <Button label="Contact" btnType="tertiary" labelType="secondary" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
