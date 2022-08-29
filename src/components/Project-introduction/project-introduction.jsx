import React from "react";
import Parser from "html-react-parser";

const ProjectIntroduction = ({ projectIntroductionData }) => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>01 </span> Introduction
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <div className="extra-text" style={{ color: "white !important" }}>
                {Parser(projectIntroductionData)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntroduction;
