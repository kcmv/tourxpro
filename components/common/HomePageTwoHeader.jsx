import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import Link from "next/link";

function HomePageTwoHeader() {
  const [isCatagoryActive, setCatagoryActive] = useState(false);
  const [isUserDropdown, setUserDropdown] = useState(false);
  const [mobileSideberMenu, setMobileSideberMenu] = useState(0);
  const handleUserDropDown = () => {
    if (isUserDropdown === false || isUserDropdown === 0) {
      setUserDropdown(1);
    } else {
      setUserDropdown(false);
    }
  };
  const handleMobileSiderbar = () => {
    if (mobileSideberMenu === false || mobileSideberMenu === 0) {
      setMobileSideberMenu(1);
    } else {
      setMobileSideberMenu(false);
    }
  };
  const handleCatagorybtn = () => {
    if (isCatagoryActive === false || isCatagoryActive === 0) {
      setCatagoryActive(1);
    } else {
      setCatagoryActive(false);
    }
  };
  useEffect(() => {
    // Add scroll event when the component is loaded
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div
        className={`${"category-sidebar-wrapper"} ${
          isCatagoryActive === 1 ? "category-active" : ""
        } `}
      >
        <div className="category-sidebar">
          <div className="category-header d-flex justify-content-between align-items-center">
            <h4>Category</h4>
            <div onClick={handleCatagorybtn} className="category-toggle">
              <i className="bi bi-x-lg" />
            </div>
          </div>
          <div className="row row-cols-lg-3 row-cols-2 gy-5 mt-3">
            <div className="col">
              <Link className="category-box" href="/package">
                <a onClick={scrollTop}>
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate1.svg" alt="images" />
                  </div>
                  <h5>Adventure</h5>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link className="category-box" href="/package">
                <a onClick={scrollTop}>
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate2.svg" alt="images" />
                  </div>
                  <h5>Group Tour</h5>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link className="category-box" href="/package">
                <a onClick={scrollTop}>
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate3.svg" alt="images" />
                  </div>
                  <h5>Couple Tour</h5>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link className="category-box" href="/package">
                <a onClick={scrollTop}>
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate4.svg" alt="images" />
                  </div>
                  <h5>Single Tour</h5>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link className="category-box" href="/package">
                <a onClick={scrollTop}>
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate5.svg" alt="images" />
                  </div>
                  <h5>Honeymoon</h5>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link className="category-box" href="/package">
                <a onClick={scrollTop}>
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate6.svg" alt="images" />
                  </div>
                  <h5>Sea Beach</h5>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link className="category-box" href="/package">
                <a onClick={scrollTop}>
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate7.svg" alt="images" />
                  </div>
                  <h5>Mountain Tour</h5>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div
          className={`${"header-area header-style-two"} ${
            isSticky && "sticky"
          }`}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-7 col-lg-8 col-md-8 col-sm-6 col-xs-6">
                <nav
                  className={
                    mobileSideberMenu === 1 ? "main-nav slidenav" : "main-nav"
                  }
                >
                  <div className="inner-logo d-xl-none text-center">
                    <Link href="/">
                      <a onClick={scrollTop}>
                        <img src="/images/logo.png" alt="Logo" />
                      </a>
                    </Link>
                  </div>
                  <ul>
                    <li className="has-child-menu">
                      <a href="#">Home</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/">
                            <a>Home Style 1</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index2">
                            <a> Home Style 2</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index3">
                            <a>Home Style 3</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index4">
                            <a>Home Style 4</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/about">
                        <a onClick={scrollTop}> About Us</a>
                      </Link>
                    </li>
                    <li className="has-child-menu">
                      <a onClick={scrollTop} href="#">
                        Destination
                      </a>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/destination">
                            <a onClick={scrollTop}> Destination</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/destination-details">
                            <a onClick={scrollTop}>Destination Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a a="ref">Package</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/package">
                            <a onClick={scrollTop}> Package Grid</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/package-sidebar">
                            <a onClick={scrollTop}>Package Sidebar</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/package-standard">
                            <a onClick={scrollTop}>Package Standard</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/package-details">
                            <a onClick={scrollTop}>Package Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a href="#">Blogs</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/blog">
                            <a onClick={scrollTop}>Blog Grid</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-sidebar">
                            <a onClick={scrollTop}> Blog Sidebar</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-standard">
                            <a onClick={scrollTop}> Blog Standard</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <a onClick={scrollTop}> Blog Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <a href="#">Pages</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/guide">
                            <a onClick={scrollTop}>Guide</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/gallary">
                            <a onClick={scrollTop}>Gallary</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/faq">
                            <a onClick={scrollTop}> FAQ</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/error">
                            <a onClick={scrollTop}>404</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a onClick={scrollTop}>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                  <div className="inner-contact-options d-xl-none">
                    <div className="contact-box-inner">
                      <i className="bi bi-telephone-fill" />
                      <a href={"tel:+17632275032"}>+1 763-227-5032</a>
                    </div>
                    <div className="contact-box-inner">
                      <i className="bi bi-envelope-fill" />
                      <a href={"mailto:info@domainname.com"}>
                        info@domainname.com
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block">
                <div className="nav-logo d-flex justify-content-between align-items-center">
                  <Link href="/">
                    <a onClick={scrollTop}>
                      <img src={"/images/logo-w.png"} alt="logo" />
                    </a>
                  </Link>
                  <div className="mobile-menu d-flex ">
                    <div className="d-flex align-items-center">
                      <div className="nav-right-icons d-xl-none d-flex align-items-center ">
                        <div className="user-dropdown">
                          <i
                            onClick={handleUserDropDown}
                            className="bx bx-user-circle"
                          />
                          <ul
                            className={`${"user-drop-list"} ${
                              isUserDropdown === 1 ? "account-drop-active" : ""
                            }`}
                          >
                            <li>
                              <a href="#">My Account</a>
                            </li>
                            <li>
                              <a href="#">Login</a>
                            </li>
                            <li>
                              <a href="#">Registration</a>
                            </li>
                            <li>
                              <a href="#">Setting</a>
                            </li>
                          </ul>
                        </div>
                        <div
                          onClick={handleCatagorybtn}
                          className="category-toggle"
                        >
                          <i className="bx bx-category" />
                        </div>
                      </div>
                      <a
                        href="#"
                        onClick={handleMobileSiderbar}
                        className={
                          mobileSideberMenu === 1
                            ? "hamburger d-block d-xl-none h-active"
                            : "hamburger d-block d-xl-none"
                        }
                      >
                        <span className="h-top" />
                        <span className="h-middle" />
                        <span className="h-bottom" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="nav-right d-xl-flex d-none">
                  <div className="nav-right-icons">
                    <div className="user-dropdown">
                      <i
                        onClick={handleUserDropDown}
                        className="bx bx-user-circle"
                      />
                      <ul
                        className={`${"user-drop-list"} ${
                          isUserDropdown === 1 ? "account-drop-active" : ""
                        }`}
                      >
                        <li>
                          <a href="#">My Account</a>
                        </li>
                        <li>
                          <a href="#">Login</a>
                        </li>
                        <li>
                          <a href="#">Registration</a>
                        </li>
                        <li>
                          <a href="#">Setting</a>
                        </li>
                      </ul>
                    </div>
                    <div
                      onClick={handleCatagorybtn}
                      className="category-toggle"
                    >
                      <i className="bx bx-category" />
                    </div>
                  </div>
                  <div className="nav-right-hotline">
                    <div className="hotline-icon">
                      <i className="bi bi-phone-vibrate" />
                    </div>
                    <div className="hotline-info">
                      <span>Hot Line Number</span>
                      <h6>
                        <a
                          rel="noopener noreferrer"
                          href="tel: +880 176 1111 456"
                        >
                          +880 176 1111 456
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HomePageTwoHeader;
