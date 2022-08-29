"use strict";
exports.id = 2872;
exports.ids = [2872];
exports.modules = {

/***/ 6190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getSiblings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7420);


const cardMouseEffect = featureEl => {
  var featuresitems = featureEl;

  if (featuresitems) {
    featuresitems.forEach(item => {
      item.onmouseover = function (event) {
        item.classList.add("active");
        let siblings = (0,_getSiblings__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(item),
            siblingEl = siblings.map(e => e.classList.remove("active"));
      };
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardMouseEffect);

/***/ }),

/***/ 6025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ thumparallax),
/* harmony export */   "D": () => (/* binding */ thumparallaxDown)
/* harmony export */ });
const thumparallax = () => {
  var imageUp = document.getElementsByClassName("thumparallax");

  if (imageUp) {
    new simpleParallax(imageUp, {
      delay: 1,
      scale: 1.1
    });
  }
};
const thumparallaxDown = () => {
  var imageDown = document.getElementsByClassName("thumparallax-down");

  if (imageDown) {
    new simpleParallax(imageDown, {
      orientation: "down",
      delay: 1,
      scale: 1.1
    });
  }
};

/***/ }),

/***/ 2786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1514);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const CallToAction = ({
  img
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: "call-action section-padding sub-bg bg-img",
    style: {
      backgroundImage: `url(${img ? img : "/img/patrn.svg"})`
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "col-md-8 col-lg-9",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "content sm-mb30",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Split__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                className: "wow words chars splitting",
                "data-splitting": true,
                children: "Let\u2019s Talk"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h2", {
                className: "wow words chars splitting",
                "data-splitting": true,
                children: ["about your ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("b", {
                  className: "back-color",
                  children: "next project"
                }), "."]
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "col-md-4 col-lg-3 valign",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: `/contact/contact-dark`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
              className: "butn bord curve wow fadeInUp",
              "data-wow-delay": ".5s",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                children: "Get In Touch"
              })
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallToAction);

/***/ }),

/***/ 1514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Split extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "target", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef());

    _defineProperty(this, "split", () => {
      if (this.target.current) {
        Splitting({
          target: this.target.current
        });
      }
    });

    _defineProperty(this, "componentDidMount", this.split);

    _defineProperty(this, "componentDidUpdate", this.split);
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      ref: this.target,
      children: this.props.children
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);

/***/ }),

/***/ 7397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ team)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/teamSkillsProgress.js
const teamSkillsProgress = () => {
  let teamSection = document.querySelector(".team-crv");

  if (teamSection) {
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".skill-progress .progres").forEach(item => {
        let myVal = item.getAttribute("data-value");

        if (window.pageYOffset > teamSection.offsetTop - 200) {
          item.style.width = myVal;
        }
      });
    });
  }
};

/* harmony default export */ const common_teamSkillsProgress = (teamSkillsProgress);
// EXTERNAL MODULE: ./src/common/tooltipEffect.js + 1 modules
var tooltipEffect = __webpack_require__(850);
;// CONCATENATED MODULE: ./src/data/sections/team.json
const team_namespaceObject = JSON.parse('{"f":[0,0,0,0],"n":[{"id":1,"text":"UI / UX Design","value":"90%"},{"id":2,"text":"Apps Development","value":"80%"}]}');
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/reduxIntegration/actions.js + 1 modules
var actions = __webpack_require__(834);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Team/team.jsx
/* eslint-disable @next/next/no-img-element */









const Team = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  external_react_default().useEffect(() => {
    common_teamSkillsProgress();
    setTimeout(() => {
      (0,tooltipEffect/* default */.Z)();
    }, 1000);
    dispatch((0,actions/* loadstaff */.rx)());
  }, []);
  const state = (0,external_react_redux_.useSelector)(s => s);
  const Team = state.staff;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "team-crv section-padding",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content wow fadeInUp md-mb30",
            "data-wow-delay": ".5s",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "sub-title",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Our Staff"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "co-tit mb-15",
              children: "We help to create visual strategies."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "We are Xi. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdie."
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "skills-box mt-40",
              children: team_namespaceObject.n.map(skill => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "skill-item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  className: "custom-font",
                  children: skill.text
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "skill-progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progres",
                    "data-value": skill.value
                  })
                })]
              }, skill.id))
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 offset-lg-1",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "img-box",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "row",
              children: Team && Team.map((team, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-sm-6 toleft valign",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "full-width text-left",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: `img sizxl ${index + 1 != team_namespaceObject.f.length ? "mb-30" : null}`,
                      "data-tooltip-tit": team.designation,
                      "data-tooltip-sub": team.name,
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: team.image,
                        alt: "",
                        className: "imago wow"
                      })
                    })
                  }, team.id)
                })
              }, team.id))
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const team = (Team);

/***/ })

};
;