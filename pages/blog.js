import React from 'react'
import BlogGridPage from "../components/pages/blog/BlogGrid/BlogGridPage";
const index = () => {
  return (
    <BlogGridPage/>
  )
}

export default index

export async function getServerSideProps(context) {
  console.log("blog server side call")
  return {
    props: {}, // will be passed to the page component as props
  }
}