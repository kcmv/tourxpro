import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import Destinations from "../components/pages/destinetion/Destinatination";

const index = () => {
  const data = {
    title: "Destination | TourXPro - Travels Tourism Agency",
    keywords: "Travel, Explore Top Destination",
    description:
      "Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, sus",
    image: "/public/images/meta-images/home-style1.jpg",
  };
  return (
    <LayoutWrapper data={data}>
      <Destinations />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("destination server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
