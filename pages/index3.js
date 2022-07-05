import React from 'react'
import HomethreeLayout from "../components/layout/HomethreeLayout";
const index = () => {
  const data = {
    title: "Home Style 3 | TourXPro - Travels Tourism Agency",
    keywords: "Travel, Explore Top Destination", 
    description: "Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, sus",
    image: "/public/images/meta-images/home-style1.jpg"
  }
  return (
    <HomethreeLayout data={data}/>
  )
}

export default index
export async function getServerSideProps(context) {
    console.log("index3 server side call")
    return {
      props: {}, // will be passed to the page component as props
    }
  }