import React from "react";
import Link from "next/link";

function BannerWidget() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <aside className="widget-banner mt-30">
        <Link
          onClick={scrollTop}
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/package-details`}
        >
        <a>  <img src={process.env.NEXT_PUBLIC_BASE_URL + "/images/banner/sidebar-banner.png"} alt="PackgerIMG" className="img-fluid" /></a>
        </Link>
      </aside>
    </>
  );
}

export default BannerWidget;
