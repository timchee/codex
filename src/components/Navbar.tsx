// import "../styles/globals.css";
// import GjIcon from "@gjirafatech/gjirafa-icons/GjIcon";

function transition(genreName: string): HTMLCollectionOf<Element> {
  let i: number;
  let tabcontent: HTMLCollectionOf<Element> =
    document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    (tabcontent[i] as HTMLElement).style.display = "none";
  }
  let tablinks: HTMLCollectionOf<Element> =
    document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    (tablinks[i] as HTMLElement).className = (
      tablinks[i] as HTMLElement
    ).className.replace(" active", "");
  }
  (document.getElementById(genreName) as HTMLElement).style.display = "block";
  return tablinks;
}

function openTab(evt: MouseEvent, genreName: string): void {
  transition(genreName);
  (evt.currentTarget as HTMLElement).className += " active";
}

function tabLink(genreName: string): void {
  let tablinks: HTMLCollectionOf<Element> = transition(genreName);
  for (let i = 0; i < tablinks.length; i++) {
    if ((tablinks[i] as HTMLElement).innerHTML === genreName) {
      (tablinks[i] as HTMLElement).className += " active";
    }
  }
}

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo"></div>
        <div className="navbar__menu">
          <ul>
            <li className="nav">Welcome</li>
            <li className="nav">User Guide</li>
            <li className="nav">Technical</li>
            <li className="nav">Playground</li>
            <li className="nav">Release Notes</li>
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
              <span className="material-symbols-outlined">open_in_new</span>
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
