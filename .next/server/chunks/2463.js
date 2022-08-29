"use strict";
exports.id = 2463;
exports.ids = [2463];
exports.modules = {

/***/ 8037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = () => {
  if (document.querySelectorAll(".swiper-pagination")) {
    document.querySelectorAll(".swiper-pagination").forEach(item => {
      item.innerHTML = item.innerHTML.replace(" / ", "");
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);

/***/ }),

/***/ 8943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_us3)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(1514);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/data/sections/about-us3.json
const about_us3_namespaceObject = JSON.parse('{"wp":"/img/01.jpg","Lx":"/img/02.jpg","Qq":{"r":7,"u":"Years Of Experience"},"TN":{"P":"Unlimited Skills","E":"for Super Projects."},"kQ":{"P":"Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).","E":"We develop creative solutions for small and big brands alike, build authentic product identities and much more."},"bH":"About Us"}');
// EXTERNAL MODULE: ./src/common/thumparallax.js
var thumparallax = __webpack_require__(6025);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/About-us3/about-us3.jsx
/* eslint-disable @next/next/no-img-element */








const AboutUs3 = () => {
  external_react_default().useEffect(() => {
    setTimeout(() => {
      (0,thumparallax/* thumparallax */.$)();
      (0,thumparallax/* thumparallaxDown */.D)();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "agency section-padding position-re",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-7",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "imgsec md-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "item",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "imgone big-bord wow fadeInDown",
                    "data-wow-delay": ".8s",
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      className: "thumparallax-down",
                      src: about_us3_namespaceObject.wp,
                      alt: ""
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "exp",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                      className: "nmb-font",
                      children: about_us3_namespaceObject.Qq.r
                    }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                      children: about_us3_namespaceObject.Qq.u
                    })]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "imgtwo big-bord wow fadeInUp",
                    "data-wow-delay": ".6s",
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      className: "thumparallax",
                      src: about_us3_namespaceObject.Lx,
                      alt: ""
                    })
                  })
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Split/* default */.Z, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                className: "wow words chars splitting",
                "data-splitting": true,
                children: [about_us3_namespaceObject.TN.P, " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", about_us3_namespaceObject.TN.E]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Split/* default */.Z, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: "wow txt words chars splitting",
                "data-splitting": true,
                children: [about_us3_namespaceObject.kQ.P, " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), about_us3_namespaceObject.kQ.E]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: `/about/about-dark`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "butn bord curve mt-40 wow fadeInUp",
                "data-wow-delay": ".8s",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: about_us3_namespaceObject.bH
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "line bottom right"
    })]
  });
};

/* harmony default export */ const about_us3 = (AboutUs3);

/***/ }),

/***/ 7492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reduxIntegration_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(834);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */









class FullTestimonials extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderArrows", () => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "arrows",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            onClick: () => this.slider.slickNext(),
            className: "next cursor-pointer",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "pe-7s-angle-right"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            onClick: () => this.slider.slickPrev(),
            className: "prev cursor-pointer",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "pe-7s-angle-left"
            })
          })]
        })
      });
    });
  }

  componentDidMount() {
    this.props.loadtestimonials();
  }

  render() {
    const {
      testimonials
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      className: `testimonials ${this.props.withIMG ? "section-padding bg-img" : this.props.withCOLOR ? "section-padding back-color" : this.props.noPadding ? "" : "section-padding"} ${this.props.classText ? this.props.classText : ""}`,
      style: {
        backgroundImage: `${this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"}`
      },
      children: [this.props.showHead && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "col-lg-8 col-md-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "sec-head  text-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h6", {
                className: "wow fadeIn",
                "data-wow-delay": ".5s",
                children: "Testimonials"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                className: "wow color-font",
                children: "We love our clients from all over the world."
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container-fluid position-re",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "row wow fadeInUp",
          "data-wow-delay": ".5s",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
              className: "slic-item",
              ref: c => this.slider = c,
              dots: false,
              infinite: true,
              arrows: true,
              centerMode: true,
              autoplay: true,
              rows: 1,
              slidesToScroll: 1,
              slidesToShow: 3,
              responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }, {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }, {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }],
              children: testimonials && testimonials.map(testimonial => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                          src: testimonial.client_picture,
                          alt: ""
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h6", {
                        className: "author-name color-font",
                        children: testimonial.client
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                        className: "author-details",
                        children: testimonial.company
                      })]
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                  children: testimonial.review
                })]
              }, testimonial.id))
            })
          })
        }), this.renderArrows()]
      })]
    });
  }

}

const mapStateToProps = state => ({
  testimonials: state.testimonials
});

const mapDispatchToProps = disptch => ({
  loadtestimonials: () => disptch((0,_reduxIntegration_actions__WEBPACK_IMPORTED_MODULE_3__/* .loadtestimonials */ .vU)())
}); // container component
// wraps presentation component (BottomNav)


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(FullTestimonials));

/***/ }),

/***/ 3270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_particle_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4746);
/* harmony import */ var _config_pr_s_black__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6066);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4753);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const Intro4 = ({
  sliderRef,
  blackStar
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("header", {
    ref: sliderRef,
    className: "particles circle-bg valign",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "col-lg-10",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "cont text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h1", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "color-font",
                children: "Creativity"
              }), " is the process of having ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "color-font",
                children: "original ideas"
              }), "."]
            })
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_tsparticles__WEBPACK_IMPORTED_MODULE_3___default()), {
      id: "particles-js",
      options: blackStar ? _config_pr_s_black__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z : _config_particle_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "gradient-circle"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "gradient-circle two"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "line bottom left"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro4);

/***/ }),

/***/ 5467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1514);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _common_thumparallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @next/next/no-img-element */







const MinimalArea2 = () => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setTimeout(() => {
      (0,_common_thumparallax__WEBPACK_IMPORTED_MODULE_4__/* .thumparallaxDown */ .D)();
    }, 1000);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: "min-area",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
              className: "thumparallax-down",
              src: "/img/min-area.jpg",
              alt: ""
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "col-lg-6 valign",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
              className: "color-font",
              children: "Dream. Innovate. Implement."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Split__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                className: "wow txt words chars splitting",
                "data-splitting": true,
                children: "Our creative Ad agency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players. By adhering to industry standards, we create some stunning portfolios. Company branding redefines."
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".2s",
                children: "We provide free initial consultation and support."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".4s",
                children: "We work with some of the most successful businesses."
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
              href: `/about/about-dark`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                className: "butn bord curve mt-40 wow fadeInUp",
                "data-wow-delay": ".8s",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: "Discover"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {})]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinimalArea2);

/***/ }),

/***/ 5663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _common_cardMouseEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6190);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const Services3 = () => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    (0,_common_cardMouseEffect__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(document.querySelectorAll(".feat .items"));
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
    className: "feat sub-bg section-padding",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "sec-head",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Best Services"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
              className: "wow color-font",
              children: "We help to create strategies, design & development."
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-3 col-md-6 items md-mb30",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "item wow fadeIn",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "icon",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                className: "ion-ios-monitor"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
              children: "Digital Marketing & Search Engine Optimization(SEO)"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              children: "Implementation and rollout of new network infrastructure, including consolidation."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "/about/about-dark",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "more-stroke",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {})
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-3 col-md-6 items active md-mb30",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "item wow fadeIn",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "icon",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                className: "ion-ios-bolt-outline"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
              children: "Graphic Design"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              children: "Implementation and rollout of new network infrastructure, including consolidation."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "/about/about-dark",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "more-stroke",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {})
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-3 col-md-6 items sm-mb30",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "item wow fadeIn",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "icon",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                className: "ion-cube"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
              children: "Video Editing & Video Production"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              children: "Implementation and rollout of new network infrastructure, including consolidation."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "/about/about-dark",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "more-stroke",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {})
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-3 col-md-6 items",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "item wow fadeIn",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "icon",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                className: "ion-ios-color-wand"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
              children: "Website development"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              children: "Implementation and rollout of new network infrastructure, including consolidation."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "/about/about-dark",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "more-stroke",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {})
              })
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services3);

/***/ }),

/***/ 4167:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sections_works_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2984);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reduxIntegration_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(834);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-css-tags */

/* eslint-disable @next/next/no-img-element */



 // import Swiper core and required modules











swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation]);

const Works3 = () => {
  const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_reduxIntegration_actions__WEBPACK_IMPORTED_MODULE_7__/* .loadworklist */ .pX)());
  }, []);
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(s => s);
  const works = state.works;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("link", {
        rel: "stylesheet",
        href: "/css/ionicons.min.css"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("section", {
      className: "work-carousel2 metro section-padding",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "row",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: "col-lg-8 col-md-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "sec-head",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h6", {
                className: "wow fadeIn",
                "data-wow-delay": ".5s",
                children: "Portfolio"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("h3", {
                className: "wow color-font",
                children: ["Our Recent Web Design & ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("br", {}), " Some Past Projects."]
              })]
            })
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "container-fluid",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "row",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: "col-lg-12 no-padding",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "swiper-container",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                className: "swiper-wrapper",
                slidesPerView: 2,
                centeredSlides: true,
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: false
                },
                loop: true,
                navigation: {
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current
                },
                onBeforeInit: swiper => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                },
                onSwiper: swiper => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                },
                speed: 1000,
                breakpoints: {
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  },
                  767: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    centeredSlides: false
                  },
                  991: {
                    slidesPerView: 2
                  }
                },
                children: works && works.map(work => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                  className: "swiper-slide",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "content",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                      className: "img",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                        className: "imgio",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                          className: "wow cimgio",
                          "data-delay": "500"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("img", {
                          src: work.work_image[0].image,
                          alt: ""
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                      className: "cont",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h6", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                          href: `/project-details2/project-details2-dark?id=${work.id}`,
                          children: work.category.categoryTitle
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h4", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                          href: `/project-details2/project-details2-dark?id=${work.id}`,
                          children: work.title
                        })
                      })]
                    })]
                  })
                }, work.id))
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                ref: navigationNextRef,
                className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                  className: "ion-ios-arrow-right"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                ref: navigationPrevRef,
                className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                  className: "ion-ios-arrow-left"
                })
              })]
            })
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Works3);
});

/***/ }),

/***/ 106:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _common_thumparallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6025);
/* harmony import */ var _common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8037);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reduxIntegration_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(834);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */














swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_3__.Parallax, swiper__WEBPACK_IMPORTED_MODULE_3__.EffectFade]);

const Blogs4 = () => {
  const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      (0,_common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
      (0,_common_thumparallax__WEBPACK_IMPORTED_MODULE_8__/* .thumparallax */ .$)();
    }, 1000);
    dispatch((0,_reduxIntegration_actions__WEBPACK_IMPORTED_MODULE_5__/* .loadbloglist */ .H_)());
  }, []);
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(s => s);
  const blogs = state.blogs;
  const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const paginationRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
    className: "blog-crv sub-bg",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h2", {
      style: {
        display: "none"
      },
      children: "\xA0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "stories",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "col-lg-6 no-padding",
            children: blogs ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
              speed: 800,
              effect: "fade",
              spaceBetween: 0,
              loop: true,
              parallax: true,
              navigation: {
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current
              },
              pagination: {
                type: "fraction",
                clickable: true,
                el: paginationRef.current
              },
              onBeforeInit: swiper => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.params.pagination.el = paginationRef.current;
              },
              onSwiper: swiper => {
                setTimeout(() => {
                  for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                  }

                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.params.pagination.el = paginationRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                  swiper.pagination.destroy();
                  swiper.pagination.init();
                  swiper.pagination.update();
                });
              },
              className: "swiper-wrapper swiper-container swiper-img",
              slidesPerView: 1,
              children: blogs && blogs.map(blog => blog.blog_picture.map(img => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                className: "swiper-slide",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: "item wow fadeIn",
                  "data-wow-delay": ".3s",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: "img",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                      className: "thumparallax",
                      src: img.picture,
                      alt: ""
                    })
                  })
                })
              }, img.id)))
            }) : null
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "col-lg-6 no-padding valign",
            children: !load ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
              speed: 800,
              spaceBetween: 0,
              loop: true,
              navigation: {
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current
              },
              pagination: {
                type: "fraction",
                clickable: true,
                el: paginationRef.current
              },
              onBeforeInit: swiper => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.params.pagination.el = paginationRef.current;
              },
              onSwiper: swiper => {
                setTimeout(() => {
                  for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                  }

                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.params.pagination.el = paginationRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                  swiper.pagination.destroy();
                  swiper.pagination.init();
                  swiper.pagination.update();
                });
              },
              className: "swiper-wrapper swiper-container swiper-content",
              slidesPerView: 1,
              children: blogs && blogs.map(blog => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                className: "swiper-slide",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: "item wow fadeIn",
                  "data-wow-delay": ".6s",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "content",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                      className: "tags",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                        children: "Trending"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                      className: "info",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/blog/blog-dark",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                            className: "far fa-clock"
                          }), blog.created_on]
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                      className: "title",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h4", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                          href: "/blog-details/blog-details-dark",
                          children: blog.title
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                      className: "text",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                        children: blog.smalldescription
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                      className: "more",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: `/blog-details/blog-details-dark`,
                        children: "Read More"
                      })
                    })]
                  })
                })
              }, blog.id))
            }) : null
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "controls",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            ref: navigationNextRef,
            className: "swiper-button-next swiper-nav-ctrl next-ctrl",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
              className: "fas fa-caret-up"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            ref: navigationPrevRef,
            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
              className: "fas fa-caret-down"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "swiper-pagination",
            ref: paginationRef
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs4);
});

/***/ }),

/***/ 2984:
/***/ ((module) => {

module.exports = [];

/***/ })

};
;