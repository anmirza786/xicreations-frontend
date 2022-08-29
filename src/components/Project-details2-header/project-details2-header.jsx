import React from "react";
import Link from "next/link";

const ProjectDetails2Header = ({ projectHeaderData }) => {
  return (
    <section
      className="page-header proj-det bg-img parallaxie valign"
      style={{
        backgroundImage: `url(${projectHeaderData.work_image[0].image})`,
      }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h2>{projectHeaderData.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>{projectHeaderData.date}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>{projectHeaderData.category.categoryTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Header;
