/* eslint-disable react-hooks/exhaustive-deps */
import parse from 'html-react-parser';
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { ARTICLES_QUERY } from "../../../../graphql/articles";
import { Article, ArticleBody } from "../../../../interfaces/IMain";
import Breadcrumbs from "../../../components/Breadcrumbs ";


const PostPage = () => {

  const {query} = useRouter()
  
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
            <div>
            {parse(article.description)}
            </div>
              <div>
                 {article?.articleBody?.map((content: ArticleBody) => {
                  if (content.attrs === "level: 1") {

                  }
                          return (
                            <div
                            key={content.type}
                            >
                              <div>
                                {parse(content.contentHTML || '<p>Wrong Content</p>')} <br />
                              </div>
                            </div>
                          )
                 })}
              </div>
          </div>
        ))}
        <button onClick={() => refetch()}>Refetch Data</button>

        {query.id} 
      </div>
    </section>
    </>

  );

};

export default PostPage;
