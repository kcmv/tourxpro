import React from 'react'
import HomePageTwoLayout from "../components/layout/HomeageTowLayout";

const index = () => {
  return (
    <HomePageTwoLayout/>
  )
}

export default index

export async function getServerSideProps(context) {
  console.log("index2 server side call")
  return {
    props: {}, // will be passed to the page component as props
  }
}