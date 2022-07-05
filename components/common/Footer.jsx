import Link from "next/link";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

function Footer(props) {
  // smooth scrol
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={props.className}>
        <div className="footer-main-wrapper">
          <div className="footer-vactor">
            <Image
              src="/images/banner/footer-bg.png"
              layout="responsive"
              width={100}
              height={100}
              alt="FooterIMG"
            />
          </div>
          <div className="container">
            <div className="row justify-content-center g-4">
              <div className="col-lg-4">
                <div className="footer-about text-lg-start text-center">
                  <p>
                    Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                    venenatis hendrerit a id lectus. Suspendissendt molestie
                    turpis nec lacinia vehicula.
                  </p>
                  <div className="footer-social-wrap">
                    <h5>Follow Us On:</h5>
                    <ul className="footer-social-links justify-content-lg-start justify-content-center">
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.twitter.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.whatsapp.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.pinterest.com/"
                          target="_blank"
                          to={"#"}
                        >
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h3 className="footer-widget-title">Quick Link</h3>
                  <ul className="footer-links">
                    <li>
                      <Link href="/about">
                        <a onClick={scrollTop}>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/package">
                        <a onClick={scrollTop}>Tour Package</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination">
                        <a onClick={scrollTop}> Destination</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/guide">
                        <a onClick={scrollTop}> Tour Guide</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/package-details">
                        <a onClick={scrollTop}>Booking Process</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a onClick={scrollTop}> Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Tour Type</h4>
                  <ul className="footer-links">
                    <li>
                      <Link href="/package">
                        <a onClick={scrollTop}> Wild &amp; Adventure Tours</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/package">
                        <a onClick={scrollTop}>Group Tour</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/package">
                        <a onClick={scrollTop}> Seasonal Tours</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/package">
                        <a onClick={scrollTop}>Relaxation Tours</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/package">
                        <a onClick={scrollTop}>Family Friendly Tours</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <>
                <div className="col-lg-4 col-md-8">
                  <SRLWrapper>
                    <div className="footer-widget">
                      <h4 className="footer-widget-title text-center">
                        Gallery
                      </h4>
                      <div className="footer-gallary-grid">
                        <div className="footer-gallary-item">
                          <a
                            href="/images/gallary/fullsecrron01.png"
                            data-fancybox="footer"
                            data-caption="Caption Here"
                          >
                            <img
                              src="/images/gallary/fg-1.png"
                              alt="footerIMG"
                            />
                          </a>
                        </div>
                        <div className="footer-gallary-item">
                          <a
                            href="/images/gallary/fullsecrron02.png"
                            data-fancybox="footer"
                            data-caption="Caption Here"
                          >
                            <img
                              src="/images/gallary/fg-2.png"
                              alt="footerIMG"
                            />
                          </a>
                        </div>
                        <div className="footer-gallary-item">
                          <a
                            href="/images/gallary/fullsecrron06.png"
                            data-fancybox="footer"
                            data-caption="Caption Here"
                          >
                            <img
                              src="/images/gallary/fg-3.png"
                              alt="footerIMG"
                            />
                          </a>
                        </div>
                        <div className="footer-gallary-item">
                          <a
                            href="/images/gallary/fullsecrron05.png"
                            data-fancybox="footer"
                            data-caption="Caption Here"
                          >
                            <img
                              src="/images/gallary/fg-4.png"
                              alt="footerIMG"
                            />
                          </a>
                        </div>
                        <div className="footer-gallary-item">
                          <a
                            href="/images/gallary/fullsecrron03.png"
                            data-fancybox="footer"
                            data-caption="Caption Here"
                          >
                            <img
                              src="/images/gallary/fg-5.png"
                              alt="footerIMG"
                            />
                          </a>
                        </div>
                        <div className="footer-gallary-item">
                          <a
                            href="/images/gallary/fullsecrron06.png"
                            data-fancybox="footer"
                            data-caption="Caption Here"
                          >
                            <img
                              src="/images/gallary/fg-6.png"
                              alt="footerIMG"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SRLWrapper>
                </div>
              </>
            </div>
            <div className="footer-contact-wrapper">
              <h5>Contact Us:</h5>
              <ul className="footer-contact-list">
                <li>
                  <i className="bi bi-telephone-x" />
                  <a rel="noopener noreferrer" href="tel:+1 763-227-5032">
                    +1 763-227-5032
                  </a>
                </li>
                <li>
                  <i className="bi bi-envelope-open" />
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                  <i className="bi bi-geo-alt" />
                  <a href="#">2752 Willison Street Eagan, United State</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-6 order-lg-1 order-3 ">
                <div className="copyright-link text-lg-start text-center">
                  <p>
                    Copyright 2022 TourXPro | Design By
                    <a
                      rel="noopener noreferrer"
                      href="https://www.egenslab.com/"
                      target="_blank"
                    >
                      Egens Lab
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4  order-lg-2 order-1">
                <div className="footer-logo text-center">
                  <Link href="/">
                    <a onClick={scrollTop}>
                      <Image
                        src="/images/logo-w.png"
                        width={150}
                        height={18}
                        alt="footerIMG"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 order-lg-3 order-2">
                <div className="policy-links">
                  <ul className="policy-list justify-content-lg-end justify-content-center">
                    <li>
                      <a href="#">Terms &amp; Condition</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
