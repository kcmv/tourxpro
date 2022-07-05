import React, { useState, useReducer, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function Header({data}) {
  const { title, keywords, description, image } = data
  const [isSearchActive, setSearchActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [isCatagoryActive, setCatagoryActive] = useState(false);
  const [isOpenActive, setOpenActive] = useState(false);

  /*useing reducer to manage the active or inactive menu*/

  useEffect(() => {
    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
      const header = document.querySelector("header");
      const scrollTop = window.scrollY;
      scrollTop >= 200
        ? header.classList.add("sticky")
        : header.classList.remove("sticky");
    };

    // Add scroll event when the component is loaded
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  // /* Method that will fix header after a specific scrollable */
  // const isSticky = (e) => {
  //   const header = document.querySelector("header");
  //   const scrollTop = window.scrollY;
  //   scrollTop >= 200
  //     ? header.classList.add("sticky")
  //     : header.classList.remove("sticky");
  // };

  const initialState = { activeMenu: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "homeOne":
        return { activeMenu: "homeOne" };
      case "page":
        return { activeMenu: "page" };
      case "package":
        return { activeMenu: "package" };
      case "blog":
        return { activeMenu: "blog" };
      case "destination":
        return { activeMenu: "destination" };
      default:
        return { activeMenu: " " };
    }
  }

  const handleSearcghBtn = () => {
    if (isSearchActive === false || isSearchActive === 0) {
      setSearchActive(1);
    } else {
      setSearchActive(false);
    }
  };

  const handleCatagorybtn = () => {
    if (isCatagoryActive === false || isCatagoryActive === 0) {
      setCatagoryActive(1);
    } else {
      setCatagoryActive(false);
    }
  };
  const handleOpenBtn = () => {
    if (isOpenActive === false || isOpenActive === 0) {
      setOpenActive(1);
    } else {
      setOpenActive(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const optionsForDestination = [
    { value: "1", label: "India" },
    { value: "2", label: "Sri Lanka" },
    { value: "3", label: "Solt Lake" },
    { value: "4", label: " Kolkata" },
    { value: "6", label: " Mohania" },
    { value: "7", label: " Mumbai" },
    { value: "8", label: " New Delhi" },
  ];
  const optionsForTravel = [
    { value: "1", label: "Adventure Tour" },
    { value: "2", label: "Group Tour" },
    { value: "3", label: "Couple Tour" },
    { value: "4", label: "Sea Beach" },
    { value: "5", label: "Mountain Tour" },
  ];
  const optionsForPerson = [
    { value: "1", label: "01" },
    { value: "2", label: "02" },
    { value: "3", label: "03" },
    { value: "4", label: "04" },
    { value: "5", label: "05" },
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
          key="canonical"
        />
        <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        <meta
          name="keywords"
          content={keywords}
          key="keywords"
        />
        <meta
          name="description"
          content={description}
          key="desc"
        />
        <meta
          property="og:title"
          content="TourXPro - Travels Tourism Agency"
        />
        <meta
          property="og:image"
          content={image}
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="TourXPro - Travels Tourism Agency"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="ROBOTS" content="FOLLOW,INDEX" />
      </Head>
      <div
        className={`${"main-searchbar-wrapper"} ${
          isSearchActive === 1 ? "search-active" : ""
        }`}
      >
        <div className="container">
          <div className="multi-main-searchber">
            <div
              onClick={handleSearcghBtn}
              className="main-searchbar-close search-toggle"
            >
              <i className="bi bi-x-lg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} id="main_searchbar">
              <div className="row g-4">
                <div className="col-lg-10">
                  <div className="row gx-0 gy-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="select-box">
                        <div className="searchbox-icons">
                          <i className="bi bi-geo-alt" />
                        </div>
                        <div className="searchbox-input">
                          <label htmlFor="activity-dropdown">Destination</label>
                          <Select
                            placeholder="Whare are you going?"
                            className="selectbox"
                            onChange={setSelectedOption}
                            defaultValue={selectedOption}
                            options={optionsForDestination}
                            touchUi={false}
                            showGroupWheel={true}
                          ></Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="select-box">
                        <div className="searchbox-icons">
                          <i className="bi bi-text-paragraph" />
                        </div>
                        <div className="searchbox-input">
                          <label htmlFor="activity-dropdown">Travel Type</label>
                          <Select
                            className="selectbox"
                            placeholder="All activities"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={optionsForTravel}
                          ></Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="select-box">
                        <div className="searchbox-icons">
                          <i className="bi bi-person-plus" />
                        </div>
                        <div className="searchbox-input">
                          <label htmlFor="activity-dropdown">Person</label>
                          <Select
                            className="selectbox"
                            onChange={setSelectedOption}
                            placeholder="Person"
                            defaultValue={selectedOption}
                            options={optionsForPerson}
                          ></Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="select-box">
                        <div className="searchbox-icons">
                          <i className="bi bi-capslock" />
                        </div>
                        <div className="searchbox-input">
                          <label htmlFor="activity-dropdown">
                            Journey Date
                          </label>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="main-form-submit">
                    <Link href="/package">
                      <a onClick={scrollTop}>
                        <button type="submit">Find Now</button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`${"category-sidebar-wrapper"} ${
          isCatagoryActive === 1 ? "category-active" : ""
        }`}
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
                    <img src="/images/icons/cate1.svg" alt="catagoryIMG" />
                  </div>
                  <h5>Adventure</h5>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link className="category-box" href="/package">
                <a onClick={scrollTop}>
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate2.svg" alt="catagoryIMG" />
                  </div>
                  <h5>Group Tour</h5>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link className="category-box" href="/package">
                <a onClick={scrollTop}>
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate3.svg" alt="catagoryIMG" />
                  </div>
                  <h5>Couple Tour</h5>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link className="category-box" href="/package">
                <a onClick={scrollTop}>
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate4.svg" alt="catagoryIMG" />
                  </div>
                  <h5>Single Tour</h5>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link className="category-box" href="/package">
                <a>
                  {" "}
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate5.svg" alt="catagoryIMG" />
                  </div>
                  <h5>Honeymoon</h5>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link className="category-box" href="/package">
                <a onClick={scrollTop}>
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate6.svg" alt="catagoryIMG" />
                  </div>
                  <h5>Sea Beach</h5>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link className="category-box" href="/package">
                <a onClick={scrollTop}>
                  <div className="cate-icon mx-auto">
                    <img src="/images/icons/cate7.svg" alt="catagoryIMG" />
                  </div>
                  <h5>Mountain Tour</h5>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="topbar-area topbar-style-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 align-items-center d-xl-flex d-none">
              <div className="topbar-contact-left">
                <ul className="contact-list">
                  <li>
                    <i className="bi bi-telephone-fill" />
                    <a href="tel:+1-847-555-5555"> +1 763-227-5032</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill" />
                    <a href="mailto:someone@example.com">info@example.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6 text-xl-center text-md-start text-center">
              <div className="topbar-ad">
                <Link href="/package">
                  <a onClick={scrollTop}> Black Friday Big Offer</a>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 d-md-flex  d-none align-items-center justify-content-end">
              <ul className="topbar-social-links">
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/"
                  >
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <i className="bx bxl-instagram-alt" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/"
                  >
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.whatsapp.com/"
                  >
                    <i className="bx bxl-whatsapp-square" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.pinterest.com/"
                  >
                    <i className="bx bxl-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header>
        <div className="header-area header-style-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block">
                <div className="logo d-flex justify-content-between align-items-center">
                  <Link href="/">
                    <a onClick={scrollTop}>
                      <img src="/images/logo.png" alt="logo" />
                    </a>
                  </Link>
                  <div className="d-flex align-items-center gap-4">
                    <div className="nav-right d-xl-none">
                      <ul className="nav-actions">
                        <li
                          onClick={handleCatagorybtn}
                          className="category-toggle"
                        >
                          <i className="bx bx-category" />
                        </li>
                        <li
                          className="search-toggle"
                          onClick={handleSearcghBtn}
                        >
                          <i className="bx bx-search-alt" />
                        </li>
                      </ul>
                    </div>
                    <div
                      className="mobile-menu d-flex "
                      onClick={handleOpenBtn}
                    >
                      <a
                        href="#"
                        className={
                          isOpenActive
                            ? "hamburger d-block d-xl-none h-active"
                            : "hamburger d-block d-xl-none"
                        }
                      >
                        <a>
                          <span className="h-top" />
                          <span className="h-middle" />
                          <span className="h-bottom" />
                        </a>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-6">
                <nav
                  className={
                    isOpenActive
                      ? "main-nav float-end slidenav"
                      : "main-nav float-end"
                  }
                >
                  <div className="logo d-xl-none text-center">
                    <a href="#">
                      <img src="/images/logo.png" alt="catagoryIMG" />
                    </a>
                  </div>
                  <ul>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: "homeOne" })}
                    >
                      <a href="#">Home</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === "homeOne"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link href="/">
                            <a onClick={scrollTop}> Home Style 1</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index2">
                            <a onClick={scrollTop}>Home Style 2</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index3">
                            <a onClick={scrollTop}>Home Style 3</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index4">
                            <a onClick={scrollTop}> Home Style 4</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/about">
                        <a onClick={scrollTop}> About Us</a>
                      </Link>
                    </li>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: "destination" })}
                    >
                      <a href="#">Destination</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === "destination"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link href="/destination">
                            <a onClick={scrollTop}>Destination</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/destination-details">
                            <a onClick={scrollTop}>Destination Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: "package" })}
                    >
                      <a href="#">Package</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === "package"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
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
                            <a onClick={scrollTop}> Package Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: "blog" })}
                    >
                      <a href="#">Blogs</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === "blog"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link href="/blog">
                            <a onClick={scrollTop}> Blog Grid</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-sidebar">
                            <a onClick={scrollTop}>Blog Sidebar</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-standard">
                            <a onClick={scrollTop}>Blog Standard</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <a onClick={scrollTop}> Blog Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: "page" })}
                    >
                      <a href="#">Pages</a>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === "page"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link href="/guide">
                            <a onClick={scrollTop}> Guide</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/gallary">
                            <a onClick={scrollTop}>Gallery</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/faq">
                            <a onClick={scrollTop}>FAQ</a>
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
                        <a onClick={scrollTop}> Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                  <div className="inner-contact-options d-xl-none">
                    <div className="contact-box-inner">
                      <i className="bi bi-telephone-fill" />
                      <a href="tel:+17632275032">+1 763-227-5032</a>
                    </div>
                    <div className="contact-box-inner">
                      <i className="bi bi-envelope-fill" />
                      <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xl-2">
                <div className="nav-right float-end d-xl-flex d-none ">
                  <ul className="nav-actions">
                    <li className="category-toggle" onClick={handleCatagorybtn}>
                      <i className="bx bx-category" />
                    </li>
                    <li className="search-toggle" onClick={handleSearcghBtn}>
                      <i className="bx bx-search-alt" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ===============  header area end =============== */}
    </>
  );
}

export default React.memo(Header);
