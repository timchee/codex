import Link from "next/link";
import classNames from "classnames";
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const isActive = (pathname: string) => router.pathname === pathname;
  const myClass = 'my-class';
  const combinedClassName = classNames("navbar__menu", myClass);

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="navbar__logo">
        </Link>
        <div className={combinedClassName}>
          <ul>
            <li className="navbar__link">
              <Link href="/" className={isActive('') ? 'active' : ''}>
                Welcome<div className="under--line"></div>
              </Link>
            </li>
            <li className="navbar__link">
              <Link href={`/userguide`} className={isActive('/userguide') ? 'active' : ''}>
                User Guide<div className="under--line"></div>
              </Link>
            </li>
            <li className="navbar__link">
              <Link href="/" className={isActive('/') ? 'active' : ''}>
                Technical<div className="under--line"></div>
              </Link>
            </li>
            <li className="navbar__link">
              <Link href="/" className={isActive('') ? 'active' : ''}>
                Playground<div className="under--line"></div>
              </Link>
            </li>
            <li className="navbar__link">
              <Link href="/" className={isActive('') ? 'active' : ''}>
                Release Notes<div className="under--line"></div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar__search">
          <div className="search">
            <i className="material-icons">search</i>
            <input type="text" placeholder="Quick Search" />
          </div>
          <div className="login">
            <button>Log In</button>
            <button>
              Sign Up
              <span className="material-symbols-rounded" id="menu">open_in_new</span>
            </button>
          </div>
        </div>
        <div className="menu">
          <span className="material-symbols-outlined" id="burger-menu">menu</span>
        </div>
        {/* <div className="dropdown__menu" id="dropdown__menu">
          <ul>
            <li>Welcome</li>
            <li>User Guide</li>
            <li>Technical</li>
            <li>Playground</li>
            <li>Release Notes</li>
          </ul>
        </div> */}
      </nav>
    </>
  );
}
