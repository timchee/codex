/* eslint-disable react-hooks/exhaustive-deps */
import { from } from "@apollo/client";
import Head from "next/head";
import { articles } from '../../graphql/articles'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { ClientParseError } from "@apollo/client";
import client from '../../apollo-client'
import { useTranslation } from 'react-i18next'
import React from "react";
import { registerEvent, demoBarEvent, bskEvent, biskoScript } from '../../utils/biskoEvents'


// export const getStaticProps = async (params: any) => {};

interface Models{
  id: string;
  title: string;
}

const MainPage = () => {
  let [articleTeasers, changeArticleTeasers] = React.useState([])
  const { t, i18n } = useTranslation()

  const getHighlightArticles = async () => {
    const lang = i18n.language == 'en' ? 'en' : 'alb'
    try {
      const { data } = await client.query({
        query: articles,
        variables: { lang },
      })
      if (data) {
        const { items } = data.gjirafaadsarticleCollection
        changeArticleTeasers(items)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const [counter, setCounter] = React.useState(0)
  const headingText = [
    'Marketing Experts',
    'Ecommerce Store Owners',
    'Publishers',
    'First Time Users',
    'Corporate Marketing Teams',
  ]

  React.useEffect(() => {
    getHighlightArticles()
  }, [i18n.language])

  React.useEffect(() => {
    biskoScript()
    const interval = setInterval(() => {
      setCounter(prevCounter => (prevCounter === 3 ? 0 : prevCounter + 1))
    }, 1800)

    return () => clearInterval(interval)
  }, [])

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
      <div className="mainPage">
        <div className="main--section__content">
          <div className="mainPage--routings">
            <p>Welcome {">"}</p>
            <p> What is Codex {">"}</p>
            <p> Starting </p>
          </div>
          <h2 key={Math.random()}>
              {t(headingText[counter])}
            </h2>
          <div className="main--section__content__description" id="what-is-codex">
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
            <div className="main--section__content__code__code-one" id="organization">
              <div className="one">1</div>
              <div className="code--one__description" >
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

export default MainPage;
// function changeArticleTeasers(items: any) {
//   throw new Error("Function not implemented.");
// }

// function biskoScript() {
//   throw new Error("Function not implemented.");
// }

