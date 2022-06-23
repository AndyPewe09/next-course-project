import Docuemnt, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Docuemnt {
  render() {
    return (
      <Html lang="en">
        <Head>
          <body>
            <div id="overlays"></div>
            <Main></Main>
            <NextScript></NextScript>
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument