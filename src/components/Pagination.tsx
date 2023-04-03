import React, { useContext } from 'react';
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { ARTICLES_QUERY } from "../../graphql/articles";
import Link from "next/link";

export default function Pagination() {
    const router = useRouter();
  
    const { data, loading } = useQuery(ARTICLES_QUERY, {
      variables: {
        id: router.query.id,
      },
    });
  
    if (loading) {
      return <div></div>;
    }
  
    const { items } = data.codexguidearticlesCollection;
    const currentIndex = items.findIndex((article) => article.id === router.query.id);
    const prevArticle = items[currentIndex - 1];
    const nextArticle = items[currentIndex + 1];
  
    return (
        <section className="pagination">
        <div className="pagination__container">
          <div className="pagination__buttons">
            <div className="pagination__button">
              {prevArticle && (
                <Link href={`/userguide/${prevArticle.id}`}>
                    <span className="pagination__arrow">&#10096;</span>
                    <span className="pagination__link">Back to {prevArticle.title}</span>
                </Link>
              )}
            </div>
            <div className="pagination__button">
              {nextArticle && (
                <Link href={`/userguide/${nextArticle.id}`}>
                    <span className="pagination__link">Next to {nextArticle.title}</span>
                    <span className="pagination__arrow">&#10097;</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
