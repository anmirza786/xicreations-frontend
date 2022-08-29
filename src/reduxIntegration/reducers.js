import * as actions from "./actionTypes";

const initialState = {
  blogs: [],
  singleBlog: {},
  works: [],
  singleWork: {},
  testimonials: [],
  staff: [],
  clients: [],
  loading: false,
  error: null,
  contactSuccess: false,
};

export function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.REQUEST_START:
      return {
        ...state,
        error: null,
        loading: true,
        contactSuccess: null,
      };
    case actions.LOAD_BLOGLIST_SUCCESSFULLY:
      return {
        ...state,
        blogs: payload,
        loading: false,
        error: null,
      };
    case actions.LOAD_BLOG_SUCCESSFULLY:
      return {
        ...state,
        singleBlog: payload,
        loading: false,
        error: null,
      };
    case actions.LOAD_WORKLIST_SUCCESSFULLY:
      return {
        ...state,
        works: payload,
        loading: false,
        error: null,
      };
    case actions.LOAD_WORK_SUCCESSFULLY:
      return {
        ...state,
        singleWork: payload,
        loading: false,
        error: null,
      };
    case actions.LOAD_STAFF_SUCCESSFULLY:
      return {
        ...state,
        staff: payload,
        loading: false,
        error: null,
      };
    case actions.LOAD_TESTIMONIALS_SUCCESSFULLY:
      return {
        ...state,
        testimonials: payload,
        loading: false,
        error: null,
      };
    case actions.LOAD_CLIENTS_SUCCESSFULLY:
      return {
        ...state,
        clients: payload,
        loading: false,
        error: null,
      };
    case actions.POST_CONTACTUS_SUCCESSFULLY:

    case actions.LOAD_BLOG_FAILURE:
    case actions.LOAD_WORK_FAILURE:
    case actions.LOAD_STAFF_FAILURE:
    case actions.LOAD_BLOGLIST_FAILURE:
    case actions.LOAD_WORKLIST_FAILURE:
    case actions.LOAD_TESTIMONIALS_FAILURE:
    case actions.LOAD_CLIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actions.POST_CONTACTUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        contactSuccess: false,
      };
    default:
      return state;
  }
}
