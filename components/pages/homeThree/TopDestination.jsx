import Image from "next/image";
import Link from "next/link";
import React from "react";

function TopDestination() {
  return (
    <>
      <div className="destination-area destination-style-two pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-10 ">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Top Destination</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-6 col-md-12 col-sm-10 fadeffect">
              <DestinationItem
                image="/images/destination/top-ds1.png"
                title="Grand Switzerland"
                place="45 Place"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 fadeffect">
              <DestinationItem
                image="/images/destination/top-ds2.png"
                title="Paris"
                place="35 Place"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 fadeffect">
              <DestinationItem
                image="/images/destination/top-ds3.png"
                title="Augsburg"
                place="15 Place"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 fadeffect">
              <DestinationItem
                image="/images/destination/top-ds4.png"
                title="dubai"
                place="25 Place"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 fadeffect">
              <DestinationItem
                image="/images/destination/top-ds5.png"
                title="Wiesbaden"
                place="10 Place"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-10 fadeffect">
              <DestinationItem
                image="/images/destination/top-ds6.png"
                title="UK"
                place="65 Place"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function DestinationItem(props) {
  return (
    <>
      <div className="destination-item">
        <div className="destination-img">
          <img src={`${props.image}`} alt="designation img" />
          {/* <Image src={props.image} height={300} width={300} alt="designation img" /> */}
        </div>
        <div className="destination-overlay">
          <div className="content">
            <Link href="/destination-details">
              <a>
                <h5>{props.title}</h5>
              </a>
            </Link>
            <Link href="/destination-details">
              <a>
                <h6>{props.place}</h6>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopDestination;
