import React from 'react'
import FaqPage from "../components/pages/faq/FaqPage";

const index = () => {
  return (
    <FaqPage/>
  )
}

export default index

export async function getServerSideProps(context) {
  console.log("faq server side call")
  return {
    props: {}, // will be passed to the page component as props
  }
}