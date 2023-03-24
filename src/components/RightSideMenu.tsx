import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useEffect } from "react";
import { ARTICLES_QUERY } from "../../graphql/articles";
import { Article } from "../../interfaces/IMain";

export default function RightSideMenu() {
    const router = useRouter();
    
    const { loading, error, data, refetch } = useQuery(ARTICLES_QUERY);

    useEffect(() => {
      if (!loading) {
        console.log("Data loaded successfully", data);
      }
    }, [loading]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Find the article with the matching ID
    const currentArticle = data.codexguidearticlesCollection.items.find(
        (article: Article) => article.id === router.query.id
    );

    if (!currentArticle) {
        return <p></p>;
    }

    // Filter the articleBody array to only include objects with type equal to "heading"
    const headings = currentArticle.articleBody.filter(
        (block: any) => block.type === "heading"
    );

    return (
        <section className="right--section">
            <div className="right--section__content">
                <h6>Currently Viewing</h6>
                <ul>
                    {headings.map((heading: any, index: number) => (
                    <li key={index}>
                        <a href={`#${heading.slug}`} dangerouslySetInnerHTML={{ __html: heading.contentHTML }} />
                    </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
