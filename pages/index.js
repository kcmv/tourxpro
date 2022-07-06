import React from "react";
import MainLayout from "../components/layout/MainLayout";

const index = () => {
  const data = {
    title: "Home Style 1",
    keywords: "Travel, Explore Top Destination", 
    description: "Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, sus",
    image: "/public/images/meta-images/home-style1.jpg"
  }
  return (
      <MainLayout data={data}/>
  );
};

export default index;
