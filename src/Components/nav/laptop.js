import { useState } from "react";
import { Link } from "react-scroll";
import { nav } from "../utilities/nav";

const LargeDeviceNav = () => {
  const [isFixed, setIsFixed] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });
  return (
    <header
      className={`hidden md:block z-10 left-0 top-0 w-full ${
        isFixed ? "fixed fixed-nav" : "absolute"
      }`}
    >
      <nav>
        <div className="container mx-auto flex justify-between items-center py-5 px-5">
          <Link to="/home" className="nav-brand">
            <img className="h-10" src="./images/dark.png" alt="" />
          </Link>
          <ul className="flex space-x-2 items-center">
            {nav.map((item, id) => {
              return (
                <li key={id} className="cursor-pointer">
                  <Link
                    offset={-95}
                    spy={true}
                    smooth={true}
                    activeClass={"navActive"}
                    to={item.text}
                  >
                    <div className="hover-md overflow-hidden flex flex-col h-8 px-2 text-[16px] leading-[30px] capitalize md:text-white lg:text-semiBlack">
                      <span>{item.text}</span>
                      <span>{item.text}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
            <button className="hover-btn overflow-hidden flex flex-col h-12 border-2 lg:border-[6e6e6e] md:border-white lg:border-semiBlack md:text-white lg:text-semiBlack text-[16px] leading-[30px] px-8 rounded py-[6px]">
              <span>Buy Now</span>
              <span>Buy Now</span>
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default LargeDeviceNav;
