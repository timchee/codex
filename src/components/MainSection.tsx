/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { ARTICLES_QUERY } from "../../graphql/articles";
import { Article } from "../../interfaces/IMain";
import Breadcrumbs from "./Breadcrumbs ";

export default function Articles() {
  const { loading, error, data, refetch } = useQuery(ARTICLES_QUERY);

  useEffect(() => {
    if (!loading) {
      console.log("Data loaded successfully", data);
    }
  }, [loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>


    <section className="main-content">
      <div className="main-content__container">
        <Breadcrumbs />

        {data.codexguidearticlesCollection.items.map((article: Article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>Description: {article.description}</p>
          </div>
        ))}
        <button onClick={() => refetch()}>Refetch Data</button>
      </div>
    </section>
    </>
  );
}
