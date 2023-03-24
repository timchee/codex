import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { ARTICLE_QUERY } from "../../../../graphql/articles";
import Breadcrumbs from "../../../components/Breadcrumbs ";
import { BulletList, CodexImage, FactBox, Heading, OrderedList, Paragraph } from "../../../helpers/article";

const PostPage = () => {
  const { query } = useRouter();
  const router = useRouter();

  const { loading, error, data, refetch } = useQuery(ARTICLE_QUERY, {
    variables: {
      id: router.query.id
    }
  });

  // ['id1', 'id2']
  // useQuery(MEDIAS_QUERY, {
  //   variables: {
  //     ids: ids
  //   }
  // })

  // let medias = {
  //   id1: {

  //   }
  // }

  useEffect(() => {
    if (!loading) {
      console.log("Data loaded successfully", data);
    }
  }, [loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  //find article with the matching ID
  const currentArticle = data.codexguidearticles

  if (!currentArticle) {
    return <p></p>;
  }

<<<<<<< HEAD
  const { title, description, articleBody } = currentArticle;

  return (
    <>
    <section className="main-content">
      <div className="main-content__container">
        <Breadcrumbs />

        <h1 className="main-content__title">{title}</h1>
        <div className="main-content__description" dangerouslySetInnerHTML={{ __html: description }} />

        {articleBody.map((block: any, index: number) => {
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
              <CodexImage key={index} attrs={attrs} contentHTML={contentHTML} />
            );
          } else {
            return null;
          }
        })}
      </div>
    </section>
  </>

=======
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
>>>>>>> 9e7a34f (Modified the content main section)
  );
};

export default PostPage;