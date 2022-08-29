import axios from "axios";
import * as actions from "./actionTypes";
import { REQUEST_URL } from "./reuqestURL";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const postcontact = (name, email, message) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const body = JSON.stringify(
    {
      name,
      email,
      message,
    },
    null,
    2
  );
  await axios
    .post(REQUEST_URL + `contact/`, body)
    .then((res) => {
      dispatch({
        type: actions.POST_CONTACTUS_SUCCESSFULLY,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.POST_CONTACTUS_FAILURE,
        payload: error,
      });
    });
};

export const loadclients = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + "clients/", config)
    .then((res) => {
      dispatch({
        type: actions.LOAD_CLIENTS_SUCCESSFULLY,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.LOAD_CLIENTS_FAILURE,
      });
    });
};

export const loadbloglist = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + "blogs/", config)
    .then((res) => {
      dispatch({
        type: actions.LOAD_BLOGLIST_SUCCESSFULLY,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.LOAD_BLOGLIST_FAILURE,
      });
    });
};

export const loadblog = (blogid) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + `blog/${blogid}/`, config)
    .then((res) => {
      dispatch({
        type: actions.LOAD_BLOG_SUCCESSFULLY,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.LOAD_BLOG_FAILURE,
      });
    });
};

export const loadworklist = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + "works/", config)
    .then((res) => {
      dispatch({
        type: actions.LOAD_WORKLIST_SUCCESSFULLY,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.LOAD_WORKLIST_FAILURE,
      });
    });
};

export const loadwork = (workid) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  console.log(workid);
  await axios
    .get(REQUEST_URL + `work/${workid}/`, config)
    .then((res) => {
      dispatch({
        type: actions.LOAD_WORK_SUCCESSFULLY,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.LOAD_WORK_FAILURE,
      });
    });
};

export const loadtestimonials = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + "testimonials/", config)
    .then((res) => {
      dispatch({
        type: actions.LOAD_TESTIMONIALS_SUCCESSFULLY,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.LOAD_TESTIMONIALS_FAILURE,
      });
    });
};

export const loadstaff = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + "staff/", config)
    .then((res) => {
      dispatch({
        type: actions.LOAD_STAFF_SUCCESSFULLY,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.LOAD_STAFF_FAILURE,
      });
    });
};
