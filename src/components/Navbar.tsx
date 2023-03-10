// // import "../styles/globals.css";
// import GjIcon from "@gjirafatech/gjirafa-icons/GjIcon";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  const isActive = (pathname: string) => router.pathname === pathname;
  return (
    <>
      <div className="navbar">
        {/* <div className="navbar__logo"> */}
        <Link href="/" className="navbar__logo">
          {/* <div ></div> */}
        </Link>
        {/* </div> */}
        <div className="navbar__menu">
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
              <span className="material-symbols-rounded">open_in_new</span>
            </button>
          </div>
        </div>
        <div className="menu">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </>
  );
}




import { useRouter } from 'next/router';
// import Link from 'next/link';

// const Navbar = () => {
//   const router = useRouter();

//   const isActive = (pathname: string) => router.pathname === pathname;

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/" className={isActive('/') ? 'active' : ''}>Home
//           </Link>
//         </li>
//         <li>
//           <Link href="/Userguide" className={isActive('/Userguide') ? 'active' : ''}>About
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact"
//             className={isActive('/contact') ? 'active' : ''}>Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

