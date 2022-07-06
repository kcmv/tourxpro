import React from "react";
import Link from "next/link";

function ErrorWrapper() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="error-wrapper pt-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="error-content text-center">
                <div className="error-vactor text-center">
                  <img
                    src="/images/shapes/error-vactor.png"
                    alt="ErrorIMG"
                    className="img-fluid"
                  />
                </div>
                <div className="error-text">
                  <h2>That Page Are Not Found</h2>
                  <p>
                    Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                    venenatis hendrerit a id lectus. Suspendissendt blandit
                    interdum. Sed pellentesque at nunc eget consente
                    consectetur.Duis rutrum nisl urna. Maecenas vel libero
                  </p>
                  <div className="error-btn">
                    <Link href="/">
                      <a onClick={scrollTop}>
                        <i className="bi bi-house-door" /> GO TO HOME
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorWrapper;
