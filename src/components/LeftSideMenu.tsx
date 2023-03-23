import Link from "next/link";
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { ARTICLES_QUERY } from "../../graphql/articles";
import { Article } from "../../interfaces/IMain";
import PostPage from "../pages/userguide/[id]";
import classNames from "classnames";
import router from "next/router";

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

  const { loading, error, data, refetch } = useQuery(ARTICLES_QUERY);

  useEffect(() => {
    if (!loading) {
      console.log("Data loaded successfully", data);
    }
  }, [loading]);

  if (loading) return <p></p>;
  if (error) return <p>Error: {error.message}</p>;
  


  const isActive = (pathname: string) => router.pathname === pathname;
  const myClass = 'my-class';
  const combinedClassName = classNames("navbar__menu", myClass);

  return (
    <aside className="left--section">
      <div className="left--section__components">
        <h6>User Guide</h6>
        <div className="span--div">
          {/* <div className="span"></div> */}

          <div className="lists">
            {data.codexguidearticlesCollection.items.map((article: Article) => (
              <div key={article.id}>
                <Link href={`../userguide/${article.id}`} >
                <div className="small--span" ></div>
                  <p className={isActive(`../userguide/${article.id}`) ? 'active' : ''}>{article.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
