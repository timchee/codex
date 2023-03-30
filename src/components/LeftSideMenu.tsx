import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { ARTICLES_QUERY } from "../../graphql/articles";
import { Article } from "../../interfaces/IMain";
import classNames from "classnames";
import router from "next/router";
import Articles from "./MainSection";


export default function LeftSideMenu() {
  const [isClassAdded, setIsClassAdded] = useState<boolean>(false);

  const handleClick = () => {
    setIsClassAdded(!isClassAdded);
    console.log(isClassAdded);
  };

  const { loading, error, data, refetch } = useQuery(ARTICLES_QUERY);

  useEffect(() => {
    if (!loading) {
      // console.log("Data loaded successfully", data);
    }
  }, [loading]);

  if (loading) return <p></p>;
  if (error) return <p>Error: {error.message}</p>;

  const currentPath = router.asPath;
  const currentArticleId = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  console.log(currentArticleId); // should log the current article id

  const isActive = (pathname: string) => {
    const path = `/userguide/${pathname}`;
    return currentPath.startsWith(path);
  };

  console.log(isActive(currentArticleId)); // should log true or false

  return (
    <aside className="left--section">
      <div className="left--section__components ">
        <h6>User Guide</h6>
        <div className="lists">
          {data.codexguidearticlesCollection.items.map((article: Article) => (
            <div key={article.id} className={isActive(article.id) ? 'spann' : ''}>
              <Link href={`/userguide/${article.id}`}>
                <div className="small--span"></div>
                <p>{article.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
