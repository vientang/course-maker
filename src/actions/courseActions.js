import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(course) {
	return { type: types.LOAD_COURSES_SUCCESS, course };
}

export function loadCourses() {
	return function(dispatch) {
		// use getAllCourses for mock data
		// swap with fetch, ajax or axios to get real data from somewhere
		return CourseApi.getAllCourses().then(courses => {
			dispatch(loadCoursesSuccess(courses));
		}).catch(error => {
			throw error;
		});
	};
}