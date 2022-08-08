import { NavLink } from "react-router-dom";
import Buton from "./Helper/button";
import { nav } from "./utilities/nav";

const Header = () => {
  return (
    <header className="fixed md:static z-10 bg-grayWhite bottom-0 left-0 w-full py-3 lg:container mx-auto px-5">
      <nav>
        <div className="nav-container">
          <ul className="navlink-container flex items-center justify-between">
            <a className="hidden md:block" href="#home">
              <img className="w-20" src="/images/dark.png" alt="" />
            </a>
            {nav.map((link, id) => (
              <li className="nav-item" key={id}>
                <NavLink
                  to={`#${link.text}`}
                  className="nav-link flex flex-col items-center space-y-1"
                >
                  <span className="block md:hidden">{link.icon}</span>
                  <span className="capitalize text-xs font-medium text-semiBlack md:text-[16px] md:leading-[23px]">
                    {link.text}
                  </span>
                </NavLink>
              </li>
            ))}
            <li className="hidden md:block">
              <Buton text={"Buy Now"} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
