import Image from "next/image";
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
function GallaryArea() {
  return (
    <>
      <SRLWrapper>
        <div className="gallary-area gallary-style-one pt-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-head-alpha text-center mx-auto">
                  <h2>Travel Gallery</h2>
                  <p>
                    Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                    venenatis hendrerit a id lectus. Suspendissendt blandit
                    interdum. Sed pellentesque at nunc eget consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="gallery-wrapper">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="gallary-item">
                    <Image
                      src="/images/gallary/g-xl1.png"
                      height={40}
                      width={30}
                      layout="responsive"
                      alt="ImageGallery"
                    />
                    <a
                      className="gallary-item-overlay"
                      href="/images/gallary/tourfullscreen04.png"
                    >
                      <Image
                        src="/images/gallary/g-xl1.png"
                        height={40}
                        width={30}
                        layout="responsive"
                        alt="ImageGallery"
                      />
                    </a>
                  </div>
                  <div className="gallary-item">
                    <Image
                      src="/images/gallary/g-md1.png"
                      height={21.5}
                      width={30}
                      layout="responsive"
                      alt="ImageGallery"
                    />
                    <a
                      className="gallary-item-overlay"
                      href="/images/gallary/tourfullscreen06.png"
                    >
                      <Image
                        src="/images/gallary/g-md1.png"
                        height={21.5}
                        width={30}
                        layout="responsive"
                        alt="ImageGallery"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="gallary-item">
                    <Image
                      src="/images/gallary/g-sm1.png"
                      height={19}
                      width={30}
                      layout="responsive"
                      alt="ImageGallery"
                    />
                    <a
                      className="gallary-item-overlay"
                      href="/images/gallary/tourfullscreen02.png"
                    >
                      <Image
                        src="/images/gallary/g-sm1.png"
                        height={18}
                        width={30}
                        layout="responsive"
                        alt="ImageGallery"
                      />
                    </a>
                  </div>
                  <div className="gallary-item">
                    <Image
                        src="/images/gallary/g-sm2.png"
                        height={18}
                        width={30}
                        layout="responsive"
                        alt="ImageGallery"
                      />
                    <a
                      className="gallary-item-overlay"
                      href="/images/gallary/tourfullscreen07.png"
                    >
                      <Image
                        src="/images/gallary/g-sm2.png"
                        height={18}
                        width={30}
                        layout="responsive"
                        alt="ImageGallery"
                      />
                    </a>
                  </div>
                  <div className="gallary-item">
                    <Image
                      src="/images/gallary/g-md2.png"
                      height={22}
                      width={30}
                      layout="responsive"
                      alt="ImageGallery"
                    />
                    <a
                      className="gallary-item-overlay"
                      href="/images/gallary/tourfullscreen05.png"
                    >
                      <Image
                        src="/images/gallary/g-md2.png"
                        height={22}
                        width={30}
                        layout="responsive"
                        alt="ImageGallery"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="gallary-item">
                    <Image
                      src="/images/gallary/g-xl2.png"
                      height={40}
                      width={30}
                      layout="responsive"
                      alt="ImageGallery"
                    />

                    <a
                      className="gallary-item-overlay"
                      href="/images/gallary/tourfullscreen01.png"
                    >
                      <Image
                        src="/images/gallary/g-xl2.png"
                        height={40}
                        width={30}
                        layout="responsive"
                        alt="ImageGallery"
                      />
                    </a>
                  </div>
                  <div className="gallary-item">
                    <Image
                      src="/images/gallary/g-md3.png"
                      height={21.5}
                      width={30}
                      layout="responsive"
                      alt="ImageGallery"
                    />

                    <a
                      className="gallary-item-overlay"
                      href="/images/gallary/tourfullscreen03.png"
                    >
                      <Image
                        src="/images/gallary/g-md3.png"
                        height={21.5}
                        width={30}
                        layout="responsive"
                        alt="ImageGallery"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default GallaryArea;
