import React from 'react'
import Contact from "../components/pages/contact/Contact";
const index = () => {
  return (
    <Contact/>
  )
}

export default index

export async function getServerSideProps(context) {
  console.log("contact server side call")
  return {
    props: {}, // will be passed to the page component as props
  }
}