import parse from "html-react-parser";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { ARTICLES_QUERY } from "../../../../graphql/articles";
import { Article, ArticleBody } from "../../../../interfaces/IMain";
import Breadcrumbs from "../../../components/Breadcrumbs ";

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

  //find article with the matching ID
  const currentArticle = data.codexguidearticlesCollection.items.find(
    (article: Article) => article.id === router.query.id
  );
  if (!currentArticle) {
    return <p></p>;
  }

  const { title, description, articleBody } = currentArticle;

  return (
    <>
    <section className="main-content">
      <div className="main-content__container">
        <Breadcrumbs />

        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: description }} />

        {articleBody.map((block: ArticleBody, index: number) => {
          const { type, contentHTML, attrs } = block;
          if (type === "paragraph") {
            return (
              <p key={index} style={attrs}>
                {block.contentHTML && parse(block.contentHTML)}
              </p>
            );
          } else if (type === "heading") {
            return (
              <h1 key={index} style={attrs}>
                {block.contentHTML && parse(block.contentHTML)}
              </h1>
            );
          } else if (type === "bullet_list" || type === "ordered_list") {
            return (
              <div key={index} style={attrs}>
                {block.contentHTML && parse(block.contentHTML)}
              </div>
            );
          } else if (type === "codex_factbox") {
            return (
              <div key={index} style={attrs} className="factbox">
                {block.contentHTML && parse(block.contentHTML)}
              </div>
            );
          } else if (type === "codex_media") {
            return (
              <div key={index} style={attrs} className="media">
                {block.contentHTML && parse(block.contentHTML)}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </section>
  </>
  );
};

export default PostPage;