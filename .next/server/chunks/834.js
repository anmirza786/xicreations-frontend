"use strict";
exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z$": () => (/* binding */ loadblog),
  "H_": () => (/* binding */ loadbloglist),
  "b9": () => (/* binding */ loadclients),
  "rx": () => (/* binding */ loadstaff),
  "vU": () => (/* binding */ loadtestimonials),
  "hZ": () => (/* binding */ loadwork),
  "pX": () => (/* binding */ loadworklist),
  "C8": () => (/* binding */ postcontact)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/reduxIntegration/actionTypes.js
var actionTypes = __webpack_require__(7483);
;// CONCATENATED MODULE: ./src/reduxIntegration/reuqestURL.js
const REQUEST_URL = `https://xicreations.pythonanywhere.com/api/`;
;// CONCATENATED MODULE: ./src/reduxIntegration/actions.js



const config = {
  headers: {
    "Content-Type": "application/json"
  }
};
const postcontact = (name, email, message) => async dispatch => {
  dispatch({
    type: actionTypes/* REQUEST_START */.N1
  });
  const body = JSON.stringify({
    name,
    email,
    message
  }, null, 2);
  await external_axios_default().post(REQUEST_URL + `contact/`, body).then(res => {
    dispatch({
      type: actionTypes/* POST_CONTACTUS_SUCCESSFULLY */.WC
    });
  }).catch(error => {
    dispatch({
      type: actionTypes/* POST_CONTACTUS_FAILURE */.eA,
      payload: error
    });
  });
};
const loadclients = () => async dispatch => {
  dispatch({
    type: actionTypes/* REQUEST_START */.N1
  });
  await external_axios_default().get(REQUEST_URL + "clients/", config).then(res => {
    dispatch({
      type: actionTypes/* LOAD_CLIENTS_SUCCESSFULLY */.A7,
      payload: res.data
    });
  }).catch(error => {
    dispatch({
      type: actionTypes/* LOAD_CLIENTS_FAILURE */.dt
    });
  });
};
const loadbloglist = () => async dispatch => {
  dispatch({
    type: actionTypes/* REQUEST_START */.N1
  });
  await external_axios_default().get(REQUEST_URL + "blogs/", config).then(res => {
    dispatch({
      type: actionTypes/* LOAD_BLOGLIST_SUCCESSFULLY */.sc,
      payload: res.data
    });
  }).catch(error => {
    dispatch({
      type: actionTypes/* LOAD_BLOGLIST_FAILURE */.je
    });
  });
};
const loadblog = blogid => async dispatch => {
  dispatch({
    type: actionTypes/* REQUEST_START */.N1
  });
  await external_axios_default().get(REQUEST_URL + `blog/${blogid}/`, config).then(res => {
    dispatch({
      type: actionTypes/* LOAD_BLOG_SUCCESSFULLY */.TI,
      payload: res.data
    });
  }).catch(error => {
    dispatch({
      type: actionTypes/* LOAD_BLOG_FAILURE */.sP
    });
  });
};
const loadworklist = () => async dispatch => {
  dispatch({
    type: actionTypes/* REQUEST_START */.N1
  });
  await external_axios_default().get(REQUEST_URL + "works/", config).then(res => {
    dispatch({
      type: actionTypes/* LOAD_WORKLIST_SUCCESSFULLY */.a_,
      payload: res.data
    });
  }).catch(error => {
    dispatch({
      type: actionTypes/* LOAD_WORKLIST_FAILURE */.s$
    });
  });
};
const loadwork = workid => async dispatch => {
  dispatch({
    type: actionTypes/* REQUEST_START */.N1
  });
  console.log(workid);
  await external_axios_default().get(REQUEST_URL + `work/${workid}/`, config).then(res => {
    dispatch({
      type: actionTypes/* LOAD_WORK_SUCCESSFULLY */.be,
      payload: res.data
    });
  }).catch(error => {
    dispatch({
      type: actionTypes/* LOAD_WORK_FAILURE */.dr
    });
  });
};
const loadtestimonials = () => async dispatch => {
  dispatch({
    type: actionTypes/* REQUEST_START */.N1
  });
  await external_axios_default().get(REQUEST_URL + "testimonials/", config).then(res => {
    dispatch({
      type: actionTypes/* LOAD_TESTIMONIALS_SUCCESSFULLY */._u,
      payload: res.data
    });
  }).catch(error => {
    dispatch({
      type: actionTypes/* LOAD_TESTIMONIALS_FAILURE */.Dy
    });
  });
};
const loadstaff = () => async dispatch => {
  dispatch({
    type: actionTypes/* REQUEST_START */.N1
  });
  await external_axios_default().get(REQUEST_URL + "staff/", config).then(res => {
    dispatch({
      type: actionTypes/* LOAD_STAFF_SUCCESSFULLY */.oA,
      payload: res.data
    });
  }).catch(error => {
    dispatch({
      type: actionTypes/* LOAD_STAFF_FAILURE */.Mw
    });
  });
};

/***/ })

};
;