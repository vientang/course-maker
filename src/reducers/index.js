import { combineReducers } from 'redux';
import courses from './courseReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	courses,
	ajaxCallsInProgress
});

export default rootReducer;