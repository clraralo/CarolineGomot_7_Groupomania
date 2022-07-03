import { GET_POSTS } from "../actions/post.actions";

const initialState = {
   
   
};
function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS: {
            return {
                ...state,
                postArray: action.payload,
            }; 
            }
        default: 
        return state;
    }
}

export default postReducer;