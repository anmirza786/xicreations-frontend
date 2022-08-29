"use strict";
exports.id = 2630;
exports.ids = [2630];
exports.modules = {

/***/ 8728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_intro)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(1514);
;// CONCATENATED MODULE: ./src/data/sections/about-info1.json
const about_info1_namespaceObject = JSON.parse('{"TN":"Who We Are ?","X8":"We develop creative solutions for small and big brands alike, build authentic product identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis vitae eut.","i7":"lorem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus risus vitae feugiat fames aliquet sed."}');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/About-intro/index.jsx






const AboutIntro = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "intro-section section-padding pb-0",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "htit sm-mb30",
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: about_info1_namespaceObject.TN
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 offset-lg-1 col-md-8",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Split/* default */.Z, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "wow txt mb-10 words chars splitting",
                "data-splitting": true,
                children: about_info1_namespaceObject.X8
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "wow txt words chars splitting",
                "data-splitting": true,
                children: about_info1_namespaceObject.i7
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const About_intro = (AboutIntro);

/***/ }),

/***/ 6415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ clients)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/data/sections/clients.json
const clients_namespaceObject = JSON.parse('[{"id":1,"lightImage":"/img/clients/brands/light/01.png","darkImage":"/img/clients/brands/dark/01.png","url":"www.Vie.com"},{"id":2,"lightImage":"/img/clients/brands/light/02.png","darkImage":"/img/clients/brands/dark/02.png","url":"www.Vie.com"},{"id":3,"lightImage":"/img/clients/brands/light/03.png","darkImage":"/img/clients/brands/dark/03.png","url":"www.Vie.com"},{"id":4,"lightImage":"/img/clients/brands/light/04.png","darkImage":"/img/clients/brands/dark/04.png","url":"www.Vie.com"},{"id":5,"lightImage":"/img/clients/brands/light/05.png","darkImage":"/img/clients/brands/dark/05.png","url":"www.Vie.com"},{"id":6,"lightImage":"/img/clients/brands/light/06.png","darkImage":"/img/clients/brands/dark/06.png","url":"www.Vie.com"},{"id":7,"lightImage":"/img/clients/brands/light/07.png","darkImage":"/img/clients/brands/dark/07.png","url":"www.Vie.com"},{"id":8,"lightImage":"/img/clients/brands/light/08.png","darkImage":"/img/clients/brands/dark/08.png","url":"www.Vie.com"}]');
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(1514);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/reduxIntegration/actions.js + 1 modules
var actions = __webpack_require__(834);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Clients/clients.jsx
/* eslint-disable @next/next/no-img-element */








const Clients = ({
  theme
}) => {
  var first = clients_namespaceObject.slice(0, clients_namespaceObject.length / 2);
  var second = clients_namespaceObject.slice(4, clients_namespaceObject.length);
  const dispatch = (0,external_react_redux_.useDispatch)();
  external_react_default().useEffect(() => {
    dispatch((0,actions/* loadclients */.b9)());
  }, []);
  const clients = (0,external_react_redux_.useSelector)(state => state.clients);
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "clients section-padding",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 valign md-mb50",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head mb-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Best Features"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow mb-20 color-font",
              children: "Our Clients"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Our area of practice is quite wide: design, graphics, branding, development."
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "row bord",
              children: clients && clients.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-3 col-6 brands",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item wow fadeIn",
                  "data-wow-delay": `${item.id == 1 ? ".3" : item.id == 2 ? ".6" : item.id == 3 ? ".8" : item.id == 4 ? ".3" : ""}s`,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "img",
                    children: [theme === "light" ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: item.logo,
                      alt: ""
                    }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: item.logo,
                      alt: ""
                    }), /*#__PURE__*/jsx_runtime_.jsx(Split/* default */.Z, {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "#0",
                        className: "link words chars splitting",
                        "data-splitting": true,
                        children: item.siteURL
                      })
                    })]
                  })
                })
              }, item.id))
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const clients = (Clients);

/***/ }),

/***/ 7532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_cardMouseEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6190);
/* harmony import */ var _common_thumparallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable @next/next/no-img-element */






const MinimalArea = () => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    (0,_common_cardMouseEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      (0,_common_thumparallax__WEBPACK_IMPORTED_MODULE_3__/* .thumparallaxDown */ .D)();
    }, 1000);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("section", {
    className: "min-area sub-bg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              className: "thumparallax-down",
              src: "/img/min-area.jpg",
              alt: ""
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-6 valign",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "content pt-0",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h4", {
              className: "wow color-font",
              children: "About us."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              className: "wow txt",
              "data-splitting": true,
              children: "Our creative Ad agency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
              className: "feat",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".2s",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h6", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                    children: "1"
                  }), " Our Mission"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                  children: "luctus massa ipsum at tempus eleifend congue lectus bibendum"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".4s",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h6", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                    children: "2"
                  }), " Our Goals"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                  children: "luctus massa ipsum at tempus eleifend congue lectus bibendum"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".6s",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h6", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                    children: "3"
                  }), " Why Us?"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                  children: "luctus massa ipsum at tempus eleifend congue lectus bibendum"
                })]
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinimalArea);

/***/ }),

/***/ 5581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable @next/next/no-img-element */




const PagesHeader = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
    className: "pages-header circle-bg valign",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row justify-content-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-10",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "cont mt-100 mb-50 text-center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
              className: "color-font fw-700",
              children: "Our dedicated team of creatives is bursting with talent, experience and passion for what we do."
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-10",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "/img/slid/about.jpg",
              alt: ""
            })
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "half sub-bg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "circle-color",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "gradient-circle"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "gradient-circle two"
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PagesHeader);

/***/ }),

/***/ 3248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/features.json
const features_namespaceObject = JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"Graphic Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."},{"id":2,"icon":"pe-7s-phone","title":"Web & Mobile Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":3,"icon":"pe-7s-display1","title":"Social Media Marketing","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":4,"icon":"pe-7s-diskette","title":"Document Legal Policy","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."}]');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Services/services.jsx






const Services = ({
  style,
  lines
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: `services bords section-padding ${style === "4item" ? "lficon" : lines ? "" : "pt-0"}`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head  text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Best Features"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow color-font",
              children: "We are a new digital product development agency"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: style === "4item" ? features_namespaceObject.map(feature => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 wow fadeInLeft",
          "data-wow-delay": `${feature.id == 1 ? ".5" : feature.id === 2 ? ".7" : feature.id === 3 ? ".9" : "1.1"}s`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item-box",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: `icon ${feature.icon}`
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: feature.title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: feature.content
              })]
            })]
          })
        }, feature.id)) : // max item 3 in Home page
        features_namespaceObject.slice(0, 3).map(feature => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 wow fadeInLeft",
          "data-wow-delay": ".5s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item-box md-mb50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: `icon ${feature.icon}`
            }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: feature.title
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: feature.content
            })]
          })
        }, feature.id))
      })]
    }), lines ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "line top left"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "line bottom right"
      })]
    }) : null]
  });
};

/* harmony default export */ const services = (Services);

/***/ }),

/***/ 513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1400);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const SkillsCircle = ({
  from,
  theme
}) => {
  const cpStyle = {
    path: {
      stroke: "rgb(18, 194, 233)"
    },
    trail: {
      stroke: theme ? theme == "dark" ? "#0f1013" : "#e5e5e5" : ""
    },
    text: {
      fill: theme ? theme == "dark" ? "#ffffff" : "#4e4e4e" : "",
      // Text size
      fontSize: "16px"
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
    className: `skills-circle pt-50 pb-50 ${from ? from === "aboutPage" ? "sub-bg" : "" : ""}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-7",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "item wow fadeInLeft",
                  "data-wow-delay": ".6",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "skill",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__.CircularProgressbar, {
                      value: 90,
                      strokeWidth: 2,
                      text: `${90}%`,
                      styles: cpStyle
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "cont",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                      children: "Project"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                      children: "Consulting"
                    })]
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "item wow fadeInLeft",
                  "data-wow-delay": ".3",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "skill",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__.CircularProgressbar, {
                      value: 75,
                      strokeWidth: 2,
                      text: `${75}%`,
                      styles: cpStyle
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "cont",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                      children: "App"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                      children: "Development"
                    })]
                  })]
                })
              })]
            })
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillsCircle);

/***/ }),

/***/ 434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reduxIntegration_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(834);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */











const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    console.clear();
    dispatch((0,_reduxIntegration_actions__WEBPACK_IMPORTED_MODULE_4__/* .loadtestimonials */ .vU)());
  }, []);
  const testimonials = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.testimonials);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("section", {
    className: "block-sec",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "background bg-img pt-100 pb-0 parallaxie",
      style: {
        backgroundImage: `url(/img/bg-vid.jpg)`
      },
      "data-overlay-dark": "5",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "vid-area",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                className: "text",
                children: "Watch Video"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "vid-icon",
                children: [ false && /*#__PURE__*/0, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                  className: "vid",
                  onClick: e => {
                    e.preventDefault();
                    setOpen(true);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "vid-butn",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                      className: "icon",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                        className: "fas fa-play"
                      })
                    })
                  })
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "col-lg-5 offset-lg-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "testim-box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "head-box",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                  className: "wow fadeIn",
                  "data-wow-delay": ".5s",
                  children: "Our Clients"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h4", {
                  className: "wow fadeInLeft",
                  "data-wow-delay": ".5s",
                  children: "What Client's Say?"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, settings), {}, {
                className: "slic-item wow fadeInUp",
                "data-wow-delay": ".5s",
                children: testimonials && testimonials.map(testimonial => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "item",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                    children: testimonial.review
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      className: "img",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                        className: "img-box",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                          src: testimonial.client_picture,
                          alt: ""
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      className: "cont",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                        className: "author",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                          className: "author-name ",
                          children: testimonial.client
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                          className: "author-details",
                          children: testimonial.company
                        })]
                      })
                    })]
                  })]
                }, testimonial.id))
              }))]
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoWithTestimonials);

/***/ })

};
;