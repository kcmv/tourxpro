import React from "react";
import Link from "next/link";
import Image from "next/image";

function PackageArea() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="package-area package-style-two pt-110 chain">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-10">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Popular Adventures</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="package-card-delta">
                <div className="package-thumb">
                  <Link href="package-details">
                    <a onClick={scrollTop}>
                      <Image
                        src="/images/package/best-s1.png"
                        height={20}
                        width={30}
                        layout="responsive"
                        alt=""
                      />
                    </a>
                  </Link>
                  <p className="card-lavel">
                    <i className="bi bi-clock" />
                    <span>3 Day &amp; 2 night</span>
                  </p>
                </div>
                <div className="package-card-body">
                  <h3 className="p-card-title">
                    <Link href="/package-details">
                      <a onClick={scrollTop}>
                        Etiam placerat dictum consequat an Pellentesque habitant
                        morbi.
                      </a>
                    </Link>
                  </h3>
                  <div className="p-card-bottom">
                    <div className="book-btn">
                      <Link href="/package-details">
                        <a onClick={scrollTop}>
                          Book Now <i className="bx bxs-right-arrow-alt" />
                        </a>
                      </Link>
                    </div>
                    <div className="p-card-info">
                      <span>From</span>
                      <h6>
                        $79.00 <span>Per Person</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <div className="package-card-delta">
                <div className="package-thumb">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                  >
                    <a onClick={scrollTop}>
                      <Image
                        src="/images/package/best-s2.png"
                        height={20}
                        width={30}
                        layout="responsive"
                        alt=""
                      />
                    </a>
                  </Link>
                  <p className="card-lavel">
                    <i className="bi bi-clock" />{" "}
                    <span>5 Day &amp; 6 night</span>
                  </p>
                </div>
                <div className="package-card-body">
                  <h3 className="p-card-title">
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                      onClick={scrollTop}
                    >
                      <a>
                        varius condimentum consequat frin Aenean pretium risus
                        eu.
                      </a>
                    </Link>
                  </h3>
                  <div className="p-card-bottom">
                    <div className="book-btn">
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                        onClick={scrollTop}
                      >
                        <a>
                          Book Now <i className="bx bxs-right-arrow-alt" />
                        </a>
                      </Link>
                    </div>
                    <div className="p-card-info">
                      <span>From</span>
                      <h6>
                        $67.00 <span>Per Person</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="package-card-delta">
                <div className="package-thumb">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                    onClick={scrollTop}
                  >
                    <a>
                      <Image
                        src="/images/package/best-s3.png"
                        height={20}
                        width={30}
                        layout="responsive"
                        alt=""
                      />
                    </a>
                  </Link>
                  <p className="card-lavel">
                    <i className="bi bi-clock" />{" "}
                    <span>4 Day &amp; 3 night</span>
                  </p>
                </div>
                <div className="package-card-body">
                  <h3 className="p-card-title">
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                      onClick={scrollTop}
                    >
                      <a>
                        Praesent sed elit mi. In risus nullaam efficitur non
                        elementum eget.
                      </a>
                    </Link>
                  </h3>
                  <div className="p-card-bottom">
                    <div className="book-btn">
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                        onClick={scrollTop}
                      >
                        <a>
                          Book Now <i className="bx bxs-right-arrow-alt" />
                        </a>
                      </Link>
                    </div>
                    <div className="p-card-info">
                      <span>From</span>
                      <h6>
                        $88.00 <span>Per Person</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="package-card-delta">
                <div className="package-thumb">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                    onClick={scrollTop}
                  >
                    <a>
                      <Image
                        src="/images/package/best-s4.png"
                        height={20}
                        width={30}
                        layout="responsive"
                        alt=""
                      />
                    </a>
                  </Link>
                  <p className="card-lavel">
                    <i className="bi bi-clock" />{" "}
                    <span>5 Day &amp; 6 night</span>
                  </p>
                </div>
                <div className="package-card-body">
                  <h3 className="p-card-title">
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                      onClick={scrollTop}
                    >
                      <a>
                        {" "}
                        Sed ultricies sapien arcu, sed cong feugiat sapien
                        dignissim id.{" "}
                      </a>
                    </Link>
                  </h3>
                  <div className="p-card-bottom">
                    <div className="book-btn">
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                        onClick={scrollTop}
                      >
                        <a>
                          Book Now <i className="bx bxs-right-arrow-alt" />
                        </a>
                      </Link>
                    </div>
                    <div className="p-card-info">
                      <span>From</span>
                      <h6>
                        $91.00 <span>Per Person</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="package-card-delta">
                <div className="package-thumb">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                    onClick={scrollTop}
                  >
                    <a>
                      <Image
                        src="/images/package/best-s5.png"
                        height={20}
                        width={30}
                        layout="responsive"
                        alt=""
                      />
                    </a>
                  </Link>
                  <p className="card-lavel">
                    <i className="bi bi-clock" />{" "}
                    <span>4 Day &amp; 3 night</span>
                  </p>
                </div>
                <div className="package-card-body">
                  <h3 className="p-card-title">
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                      onClick={scrollTop}
                    >
                      <a>
                        {" "}
                        Pellentesque habitant morbi malesua tristique senectus
                        et netus et.
                      </a>
                    </Link>
                  </h3>
                  <div className="p-card-bottom">
                    <div className="book-btn">
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                        onClick={scrollTop}
                      >
                        <a>
                          Book Now <i className="bx bxs-right-arrow-alt" />
                        </a>
                      </Link>
                    </div>
                    <div className="p-card-info">
                      <span>From</span>
                      <h6>
                        $67.00 <span>Per Person</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="package-card-delta">
                <div className="package-thumb">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                    onClick={scrollTop}
                  >
                    <a>
                      <Image
                        src="/images/package/best-s6.png"
                        height={20}
                        width={30}
                        layout="responsive"
                        alt=""
                      />
                    </a>
                  </Link>
                  <p className="card-lavel">
                    <i className="bi bi-clock" />{" "}
                    <span>3 Day &amp; 2 night</span>
                  </p>
                </div>
                <div className="package-card-body">
                  <h3 className="p-card-title">
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                      onClick={scrollTop}
                    >
                      <a>
                        {" "}
                        San Francisco Golden Gate Bridge, cable cars &amp; fog.
                      </a>
                    </Link>
                  </h3>
                  <div className="p-card-bottom">
                    <div className="book-btn">
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
                        onClick={scrollTop}
                      >
                        <a>
                          Book Now <i className="bx bxs-right-arrow-alt" />
                        </a>
                      </Link>
                    </div>
                    <div className="p-card-info">
                      <span>From</span>
                      <h6>
                        $67.00 <span>Per Person</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="package-page-btn text-center mt-60">
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/package`}
              onClick={scrollTop}
            >
              <a className="button-fill-primary"> View All Tours</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageArea;
