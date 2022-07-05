import React from "react";
import Link from "next/link";
import Image from "next/image";

function StandardCard(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="blog-card-gamma-full">
        <div className="blog-thumb">
          <Link href="/blog-details">
            <a onClick={scrollTop}>
              <Image src={props.image} layout="responsive" height={16} width={30} alt="BlogStandardIMG" />
            </a>
          </Link>
          <div className="blog-lavel">
            <a href="#">Tourist</a>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-body-top">
            <a href="#" className="blog-writer">
              <i className="bi bi-person-circle" /> By {props.writter}
            </a>
            <a href="#" className="blog-comments">
              <i className="bi bi-calendar3" /> {props.date}
            </a>
            <a href="#" className="blog-comments">
              <i className="bi bi-chat-left-quote" /> Comment (08)
            </a>
          </div>
          <h4 className="blog-title">
            <Link href="/blog-details">
              <a onClick={scrollTop}> {props.title}</a>
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
}

export default StandardCard;
