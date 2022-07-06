import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import GuidePage from "../components/pages/guide/GuidePage";

const index = () => {
  const data = {
    title: "Guide",
    keywords: "Travel, Explore Top Destination",
    description:
      "Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, sus",
    image: "/public/images/meta-images/home-style1.jpg",
  };
  return (
    <LayoutWrapper data={data}>
      <GuidePage />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("guide server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
