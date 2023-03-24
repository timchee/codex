/* eslint-disable react-hooks/exhaustive-deps */
import parse from "html-react-parser";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { ARTICLES_QUERY } from "../../../../graphql/articles";
import { Article, ArticleBody } from "../../../../interfaces/IMain";
import Breadcrumbs from "../../../components/Breadcrumbs ";
import Link from "next/link";

const PostPage = () => {
  const { query } = useRouter();
  const router = useRouter();

  const { loading, error, data, refetch } = useQuery(ARTICLES_QUERY);

  useEffect(() => {
    if (!loading) {
      console.log("Data loaded successfully", data);
    }
  }, [loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  //find article with the mmatching ID
  const currentArticle = data.codexguidearticlesCollection.items.find(
    (article: Article) => article.id === router.query.id
  );
  if (!currentArticle) {
    return <p></p>;
  }
  
  const titles = currentArticle.title

  const articles = currentArticle.articleBody;

  return (
        <>
        <section className="main-content">
          <div className="main-content__container">
            <Breadcrumbs />

            <h1>{titles}</h1>
            <p></p>

            {articles.map((block: ArticleBody, index: number) => (
              <div key={index}>
                {block.type === "paragraph" ? (
                  <p dangerouslySetInnerHTML={{ __html: block.contentHTML }} />
                ) : block.type === "heading" ? (
                  <h2 dangerouslySetInnerHTML={{ __html: block.contentHTML }} />
                ) :  block.type === "bullet_list" ? (
                  <li dangerouslySetInnerHTML={{ __html: block.contentHTML }} />
                ) : block.type === "ordered_list" ? (
                  <li dangerouslySetInnerHTML={{ __html: block.contentHTML }} />
                ) : block.type === "codex_factbox" ? (
                  <div className="factbox" dangerouslySetInnerHTML={{ __html: block.contentHTML }} />
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </>
  );
};

export default PostPage;
