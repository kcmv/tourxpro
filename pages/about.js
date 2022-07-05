import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import About from "../components/pages/about/About";
const index = () => {
  const data = {
    title: "About Us | TourXPro - Travels Tourism Agency",
    keywords: "Travel, Explore Top Destination", 
    description: "Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, sus",
    image: "/public/images/meta-images/home-style1.jpg"
  }
  return (
    <LayoutWrapper data={data}>
      <About />
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
