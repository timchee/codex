import { from } from "@apollo/client";
import Head from "next/head";
import { articles } from '../../graphql/articles'

export const getStaticProps = async (params: any) => {};



const MainPage = () => {
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
                <h3>Integrate your site</h3>
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
              <p>You can write code in this way</p>
              <div className="chocolate--bar">
                <p> &nbsp;chocolate bar sugar &nbsp;</p>
              </div>
              <p>just be sure to write properly</p>
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
