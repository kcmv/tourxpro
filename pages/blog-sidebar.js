import React from 'react'
import BlogSidebar from "../components/pages/blog/BlodSidebar/BlogSidebar";
const index = () => {
  return (
   <BlogSidebar/>
  )
}

export default index

export async function getServerSideProps(context) {
    console.log("blog-sidebar server side call")
    return {
      props: {}, // will be passed to the page component as props
    }
  }