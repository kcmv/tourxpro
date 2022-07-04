import React from "react";
import Link from "next/link";

function HomeOneDestinationCart(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="destination-card-style-one">
        <div className="d-card-thumb">
          <Link href="/destination-details">
            <a onClick={scrollTop}>
              <img src={props.image} alt="images" />
            </a>
          </Link>
        </div>
        <div className="d-card-overlay">
          <div className="d-card-content">
            <h3 className="d-card-title">
              <Link href="/destination-details">
                <a onClick={scrollTop}>{props.title}</a>
              </Link>
            </h3>
            <div className="d-card-info">
              <div className="place-count">
                <span>{props.place}</span> Place
              </div>
              <div className="hotel-count">
                <span>{props.hotel}</span> Hotel
              </div>
            </div>
            <ul className="d-rating">
              <li>
                <i className="bi bi-star-fill" />
              </li>
              <li>
                <i className="bi bi-star-fill" />
              </li>
              <li>
                <i className="bi bi-star-fill" />
              </li>
              <li>
                <i className="bi bi-star-fill" />
              </li>
              <li>
                <i className="bi bi-star-fill" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeOneDestinationCart;
