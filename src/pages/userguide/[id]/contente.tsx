import parse from "html-react-parser";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { ARTICLES_QUERY } from "../../../../graphql/articles";
import { Article, ArticleBody } from "../../../../interfaces/IMain";
import Breadcrumbs from "../../../components/Breadcrumbs ";
import { BulletList, FactBox, Heading, Media, OrderedList, Paragraph } from "../../../helpers/article";

interface IProps {
  attrs?: any;
  contentHTML?: string;
  level?: number;
}

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

        <h1 className="main-content__title">{title}</h1>
        <div className="main-content__description" dangerouslySetInnerHTML={{ __html: description }} />

        {articleBody.map((block: ArticleBody, index: number) => {
          const { type, contentHTML, attrs } = block;
          if (type === "paragraph") {
            return (
              <Paragraph key={index} attrs={attrs} contentHTML={contentHTML} />
            );
          } else if (type === "heading") {
            const { level } = attrs;
            return (
              <Heading key={index} attrs={attrs} contentHTML={contentHTML} level={level} />
            );
          } else if (type === "bullet_list") {
            return (
              <BulletList key={index} attrs={attrs} contentHTML={contentHTML} />
            );
          } else if (type === "ordered_list") {
            return (
              <OrderedList key={index} attrs={attrs} contentHTML={contentHTML} />
            );
          } else if (type === "codex_factbox") {
            return (
              <FactBox
                key={index}
                attrs={attrs}
                contentHTML={contentHTML}
              />
            );
          } else if (type === "codex_media") {
            return (
              <Media key={index} attrs={attrs} contentHTML={contentHTML} />
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