import { fetchBlogs } from "../api/blog-API";

export const loadBlogs = () => (dispatch) => {
  fetchBlogs().then((res) => dispatch(loadBlogsSuccess(res)));
};

const loadBlogsSuccess = (res) => {
  const {data:{totalBlogs,results}} = res;
  return {
    type: "SUCCESS",
    data: { results: results, totalBlogs: totalBlogs },
  };
};

export const updateBlogs = ({totalBlogs,results})=>{
return{
    type: 'UPDATE_BLOGS',
    totalBlogs,
    results,
}
}
