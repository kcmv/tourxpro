import React from "react";
import Link from "next/link";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade]);
function Home3HeroArea() {
  const hero3Silde = {
    slidesPerView: 1,
    speed: 1500,
    parallax: true,
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    roundLengths: true,
    effect: "fade",
    navigation: {
      nextEl: ".hero-next3",
      prevEl: ".hero-prev3",
    },

    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".hero-two-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
      },
    },
  };
  return (
    <>
      <div className="hero-area hero-style-three">
        <img
          src={process.env.NEXT_PUBLIC_BASE_URL + "/images/banner/banner-plane.svg"}
          className="img-fluid banner-plane"
          alt="banners-img"
        />
        <div className="hero-main-wrapper position-relative">
          <div className="hero-social">
            <ul className="social-list d-flex justify-content-center align-items-center gap-4">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">instagram</a>
              </li>
              <li>
                <a href="#">Linked in</a>
              </li>
            </ul>
          </div>
          <Swiper className="swiper  hero-slider-three " {...hero3Silde}>
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="slider-bg-1">
                  <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-lg-8">
                        <div className="hero3-content">
                          <span className="title-top">
                            Wellcome To TuorX Pro
                          </span>
                          <h1>Journey to Explore World</h1>
                          <p>
                            Nulla facilisi. Maecenas ac tellus ut ligula
                            interdum convallis. Nullam dapibus on erat in dolor
                            posuere, none hendrerit lectus ornare. Suspendisse
                            sit amet turpina sagittis, ultrices dui et, aliquam
                            urna.
                          </p>
                          <a
                            href="#"
                            className="button-fill-primary banner3-btn"
                          >
                            Book Your Travel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="slider-bg-3">
                  <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-lg-8">
                        <div className="hero3-content">
                          <span className="title-top">
                            Wellcome To TuorX Pro
                          </span>
                          <h1>Enjoy Your New Adventure</h1>
                          <p>
                            Nulla facilisi. Maecenas ac tellus ut ligula
                            interdum convallis. Nullam dapibus on erat in dolor
                            posuere, none hendrerit lectus ornare. Suspendisse
                            sit amet turpina sagittis, ultrices dui et, aliquam
                            urna.
                          </p>
                          <a
                            href="#"
                            className="button-fill-primary banner3-btn"
                          >
                            Book Your Travel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="slider-arrows text-center d-lg-flex flex-column d-none gap-5">
            <div
              className="hero-prev3"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <i className="bi bi-arrow-left" />
            </div>
            <div
              className="hero-next3"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home3HeroArea;
