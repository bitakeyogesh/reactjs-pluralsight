import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configurableMockStore from 'redux-mock-store';

//Testing Actions
describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
      const course = {id: 'a', title: 'b'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course:course
      };
  
      const action = courseActions.createCourseStatus(course);
  
      expect(action).toEqual(expectedAction);
    });
  });

//Testing Thunk
const middleware = [thunk];
const mockStore = configurableMockStore(middleware);

describe('Async Actions', () => {
   
    afterEach(() => { 
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', () => {
        //Here's an example call to nock
        //nock('http://example.com/')
        //    .get('/courses')
        //    .reply(200, { body: {course:[{id:1,firstName:'Yogesh',lastName:'Bitake'}]}});

        const expectedActions = [
            {type:types.BEGIN_AJAX_CALL},
            { type: types.LOAD_COURSE_SUCCESS, body: {course:[{id:'clean-code',title:'Clean Code'}]}}
        ];

        const store = mockStore({ courses: [] }, expectedActions);
        
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSE_SUCCESS);
        });
    }); 
});
