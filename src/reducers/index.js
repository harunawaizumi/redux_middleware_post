import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
});

export default rootReducer;

// Why better to change the name of reducer ?
// 'reducer' sounds too casual
// 'reducer' is too easy to duplicated
