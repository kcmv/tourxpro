import Image from "next/image";
import React from "react";

function GuideCardAlpha(props) {
  return (
    <>
      <div className="guide-card-alpha">
        <div className="guide-image">
          <Image src={props.image} layout="responsive" height={7.7} width={10} alt="images"/>
          <ul className="guide-social-links">
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.twitter.com/"
                target="_blank"
              >
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.whatsapp.com/"
                target="_blank"
              >
                <i className="bx bxl-whatsapp" />
              </a>
            </li>
          </ul>
        </div>
        <div className="guide-content">
          <h4 className="guide-name">{props.name}</h4>
          <h6 className="guide-designation">Tour Guide</h6>
        </div>
      </div>
    </>
  );
}

export default GuideCardAlpha;
