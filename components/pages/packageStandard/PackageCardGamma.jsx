import React from "react";
import Link from "next/link";

function PackageCardGamma(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="package-card-gamma">
        <div className="package-thumb">
          <Link
            onClick={scrollTop}
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
          >
            <a>
              {" "}
              <img src={props.image} alt="PackageIMG" />
            </a>
          </Link>
        </div>
        <div className="package-card-body">
          <p className="card-lavel">
            <i className="bi bi-clock" /> <span>{props.cardLavel}</span>
          </p>
          <h3 className="p-card-title">
            <Link
              onClick={scrollTop}
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
            >
              <a>{props.title}</a>
            </Link>
          </h3>
          <div className="p-card-bottom">
            <div className="book-btn">
              <Link
                onClick={scrollTop}
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
              >
                <a>
                  Book Now <i className="bx bxs-right-arrow-alt" />
                </a>
              </Link>
            </div>
            <div className="p-card-info">
              <span>From</span>
              <h6>
                {props.price} <span>/Person</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageCardGamma;
