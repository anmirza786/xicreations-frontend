import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ProjectDetails2Header from "../../components/Project-details2-header/project-details2-header";
import ProjectDate from "../../data/project-details2.json";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import ProjectDescription from "../../components/Project-description/project-description";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProject from "../../components/Next-project/next-project";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { loadwork } from "../../reduxIntegration/actions";

const ProjectDetails2Dark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const router = useRouter();
  const { id } = router.query;
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
    dispatch(loadwork(id));
  }, [navbarRef, id]);
  const data = useSelector((state) => state.singleWork);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      {data && (
        <div className="wrapper">
          <ProjectDetails2Header projectHeaderData={data} />
          <ProjectIntroduction projectIntroductionData={data.introduction} />
          <ProjectGallery images={data.work_image} />
          <ProjectDescription
            projectDescriptionData={data.description}
          />
          <ProjectVideo projectVideoDate={data} />
          <NextProject image={data.work_image[0].image} />
          <Footer />
        </div>
      )}
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
