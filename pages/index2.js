import React from 'react'
import HomePageTwoLayout from "../components/layout/HomeageTowLayout";

const index = () => {
  const data = {
    title: "Home Style 2",
    keywords: "Travel, Explore Top Destination", 
    description: "Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, sus",
    image: "/public/images/meta-images/home-style1.jpg"
  }
  return (
    <HomePageTwoLayout data={data}/>
  )
}

export default index

export async function getServerSideProps(context) {
  console.log("index2 server side call")
  return {
    props: {}, // will be passed to the page component as props
  }
}