import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from '../actions/ajaxStatusAction';

export function loadAllCoursesSuccess(courses) {
    return { type: types.LOAD_COURSE_SUCCESS, courses };
}
export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}
export function createCourseStatus(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}
export function loadCourses() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CourseApi.getAllCourses().then(courses => {
            dispatch(loadAllCoursesSuccess(courses));
        }).catch(error => {
            throw (error);
         });        
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return CourseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseStatus(savedCourse));

        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw error; 
        });
    };
}