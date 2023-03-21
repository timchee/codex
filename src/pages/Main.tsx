/* eslint-disable react-hooks/exhaustive-deps */

import Head from "next/head";
import client from "../../apollo-client";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   gql,
// } from "@apollo/client";
import React, { FunctionComponent, ReactNode, useState } from "react";
import {
  registerEvent,
  demoBarEvent,
  bskEvent,
  biskoScript,
} from "../../utils/biskoEvents";
import { articles, articleDetails, allArticles } from "../../graphql/articles";
import Link from "next/link";
// import style from "../styles/components/Userguide.css"

////////////////////////////////////////////////////

// client

interface Data {
  // [fields: Array<0>]
  [x: string]: ReactNode;
  name: ReactNode;
  message: string;
  // fields: Array<0>;
}


export default function MainPage(){

  const [data, setData] = useState<Data>({
    message: "help",
    name: undefined,
  });

  async function fetchData() {
    const response = await fetch(
      "https://graphql.codex.gjirafa.dev/v2/codex-dev/",
      {
        headers: {
          Accept: 'accept: */*',

          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkU2MzY5NjQ0RTk5RTMzRTZFODRBRkNGOThDMjZEMTQwMzlGREQwMjBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjVqYVdST21lTS1ib1N2ejVqQ2JSUURuOTBDQSJ9.eyJuYmYiOjE2NzkyNjU1MjcsImV4cCI6MTY3OTQzODMyNywiaXNzIjoiaHR0cHM6Ly9hY2NvdW50LmdqaXJhZmEudGVjaCIsImF1ZCI6WyJDb2RleF9WdWVfQWRtaW5fQXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiY2xpZW50X2lkIjoiY29kZXhfdnVlX2FkbWluIiwic3ViIjoiMmQyMzQwZTQtMDQ3MS00MjE2LWE5MGYtYTE4YzgwNDAyMjFiIiwiYXV0aF90aW1lIjoxNjc3NTkzMjYwLCJpZHAiOiJHb29nbGUiLCJuYW1lIjoiU2hwZWp0aW0gVWthaiIsImdpdmVuX25hbWUiOiJTaHBlanRpbSIsImZhbWlseV9uYW1lIjoiVWthaiIsInBpY3R1cmUiOiJodHRwczovL3Rvam5odTRtdnAuZ2ppcmFmYS5uZXQvcHJvZmlsZXBpY3R1cmVzLzg3VnlUMGdOa1RPejhzUzdRaEczVVhmdTVRSC9qOGlqbUtBSFVOM0o5TW89Lzk5NzYwMDYwLjI1NzM2OTQuanBnIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2hwZWp0aW0udWthakBsaWZlLmdqaXJhZmEuY29tIiwiZW1haWwiOiJzaHBlanRpbS51a2FqQGxpZmUuZ2ppcmFmYS5jb20iLCJqdGkiOiI2RTg5RTRGRDYzN0IyODZBRDMzQ0MxRDU5OEIyQUU4RSIsImlhdCI6MTY3OTI2NTUyNywic2NvcGUiOlsiQ29kZXhfVnVlX0FkbWluX0FwaSIsIm9wZW5pZCIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJleHRlcm5hbCJdfQ.tnIymzM07bomP48bfSQtMiCqVHlt4PT2Roci_ZqSAJWUigISoNTnpLo5gahxtx_E8J8EgHyCLX1rVPoO3FKJ1wze1yc_gSD-1i_FX8jGFVrgys43qxTTPncfD7O-DyrZFveYA4Omqq4zVSH27R37IHptBBp97cSOk62ephBXDJevQumZ71we-2lbYkH7HYR9D7mlcPzgzHjinm4QotUbXEFeeKryOuP_Ef08MdIyu2J6w3fdf8VAfkZ9sQ2Gx0wm7TESjmk91VCmNCm9L94qbI7TVg0Zyua4q8aCSCz4wWGMf6suhmnKutowjl-zq0hrVryeU3Q0yZ8QitIofmIkvQ",
        },
      }
    );

    const data = await response.json();
    setData(data);
    console.log(data);
    console.log(data.id);

  }

  return (
    <>
      <Head> 
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v3.0.1/css/line.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        ></link>
      </Head>
      <div className="mainPage" onLoadedData={fetchData}>
        <h1 className="name">{data.name}</h1>
        
          {data.id}
        <h3>
        id:{data.id} 
        </h3>
    
        <h1>alias:{data.title}</h1>
        <h1>normaliesed name:{data.hasNext}</h1>
        <h1> message:{data.hasPrevious}</h1>
        <h3>{data.data}</h3><h3> created by{': '}{data.createdBy}</h3>
        <h3>{data.status}</h3>
        <h3>page size: {data.pageSize}</h3>
        <h3>{data.deletedBlocks}</h3>
        <h3>desc: {data.totalPages}</h3>


        <button onClick={fetchData}>fetch</button>
        <div className="main--section__content">
          <div className="mainPage--routings">

          </div>
          <div
            className="main--section__content__description"
            id="what-is-codex"
          >
            <h1>How to get started</h1>
            <p>
              Dessert cheesecake chocolate bar sugar plum tart soufflé toffee
              caramels. Chocolate bar pie gummi bears powder cheesecake.
            </p>
          </div>
          <div className="main--section__content__content" id="how-to-start">
            <h2>How to get started</h2>
            <p>
              Dessert cheesecake chocolate bar sugar plum tart soufflé toffee
              caramels. Chocolate bar pie gummi bears powder cheesecake. Est
              voluptas repudiandae in iure velit aut dignissimos consequatur ad
              fugit enim et dolores distinctio et omnis recusandae et alias
              accusantium.
            </p>
          </div>
          <div className="main--section__content__code">
            <div
              className="main--section__content__code__code-one"
              id="organization"
            >
              <div className="one">1</div>
              <div className="code--one__description">
                <h3>{}</h3>
                <p>
                  Dessert cheesecake chocolate bar sugar plum tart soufflé
                  toffee caramels. Chocolate bar pie gummi bears powder
                  cheesecake.
                </p>
              </div>
              <div className="code--one__image"></div>
            </div>
            <div className="code__span">
              <div></div>
            </div>
            <div className="main--section__content__code__code-one">
              <div className="one">2</div>
              <div className="code--one__description">
                <h3>Create your first page</h3>
                <p>
                  Dessert cheesecake chocolate bar sugar plum tart soufflé
                  toffee caramels. Chocolate bar pie gummi bears powder
                  cheesecake.
                </p>
              </div>
              <div className="code--two__image"></div>
            </div>
          </div>
          <div className="blue--notification">
            <div className="blue--notification__sidebar"></div>
            <div className="blue--notification__content">
              <p>
                <i className="uil uil-bell"></i> NOTE
              </p>
              <p>
                It’s best to explicitly create a reliable unique identifier that
                you store in your application or database. For example, you can
                use your own user identifiers once users log in.
              </p>
            </div>
          </div>
        </div>
        <div className="writing--code" id="first-page">
          <div className="writing--code__content">
            <h2>Writing Code</h2>
            <div className="writing--code__paragraph">
              <p>You can write code in this way&nbsp;</p>
              <div className="chocolate--bar">
                <p>chocolate bar sugar</p>
              </div>
              <p>&nbsp;just be sure to write properly</p>
            </div>
          </div>
          <div className="writing--code__image"></div>
        </div>

        <div className="back--to">
          <p>{"<"}&nbsp;&nbsp;Back to how to get started</p>
          <p>Back to how to get started&nbsp;&nbsp;{">"}</p>
        </div>
      </div>
    </>
  );
};

