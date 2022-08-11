import { Link } from "react-scroll";
import { nav } from "../utilities/nav";

const Mobile = () => {
  return (
    <header className="fixed z-10 shadow-[-1px_-1px_6px_0px_#0000002b] bg-white bottom-0 left-0 w-full block md:hidden">
      <nav>
        <div className="container mx-auto px-5 py-2">
          <ul className="flex space-x-6 items-center justify-between">
            {nav.map((item, id) => {
              return (
                <li key={id}>
                  <Link
                    spy={true}
                    smooth={true}
                    activeClass={"mobileNav__active"}
                    className="text-[12px] leading-[12px] text-semiBlack capitalize flex justify-center items-center flex-col space-y-3"
                    to={`${item.text}`}
                  >
                    {item.icon}

                    <span className="text-center">{item.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Mobile;
