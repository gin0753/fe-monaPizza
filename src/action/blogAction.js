import { fetchBlogs } from "../api/blog-API";

export const loadBlogs = () => (dispatch) => {
  dispatch(loadBlogsRequested());
  fetchBlogs()
    .then((res) => dispatch(loadBlogsSuccess(res)))
    .catch((err) => dispatch(loadBlogsFailed(err)));
};

const loadBlogsRequested = () => {
  return {
    type: "REQUESTED",
  };
};

const loadBlogsSuccess = (res) => {
  return {
    type: "SUCCESS",
    data: {
      totalBlogs: res.data.totalBlogs || "",
      results: res.data.results || [],
    },
  };
};

const loadBlogsFailed = (err) => {
  return {
    type: "FAILED",
    data: { err },
  };
};
