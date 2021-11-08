import Document, { Html, Head, Main, NextScript } from "next/document";
import {getYearDiff} from "../utils/date";

class MyDocument extends Document {
  public render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content={`Personal portfolio of Rama Jakaria, a web developer based in Jakarta with more than ${getYearDiff("1 April 2016")} years of experience in front-end and back-end.`} />
          <meta name="keyword" content="rama, jakaria, web developer, front end developer" />
          <meta name="referrer" content="same-origin" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
