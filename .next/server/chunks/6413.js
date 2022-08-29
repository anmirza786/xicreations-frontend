"use strict";
exports.id = 6413;
exports.ids = [6413];
exports.modules = {

/***/ 6413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ works_header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/fadeWhenScroll.js
const fadeWhenScroll = element => {
  window.addEventListener("scroll", () => {
    var scrolled = window.pageYOffset;

    if (element) {
      element.forEach(item => {
        item.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
        item.style.opacity = 1 - scrolled / 600;
      });
    }
  });
};

/* harmony default export */ const common_fadeWhenScroll = (fadeWhenScroll);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Works-header/works-header.jsx





const WorksHeader = ({
  sliderRef
}) => {
  external_react_default().useEffect(() => {
    common_fadeWhenScroll(document.querySelectorAll(".fixed-slider .capt .parlx"));
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    ref: sliderRef,
    className: "works-header fixed-slider hfixd valign sub-bg",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-7 col-md-9 static",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "capt mt-50",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "parlx text-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: "color-font",
                children: "amazing works"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before."
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "bactxt custom-font valign",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "full-width",
                children: "Works"
              })
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const works_header = (WorksHeader);

/***/ })

};
;