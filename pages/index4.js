import React from 'react'
import HomeFourLayout from "../components/layout/HomeFourLayout";
const index = () => {
  const data = {
    title: "Home Style 4",
    keywords: "Travel, Explore Top Destination", 
    description: "Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, sus",
    image: "/public/images/meta-images/home-style1.jpg"
  }
  return (
    <HomeFourLayout data={data}/>
  )
}

export default index

export async function getServerSideProps(context) {
    console.log("index4 server side call")
    return {
      props: {}, // will be passed to the page component as props
    }
  }