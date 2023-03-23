import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { ARTICLES_QUERY } from "../../graphql/articles";
import { Article } from "../../interfaces/IMain";

export default function Breadcrumbs() {
    const router = useRouter();
    const { loading, error, data } = useQuery(ARTICLES_QUERY);
  
    if (loading) return <p></p>;
    if (error) return <p>Error: {error.message}</p>;
  
    // Find the article with the matching ID
    const currentArticle = data.codexguidearticlesCollection.items.find(
      (article: Article) => article.id === router.query.id
    );
  
    return (
      <div className="breadcrumbs">
        <span>User Guide</span> <span>&#10097;</span>{" "}
        {currentArticle && <span>{currentArticle.title}</span>}
      </div>
    );
}