import React, { ReactElement, ReactFragment } from "react";
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.washingtonjunior.com/" />
          <meta
            property="og:title"
            content="Washington Junior | Product Designer"
          />
          <meta
            property="og:description"
            content="Sou designer e desenvolvedor autodidata, estudante de publicidade na UFRJ e amante da tecnologia e inovação."
          />
          <meta property="og:image" content="/og-img.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.washingtonjunior.com/"
          />
          <meta
            property="twitter:title"
            content="Washington Junior | Product Designer"
          />
          <meta
            property="twitter:description"
            content="Sou designer e desenvolvedor autodidata, estudante de publicidade na UFRJ e amante da tecnologia e inovação."
          />
          <meta property="twitter:image" content="/og-img.jpg" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kalam&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon-light.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/favicon-light.svg"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
