/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { ARTICLES_QUERY } from "../../graphql/articles";
import { Article } from "../../interfaces/IMain";
import Breadcrumbs from "./Breadcrumbs ";
import PostPage from "../pages/userguide/[id]";

export default function Articles() {


  return (
    <PostPage />
  );
}
