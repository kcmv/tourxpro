import React from 'react'
import DestinationDetails from "../components/pages/destinationDetails/DestinationDetails";
const index = () => {
  return (
    <DestinationDetails/>
  )
}

export default index

export async function getServerSideProps(context) {
    console.log("destination details server side call")
    return {
      props: {}, // will be passed to the page component as props
    }
  }