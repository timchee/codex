// // import "../styles/globals.css";
// import GjIcon from "@gjirafatech/gjirafa-icons/GjIcon";
import Link from "next/link";
import classNames from "classnames";


export default function Navbar() {
  const router = useRouter();

  const isActive = (pathname: string) => router.pathname === pathname;
// document.getElementById("burger-menu")?.addEventListener("clicl",() =>{
  
// })
  const myClass = 'my-class';
  const combinedClassName = classNames("navbar__menu", myClass);

  return (
    <>
      <div className="navbar">
        <Link href="/" className="navbar__logo">
        </Link>
        <div className={combinedClassName}>
          <ul>
            <li className="navbar__link">
              <Link href="/Userguide" className={isActive('/Userguide') ? 'active' : ''}>
                Welcome<div className="under--line"></div>
              </Link>
            </li>
            <li className="navbar__link">
              <Link href="" className={isActive('') ? 'active' : ''}>
                User Guide<div className="under--line"></div>
              </Link>
            </li>
            <li className="navbar__link">
              <Link href="/" className={isActive('/') ? 'active' : ''}>
                Technical<div className="under--line"></div>
              </Link>
            </li>
            <li className="navbar__link">
              <Link href="Playground" className={isActive('/Playground') ? 'active' : ''}>
                Playground<div className="under--line"></div>
              </Link>
            </li>
            <li className="navbar__link">
              <Link href="ReleaseNotes" className={isActive('/ReleaseNotes') ? 'active' : ''}>
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
      </div>
    </>
  );
}




import { useRouter } from 'next/router';
