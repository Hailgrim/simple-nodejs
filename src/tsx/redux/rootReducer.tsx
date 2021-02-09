import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { appReducer } from './appReducer';
import { tasksReducer } from './tasksReducer';

export const rootReducer = combineReducers({
	app: appReducer,
	posts: postsReducer,
	tasks: tasksReducer
});