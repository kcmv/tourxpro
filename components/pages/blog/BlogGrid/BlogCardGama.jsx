import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";

function BlogCardGama(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="blog-card-gamma">
        <div className="blog-thumb">
          <Link href="/blog-details">
           <a> <img src={props.thumbImage} alt="BlogIMG" /></a>
          </Link>
          <div className="blog-lavel">
            <a href="#">Tourist</a>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-body-top">
            <a href="#" className="blog-writer">
              <i className="bi bi-person-circle" /> {props.writter}
            </a>
            <a href="#" className="blog-comments">
              <i className="bi bi-calendar3" />
              {props.date}
            </a>
          </div>
          <h4 className="blog-title">
            <Link
              onClick={scrollTop}
              href="/blog-details"
            >
              {props.title}
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
}

export default BlogCardGama;
