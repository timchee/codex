import Link from "next/link";
import React, { useState } from "react";

interface Props {
    hidden: string;
    element: JSX.Element;
}

export default function LeftSideMenu(props: Props) {
    const { hidden, element } = props;
    const [isClassAdded, setIsClassAdded] = useState<boolean>(false);
  
    const handleClick = () => {
      setIsClassAdded(!isClassAdded);
      console.log(isClassAdded);
    };

    return (
        <aside className="left--section">
            <div className="left--section__components">
            <h6>User Guide</h6>
            <div className="span--div">
                <div className={`span ${isClassAdded ? "hidden" : ""}`}>
                <div className="small--span" id="small--span"></div>
                </div>
                <div className="lists">
                <div onClick={handleClick} id="list-one">
                    <h2>
                    What is Codex
                    <span
                        id="arrow"
                        className={`material-symbols-outlined ${
                        isClassAdded ? "arrow" : ""
                        }`}
                    >
                        keyboard_arrow_down
                    </span>
                    </h2>
                </div>
                <div
                    id="list-two"
                    className={`left--section__components__selection ${
                    isClassAdded ? "hidden" : ""
                    }`}
                >
                    <ul>
                    <a href="#what-is-codex">How to get started</a>
                    <a href="#how-to-start">Create your first organization</a>
                    <li>
                        {" "}
                        <a href="#first-page">Create your first page</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </aside>
    )
}
