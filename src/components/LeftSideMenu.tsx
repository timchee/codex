import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { ARTICLES_QUERY } from "../../graphql/articles";
import { Article } from "../../interfaces/IMain";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <aside className="left--section">
      <div className="left--section__components">
        <h6>User Guide</h6>
        {data.codexguidearticlesCollection.items.map((article: Article) => (
          <div className="span--div" key={article.id}>
            <div className={`span ${isClassAdded ? "hidden" : ""}`}>
              <div className="small--span" id="small--span"></div>
            </div>
            <div className="lists">
                <p>{article.title}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
