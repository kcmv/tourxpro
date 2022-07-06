import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}
export default MyApp;
