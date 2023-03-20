// import  Link  from "react-router-dom";
import Link from "next/link";
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
          <Link href="https://docs.codex.gjirafa.tech/docs/api/intro">
            <button>Get Started</button>
          </Link>
        </div>
        <div className="header__logo">
          <div className="header__logo--logo"></div>
          <div className="header__logo--shadow"></div>
        </div>
      </div>
    </div>
  );
}
