import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index

export async function getServerSideProps(context) {
    console.log("serverside")
    return {
      props: {}, // will be passed to the page component as props
    }
  }