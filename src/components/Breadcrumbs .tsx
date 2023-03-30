import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { ARTICLE_QUERY } from "../../graphql/articles";

export default function Breadcrumbs() {
    const router = useRouter();
    
    const { data } = useQuery(ARTICLE_QUERY, {
      variables: {
        id: router.query.id
      }
    });

    const currentArticle = data.codexguidearticles
  
    return (
      <div className="breadcrumbs">
        <span>User Guide</span> <span>&#10097;</span>{" "}
        {currentArticle && <span>{currentArticle.title}</span>}
      </div>
    );
}
