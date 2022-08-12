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
      className={`hidden md:block z-10 left-0 top-3  transition w-full ${
        isFixed ? "fixed fixed-nav" : "absolute"
      }`}
    >
      <nav>
        <div className="mx-auto flex justify-between items-center py-5 md:px-5 lg:px-16 xl:px-8">
          <Link to="/home" className="nav-brand">
            {!isFixed ? (
              <>
                <img
                  className="h-10 lg:block hidden"
                  src="./images/dark.png"
                  alt=""
                />
                <img
                  className="h-10 md:h-9 lg:hidden block"
                  src="./images/download .png"
                  alt=""
                />
              </>
            ) : (
              <img className="h-10 block" src="./images/dark.png" alt="" />
            )}
          </Link>
          <ul className="flex space-x-3 items-center">
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
                    <div className="hover-md overflow-hidden font-medium flex flex-col h-8 px-2 text-[16px] leading-[30px] capitalize md:text-white lg:text-semiBlack">
                      <span>{item.text}</span>
                      <span>{item.text}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
            <button className="hover-btn overflow-hidden font-medium flex flex-col h-11 border-2 md:border-white lg:border-semiBlack md:text-white lg:text-semiBlack text-[16px] leading-[30px] md:px-6 lg:px-8 rounded-md py-[6px]">
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
