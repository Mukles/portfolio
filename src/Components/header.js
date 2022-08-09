import { Link } from "react-scroll";
import Buton from "./Helper/button";
import LinkHover from "./Helper/LinkHover";
import { nav } from "./utilities/nav";

const Header = () => {
  return (
    <header className="fixed bottom-0 left-0 md:absolute md:left-[0%] md:top-0 w-full z-10 bg-white md:bg-transparent py-3 mx-auto px-5 lg:py-5">
      <nav>
        <div className="nav-container md:flex md:items-center container mx-auto">
          <a className="hidden md:block" href="#home">
            <img className="w-20" src="/images/dark.png" alt="" />
          </a>
          <ul className="navlink-container flex items-center justify-between md:ml-auto md:space-x-8 bg-transparent">
            {nav.map((link, id) => (
              <li className="nav-item" key={id}>
                <Link
                  to={`${link.text}`}
                  smooth={true}
                  className="nav-link flex flex-col items-center space-y-1"
                >
                  <span className="block md:hidden">{link.icon}</span>
                  <span className="md:hidden capitalize text-xs font-medium text-semiBlack md:text-[16px] md:leading-[23px]">
                    {link.text}
                  </span>
                  <div className="hidden md:block">
                    <LinkHover text={link.text} />
                  </div>
                </Link>
              </li>
            ))}
            <li className="hidden md:block -mt-4">
              <Buton text={"Buy Now"} white={true} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
