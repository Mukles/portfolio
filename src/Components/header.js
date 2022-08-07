import { nav } from "./utilities/nav";

const Header = () => {
  return (
    <header className="fixed hidden bg-grayWhite bottom-0 left-0 w-full px-5 py-3">
      <nav>
        <div className="nav-container">
          <ul className="navlink-container flex items-center justify-between">
            {nav.map((link) => (
              <li className="nav-item">
                <a
                  href={`#${link.text}`}
                  className="nav-link flex flex-col items-center space-y-1"
                >
                  {link.icon}
                  <span className="capitalize text-xs font-medium text-semiBlack">
                    {link.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
