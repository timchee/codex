import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { ARTICLE_QUERY } from "../../../../graphql/articles";
import Breadcrumbs from "../../../components/Breadcrumbs ";
import Pagination from "../../../components/Pagination";
import { BulletList, CodexImage, FactBox, Heading, OrderedList, Paragraph, Table } from "../../../helpers/article";

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

  const currentArticle = data.codexguidearticles

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
          } else if (type === "table") {
            return (
              <Table key={index} attrs={attrs} contentHTML={contentHTML} />
            );
          } else {
            return null;
          }
        })}
      </div>
      <Pagination />
    </section>
  </>

  );
};

export default PostPage;