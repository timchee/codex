import { ReactNode } from 'react';
import { Articles } from '../graphql/articles';
// import  {articles,articleDetails, allArticles } from '../graphql/articles'

export interface ArticleBody {
  type: string;
  contentHTML: string;
  attrs: string;
  __typename: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  articleBody: ArticleBody[];
  __typename: string;
}

export interface ArticlesData {
  codexguidearticlesCollection: {
    items: Article[];
  };
}

// interface MainProps  {
//     id: string;
//     title: string;
//     __typename: string;
//     type: string;
//     placement: string;
//   }
  
//   interface articleBody extends MainProps{
//     type: string;
//     contentHTML: string;
//     attrs: string;
//     __typename: string;
//   }

//   interface Data {
//     [x: string]: ReactNode;
//     name: ReactNode;
//     message: string;
//   }
  
//   export default Data