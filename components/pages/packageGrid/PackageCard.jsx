import React from "react";
import Link from "next/link";

function PackageCard(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="package-card-alpha">
        <div className="package-thumb">
          <Link  href="/package-details">
            <a onClick={scrollTop}>
              <img src={props.image} alt="images" />
            </a>
          </Link>
          <p className="card-lavel">
            <i className="bi bi-clock" /> <span>{props.date}</span>
          </p>
        </div>
        <div className="package-card-body">
          <h3 className="p-card-title">
            <Link href="/package-details">
             <a  onClick={scrollTop}>  {props.title}</a>
            </Link>
          </h3>
          <div className="p-card-bottom">
            <div className="book-btn">
              <Link  href="/package-details">
                <a onClick={scrollTop}>
                  Book Now <i className="bx bxs-right-arrow-alt" />
                </a>
              </Link>
            </div>
            <div className="p-card-info">
              <span>From</span>
              <h6>
                {props.price} <span>Per Person</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageCard;
