import { ReactNode } from 'react';
import  {articles,articleDetails, allArticles } from '../graphql/articles'

interface MainProps  {
    id: string;
    title: string;
    __typename: string;
    type: string;
    placement: string;
  }
  
  interface articleBody extends MainProps{
    type: string;
    contentHTML: string;
    attrs: string;
    __typename: string;
  }

  interface Data {
    [x: string]: ReactNode;
    name: ReactNode;
    message: string;
  }
  
  export default Data