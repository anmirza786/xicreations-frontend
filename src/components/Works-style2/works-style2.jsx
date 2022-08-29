/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { useSelector, useDispatch } from "react-redux";
import { loadworklist } from "../../reduxIntegration/actions";

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
    dispatch(loadworklist());
  }, []);
  const works = useSelector((state) => state.works);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Portfolio
                </h6>
                <h3 className="wow color-font">
                  Our Recent Web Design &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          {/* {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".brand">Branding</span>
                <span data-filter=".web">Mobile App</span>
                <span data-filter=".graphic">Creative</span>
              </div>
            </div>
          )} */}

          <div className="gallery full-width">
            {works &&
              works.map((work) => (
                <div
                  className={`${
                    grid === 3
                      ? "col-lg-4 col-md-6"
                      : grid === 2
                      ? "col-md-6"
                      : "col-12"
                  } items graphic wow fadeInUp`}
                  data-wow-delay=".4s"
                  key={work.id}
                >
                  <div className="item-img">
                    <Link
                      href={`/project-details2/project-details2-dark/?id=${work.id}`}
                    >
                      <a className="imago wow">
                        <img src={work.work_image[0].image} alt="image" />
                        <div className="item-img-overlay"></div>
                      </a>
                    </Link>
                  </div>
                  <div className="cont">
                    <h6>{work.title}</h6>
                    <span>
                      <Link
                        href={`/project-details2/project-details2-dark/?id=${work.id}`}
                      >
                        {work.category.categoryTitle}
                      </Link>
                      ,
                      <Link
                        href={`/project-details2/project-details2-dark/?id=${work.id}`}
                      >
                        {work.description}
                      </Link>
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
