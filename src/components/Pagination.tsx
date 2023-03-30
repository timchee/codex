import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { ARTICLE_QUERY } from "../../graphql/articles";

export default function Pagination() {
    const router = useRouter();
    const { data } = useQuery(ARTICLE_QUERY)

    // const currentArticle = data.codexguidearticles
  
    return (
        <section className="pagination">
            <div>
left
            </div>
            <div>
right
            </div>
        </section>
    );
}
