import React from 'react'
import Destinations from "../components/pages/destinetion/Destinatination"

const index = () => {
  return (
    <Destinations/>
  )
}

export default index

export async function getServerSideProps(context) {
  console.log("destination server side call")
  return {
    props: {}, // will be passed to the page component as props
  }
}