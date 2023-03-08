// import "../styles/globals.css";
// import GjIcon from "@gjirafatech/gjirafa-icons/GjIcon";

import Link from "next/link";

export default function Navbar() {
  
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <Link href="/"></Link>
        </div>
        <div className="navbar__menu">
          <ul>
            <li className="navbar__link">
              <Link href="/" className="navLink">Welcome<div className="active"></div></Link>
            </li>
            <li className="navbar__link">
              <Link href="/Userguide" className="navLink">User Guide<div className="active"></div></Link>
            </li>
            <li className="navbar__link">
              <Link href="" className="navLink">Technical<div className="active"></div></Link>
            </li>
            <li className="navbar__link">
              <Link href="" className="navLink">Playground<div className="active"></div></Link>
            </li>
            <li className="navbar__link">
              <Link href="" className="navLink">Release Notes<div className="active"></div></Link>
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


// function transition(genreName: string): HTMLCollectionOf<Element> {
//   let i: number;
//   let tabcontent: HTMLCollectionOf<Element> =
//     document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     (tabcontent[i] as HTMLElement).style.display = "none";
//   }
//   let tablinks: HTMLCollectionOf<Element> =
//     document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     (tablinks[i] as HTMLElement).className = (
//       tablinks[i] as HTMLElement
//     ).className.replace(" active", "");
//   }
//   (document.getElementById(genreName) as HTMLElement).style.display = "block";
//   return tablinks;
// }

// function openTab(evt: MouseEvent, genreName: string): void {
//   transition(genreName);
//   (evt.currentTarget as HTMLElement).className += " active";
// }

// function tabLink(genreName: string): void {
//   let tablinks: HTMLCollectionOf<Element> = transition(genreName);
//   for (let i = 0; i < tablinks.length; i++) {
//     if ((tablinks[i] as HTMLElement).innerHTML === genreName) {
//       (tablinks[i] as HTMLElement).className += " active";
//     }
//   }
// }
