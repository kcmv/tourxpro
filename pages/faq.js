import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import FaqPage from "../components/pages/faq/FaqPage";

const index = () => {
  const data = {
    title: "FAQ",
    keywords: "Travel, Explore Top Destination",
    description:
      "Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, sus",
    image: "/public/images/meta-images/home-style1.jpg",
  };
  return (
    <LayoutWrapper data={data}>
      <FaqPage />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("faq server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
