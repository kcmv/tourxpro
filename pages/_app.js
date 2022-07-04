import React from "react";
// import { useRouter } from "next/router";
// import MainLayout from "../components/layout/MainLayout";
// import HomePageTwoLayout from "../components/layout/HomeageTowLayout";
// import HomethreeLayout from "../components/layout/HomethreeLayout";
// import HomeFourLayout from "../components/layout/HomeFourLayout";
// import About from "../components/pages/about/About"
// import Destinations from "../components/pages/destinetion/Destinatination"
// import DestinationDetails from "../components/pages/destinationDetails/DestinationDetails";
// import PackageGrid from "../components/pages/packageGrid/PackageGrid";
// import PackageSidebar from "../components/pages/packageSidebar/PackageSIdebar";
// import PackageStandard from "../components/pages/packageStandard/PackageStandard";
// import PackageDetails from "../components/pages/packageDetails/PackageDetails";
// import BlogGridPage from "../components/pages/blog/BlogGrid/BlogGridPage";
// import BlogDetailsPage from "../components/pages/blog/blogdetails/BlogDetailsPage";
// import BlogStandard from "../components/pages/blog/BlogStandard/BlogStandard";
// import BlogSidebar from "../components/pages/blog/BlodSidebar/BlogSidebar";
// import GuidePage from "../components/pages/guide/GuidePage";
// import FaqPage from "../components/pages/faq/FaqPage";
// import GallaryPage from "../components/pages/gallary/GallaryPage";
// import Contact from "../components/pages/contact/Contact";
// import Error from "../components/pages/error/Error";
import SimpleReactLightbox from "simple-react-lightbox";
import "./index.css";

// const links = [
//   {
//     link: "/index2",
//     component: <HomePageTwoLayout />,
//     page: "HomePageTwo"
//   },
//   {
//     link: "/index3",
//     component: <HomethreeLayout />,
//   },
//   {
//     link: "/index4",
//     component: <HomeFourLayout />,
//   },
//   {
//     link: "/destination",
//     component: <Destinations />,
//   },
//   {
//     link: "/destination-details",
//     component: <DestinationDetails/>
//   },
//   {
//     link: "/package",
//     component: <PackageGrid/>
//   },
//   {
//     link: "/package-sidebar",
//     component: <PackageSidebar/>
//   },
//   {
//     link: "/package-standard",
//     component: <PackageStandard/>
//   },
//   {
//     link: "/package-details",
//     component: <PackageDetails/>
//   },
//   {
//     link: "/blog",
//     component: <BlogGridPage/>
//   },
//   {
//     link: "/blog-details",
//     component: <BlogDetailsPage/>
//   },
//   {
//     link: "/blog-standard",
//     component: <BlogStandard/>
//   },
//   {
//     link: "/blog-sidebar",
//     component: <BlogSidebar/>
//   },
//   {
//     link: "/guide",
//     component: <GuidePage/>
//   },
//   {
//     link: "/faq",
//     component: <FaqPage/>
//   },
//   {
//     link: "/gallary",
//     component: <GallaryPage/>
//   },
//   {
//     link: "/contact",
//     component: <Contact/>
//   },
//   {
//     link: "/error",
//     component: <Error/>
//   }
// ];

function MyApp({ Component, pageProps }) {
  // const route = useRouter();
  // const [paths, setPaths] = React.useState();

  // React.useEffect(() => {
  //   const value = links.filter((item) => item.link === route.asPath);
  //   if (value.length > 0) {
  //     setPaths(value[0].component);
  //   }
  // }, []);

  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
      {/* {paths ? paths : <Component {...pageProps} />} */}
    </SimpleReactLightbox>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
