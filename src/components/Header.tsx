import { Link } from "react-router-dom";

export function Headers() {
  return (
    <div className="head">
      <div className="header">
        <div className="header__description">
          <h1>Welcome to Codex!</h1>
          <p>
            Browse the latest developer documentation including tutorials,
            sample code, articles and API references.
          </p>
          {/* <Link to={"../pages/Userguide"}> */}
            <button>Get Started</button>
          {/* </Link> */}
        </div>
        <div className="header__logo">
          <div className="header__logo--logo"></div>
          <div className="header__logo--shadow"></div>
        </div>
      </div>
    </div>
  );
}
