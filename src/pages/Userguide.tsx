import Navbar from "../components/Navbar";
import Head from "next/head";
import { StyleHTMLAttributes } from "react";

import React, { useState } from "react";
import Footer from "@/components/Footer";



interface Props {
  hidden: string;
  element: JSX.Element;
}

export default function UserGuide(props: Props) {
  const { hidden, element } = props;
  const [isClassAdded, setIsClassAdded] = useState<boolean>(false);

  const handleClick = () => {
    setIsClassAdded(!isClassAdded);
    console.log(isClassAdded);
  };
  return (
    <>
      <Head>
        <title>Codex - Welcome</title>
        <meta
          name="Codex is a content management system"
          content="Generated by create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>

      <Navbar />
      {/* <ExampleComponent /> */}

      <main>
        <section className="left--section">
          <div className="left--section__search" id="search">
            <i className="material-icons">search</i>
            <input type="text" placeholder="Quick Search" />
          </div>
          <div className="left--section__components">
            <h3>Welcome</h3>
            <div className="span--div">
              <div className={`span ${isClassAdded ? "hidden" : ""}`}>
                <div className="small--span" id="small--span"></div>
              </div>
              <div className="lists">
                <div onClick={handleClick} id="list-one">
                  {/* {React.cloneElement(element, { className: isClassAdded ? hidden : '' })} */}
                  <h2>
                    What is Codex{" "}
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
                  // className="left--section__components__selection"
                  className={`left--section__components__selection ${
                    isClassAdded ? "hidden" : ""
                  }`}
                >
                  <ul>
                    <li>How to get started</li>
                    <li>Create your first organization</li>
                    <li>Create your first page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="main">
          <div className="main--content">
            <p>Welcome - What is Codex - Statrting </p>
          </div>
        </main>
        <section className="right--section">
          <div className="right--section__content">
            <h1>Currently viewing</h1>
            <ul>
              <li>What is Codex</li>
              <li>How to get started</li>
              <li>Create your first organization</li>
              <li>create your first page</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
