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




interface Data {
  [fields: Array<0>]
  [x: string]: ReactNode;
  name: ReactNode;
  message: string;
  // fields: Array<0>;
}


export default function MainPage(){

  const [data, setData] = useState<Data>({
    message: "help",
    name: undefined
  });

  async function fetchData() {
    const response = await fetch(
      "https://api.codex.gjirafa.tech/api/gjirafatech/layout/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkU2MzY5NjQ0RTk5RTMzRTZFODRBRkNGOThDMjZEMTQwMzlGREQwMjBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjVqYVdST21lTS1ib1N2ejVqQ2JSUURuOTBDQSJ9.eyJuYmYiOjE2NzkwNjUxMDAsImV4cCI6MTY3OTIzNzkwMCwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50LmdqaXJhZmEudGVjaCIsImF1ZCI6WyJDb2RleF9WdWVfQWRtaW5fQXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiY2xpZW50X2lkIjoiY29kZXhfdnVlX2FkbWluIiwic3ViIjoiMmQyMzQwZTQtMDQ3MS00MjE2LWE5MGYtYTE4YzgwNDAyMjFiIiwiYXV0aF90aW1lIjoxNjc3NTkzMjYwLCJpZHAiOiJHb29nbGUiLCJuYW1lIjoiU2hwZWp0aW0gVWthaiIsImdpdmVuX25hbWUiOiJTaHBlanRpbSIsImZhbWlseV9uYW1lIjoiVWthaiIsInBpY3R1cmUiOiJodHRwczovL3Rvam5odTRtdnAuZ2ppcmFmYS5uZXQvcHJvZmlsZXBpY3R1cmVzLzg3VnlUMGdOa1RPejhzUzdRaEczVVhmdTVRSC9qOGlqbUtBSFVOM0o5TW89Lzk5NzYwMDYwLjI1NzM2OTQuanBnIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2hwZWp0aW0udWthakBsaWZlLmdqaXJhZmEuY29tIiwiZW1haWwiOiJzaHBlanRpbS51a2FqQGxpZmUuZ2ppcmFmYS5jb20iLCJqdGkiOiJERUUyREUwNzZFNkQ0OEZDMEUzQjI1QzQ4NEUyNTc1MyIsInNpZCI6IjY1MkJDOUZBNDVGMDBDMzFFQjVFQTFFNTRCQ0VCMTI4IiwiaWF0IjoxNjc5MDY1MTAwLCJzY29wZSI6WyJDb2RleF9WdWVfQWRtaW5fQXBpIiwib3BlbmlkIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl19.u-1gz9Oh2Edi-Gs2csyxXoOEGe_-UWBCo2VokwFQNjU6li3220iuzTZB0tRGkvrVgqovdG7ThBRNmD3sO2N8ifN3jbDPcJoFbnVlOA74mH7HoItv-3UUJQVOse2CVFl5X1TnkEFt6hjTcdFALN2yCL19MGJNiNAZg76uBtGhMPlH8RsJn_Tyi4BKH8nad2XlXI7NTmF6_h6tCyLZjgkIi49gVjWZl45tIBO36PYZy4IpEsDusI-GBnoady7vqm8IL2oe7KD7SRmwHnQzqVADoe1yzoVwVYRjRDJsS3HwbxuPuzt3tP4ZcLn_AtjI0IX-2eAjVDkbSlV_UfUqKH1S5g",
        },
      }
    );

    const data = await response.json();
    setData(data);
    console.log(data);
    console.log(response);
    console.log(response.type);
    

    
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
      {/* {fetchData} */}
      <div className="mainPage" onLoadedData={fetchData}>
        <h1 className="name">{data.name}</h1>
        <Link href={`https://codex.gjirafa.dev/codex-dev/silVdOprHm/entries/mine/codexguidearticles/${data.id}`}>
          {data.id}
        </Link>
        <h3><Link href={`https://codex.gjirafa.dev/codex-dev/silVdOprHm/entries/mine/codexguidearticles/${data.id}`}>

        id:{data.id}
        </Link> 
        </h3>
        <h1>alias:{data.currentPage}</h1>
        <h1>normaliesed name:{data.hasNext}</h1>
        <h1> message:{data.hasPrevious}</h1>
        <h3>{data.data}</h3><h3> created by{': '}{data.createdBy}</h3>
        <h3>{data.status}</h3>
        <h3>page size: {data.pageSize}</h3>
        <h3>{data.deletedBlocks}</h3>
        <h3>desc: {data.totalPages}</h3>


        <button onClick={fetchData}>fetch</button>
        {/* <h1>type: {data.type}</h1> */}
        {/* console.log(data.name); */}
        
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

