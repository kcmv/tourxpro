import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";

function BlogCardAlpha(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="blog-card-alpha">
        <div className="blog-thumb">
          <Link  href="/blog-details">
            <a onClick={scrollTop}>
              <img src={props.image} alt="BlogIMG" />
            </a>
          </Link>
          <div className="blog-lavel">
              <a href="#">
                <i className="bi bi-calendar3" /> {props.date}
              </a>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-body-top">
              <a href="#" className="blog-writer">
                <i className="bi bi-person-circle" /> By {props.name}
              </a>
              <a href="#" className="blog-comments">
                <i className="bi bi-chat-dots-fill" /> Comment ({props.comments}
                )
              </a>
          </div>
          <h4 className="blog-title">
            <Link  href="/blog-details">
              <a onClick={scrollTop}> {props.title}</a>
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
}

export default BlogCardAlpha;
