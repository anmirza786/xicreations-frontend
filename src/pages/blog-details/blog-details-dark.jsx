import React from "react";
import blog3Data from "../../data/blog3.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/blog-details";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { loadblog } from "../../reduxIntegration/actions";

const BlogDetailsDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const router = useRouter();
  const { blogid } = router.query;
  const dispatch = useDispatch();

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    dispatch(loadblog(blogid));
  }, [navbarRef, blogid]);
  const data = useSelector((state) => state.singleBlog);
  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title="Blog Details."
        paragraph="All the most current news and events of our creative team."
      />
      {data && <BlogDetails blog={data} />}
      <Footer />
    </DarkTheme>
  );
};

export default BlogDetailsDark;
