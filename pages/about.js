import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
// import About from "../components/pages/about/About";

const DynamicAbout = dynamic(() => import("../components/pages/about/About"), {
  suspense: true,
});

const index = () => {
  const data = {
    title: "About Us",
    keywords: "Travel, Explore Top Destination",
    description:
      "Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, sus",
    image: "/public/images/meta-images/home-style1.jpg",
  };
  return (
    <LayoutWrapper data={data}>
      <Suspense fallback={`Loading...`}>
        <DynamicAbout />
      </Suspense>
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("about server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
