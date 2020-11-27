import { fetchBlogs } from "../api/blog-API";

export const loadBlogs = () => (dispatch) => {
  fetchBlogs().then((res) => dispatch(loadBlogsSuccess(res)));
};

const loadBlogsSuccess = (res) => {
  return {
    type: "SUCCESS",
    data:res.data,
  };
};

// export const loadBlogs = ({totalBlogs,results})=>{
// return{
//     type: 'LOAD_BLOGS',
//     totalBlogs,
//     results,
// }
// }
