import { NavLink } from "react-router-dom";
import { Button } from "../components/Button/Button";

const Navbar = () => {
  return (
    <header className=" w-full border-b-[1px] border-grey-primary-color-200 px-12 pb-[15px] pt-5">
      <nav className="flex w-full items-center justify-between">
        <div>Logo</div>
        <ul className="inline-flex items-center justify-start gap-16 self-stretch">
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
            <Button
              label="Contact"
              btnType="tertiary"
              className="px-6 pb-[0.6rem] pt-[0.4rem] text-sm"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
