import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="/plugin/js/jquery-3.6.0.min.js" strategy="beforeInteractive"></Script>
          <Script src="/plugin/js/jquery-ui.min.js" strategy="beforeInteractive"></Script>
          <Script src="/plugin/js/jquery.fancybox.min.js" strategy="beforeInteractive"></Script>
          <Script src="/plugin/js/bootstrap.bundle.min.js" strategy="lazyOnload"></Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
