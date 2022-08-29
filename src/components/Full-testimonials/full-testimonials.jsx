/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { loadtestimonials } from "../../reduxIntegration/actions";

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadtestimonials();
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    const { testimonials } = this.props;
    return (
      <section
        className={`testimonials ${
          this.props.withIMG
            ? "section-padding bg-img"
            : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding
            ? ""
            : "section-padding"
        } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${
            this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
          }`,
        }}
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Testimonials
                  </h6>
                  <h3 className="wow color-font">
                    We love our clients from all over the world.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                {testimonials &&
                  testimonials.map((testimonial) => (
                    <div className="item" key={testimonial.id}>
                      <div className="info valign">
                        <div className="cont">
                          <div className="author">
                            <div className="img">
                              <img src={testimonial.client_picture} alt="" />
                            </div>
                            <h6 className="author-name color-font">
                              {testimonial.client}
                            </h6>
                            <span className="author-details">
                              {testimonial.company}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p>
                       {testimonial.review}
                      </p>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  testimonials: state.testimonials,
});

const mapDispatchToProps = (disptch) => ({
  loadtestimonials: () => disptch(loadtestimonials()),
});

// container component
// wraps presentation component (BottomNav)

export default connect(mapStateToProps, mapDispatchToProps)(FullTestimonials);
