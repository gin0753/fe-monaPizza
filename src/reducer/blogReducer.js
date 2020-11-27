const initialState = {
  totalBlogs: "",
  results: [],
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        totalBlogs: action.data.totalBlogs,
        results: action.data.results,
      };
    default:
      return state;
  }
};

// export const blogReducer = (state = initialState, action)=>{
//     switch (action.type){
//         case "LOAD_BLOGS":
//             return {
//                 ...state,
//                 totalBlogs:action.totalBlogs,
//                 results:action.results
//             }
//         default:
//             return state;
//     }
// }
