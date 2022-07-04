import React from "react";
import Link from "next/link";

function WidgetPackageOffer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <aside className="package-widget-style-2 widget-recent-package-entries mt-30">
        <div className="widget-title text-center">
          <h4>Offer Package</h4>
        </div>
        <div className="widget-body">
          <ul>
            <li className="package-sm">
              <div className="thumb">
                <Link
                  onClick={scrollTop}
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                >
                  <a>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_BASE_URL +
                        "/images/package/package-sm4.png"
                      }
                      alt="PackageIMG"
                    />
                  </a>
                </Link>
              </div>
              <div className="info">
                <h6>
                  <Link
                    onClick={scrollTop}
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                  >
                    <a>
                      {" "}
                      San Francisco Golden Gate Bridge, cable cars &amp; fog
                    </a>
                  </Link>
                </h6>
                <div className="price">
                  <span>From</span>
                  <h6>
                    $67.00 <span>Per Person</span>
                  </h6>
                </div>
              </div>
            </li>
            <li className="package-sm">
              <div className="thumb">
                <Link
                  onClick={scrollTop}
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                >
                  <a>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_BASE_URL +
                        "/images/package/package-sm3.png"
                      }
                      alt="PackageIMG"
                    />
                  </a>
                </Link>
              </div>
              <div className="info">
                <h6>
                  <Link
                    onClick={scrollTop}
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                  >
                    <a>
                      {" "}
                      Praesent porttitor tellus sed ande ultrices pulvinar magna
                      mauris.
                    </a>
                  </Link>
                </h6>
                <div className="price">
                  <span>From</span>
                  <h6>
                    $88.00 <span>Per Person</span>
                  </h6>
                </div>
              </div>
            </li>
            <li className="package-sm">
              <div className="thumb">
                <Link
                  onClick={scrollTop}
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                >
                  <a>
                    {" "}
                    <img
                      src={
                        process.env.NEXT_PUBLIC_BASE_URL +
                        "/images/package/package-sm2.png"
                      }
                      alt="PackageIMG"
                    />
                  </a>
                </Link>
              </div>
              <div className="info">
                <h6>
                  <Link
                    onClick={scrollTop}
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                  >
                    <a>
                      {" "}
                      Vestibulum luctus hendrerit Variusneque, et blandit orci
                      tincidunt.
                    </a>
                  </Link>
                </h6>
                <div className="price">
                  <span>From</span>
                  <h6>
                    $91.00 <span>Per Person</span>
                  </h6>
                </div>
              </div>
            </li>
            <li className="package-sm">
              <div className="thumb">
                <Link
                  onClick={scrollTop}
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                >
                  <a>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_BASE_URL +
                        "/images/package/package-sm1.png"
                      }
                      alt="PackageIMG"
                    />
                  </a>
                </Link>
              </div>
              <div className="info">
                <h6>
                  <Link
                    onClick={scrollTop}
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                  >
                    <a>
                      San Francisco Golden Gate Bridge, cable cars &amp; fog
                    </a>
                  </Link>
                </h6>
                <div className="price">
                  <span>From</span>
                  <h6>
                    $67.00 <span>Per Person</span>
                  </h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default WidgetPackageOffer;
