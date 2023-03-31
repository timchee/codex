import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { ARTICLE_QUERY } from "../../graphql/articles"
import parse from "html-react-parser"

export default function RightSideMenu() {
  const router = useRouter()
  const { loading, error, data } = useQuery(ARTICLE_QUERY, {
    variables: {
      id: router.query.id,
    },
  });

  if (loading) {
    return <div></div>
  }

  if (error || !data || !data.codexguidearticles) {
    return <div></div>
  }

  const currentArticle = data.codexguidearticles;

  const headings = currentArticle.articleBody.filter(
    (block: any) => block.type === "heading"
  );

  function handleHeadingClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    blockId: string
  ) {
    e.preventDefault();
    const element = document.querySelector(`[data-block-id="${blockId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="right--section">
      <div className="right--section__content">
        <h6>Currently Viewing</h6>
        <ul>
          {headings.map((heading: any, index: number) => (
            <li key={index}>
              <a
                href={`#${heading.slug}`}
                onClick={(e) => handleHeadingClick(e, heading.attrs?.blockId)}
              >
                {parse(heading.contentHTML.replace(/<\/?strong>/g, ""))}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
