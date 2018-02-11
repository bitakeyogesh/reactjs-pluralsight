import expect from "expect";
import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";
describe("Course Reducer", () => {
  it("Should add course when passed CREATE_COURSE_SUCCESS", () => {
    const initialState = [{ title: "A" }, { title: "B" }];

    const newCourse = { title: "C" };

    const action = actions.createCourseStatus(newCourse);
    //act
    const newState = courseReducer(initialState, action);
    //assert
    expect(newState.length).toBe(3);
    expect(newState[0].title).toEqual("A");
    expect(newState[1].title).toEqual("B");
    expect(newState[2].title).toEqual("C");
  });

  it("Should Update course when passed UPDATE_COURSE_SUCCESS", () => {
    const initialState = [{ id:'A',title: 'A' }, {id:'B', title: "B" }, {id:'C', title: "C" }];

    const newCourse = { id:'C',title: "New Title" };

    const action = actions.updateCourseSuccess(newCourse);
    //act
    const newState = courseReducer(initialState, action);
    //assert
    expect(newState.length).toBe(3);
    expect(newState[0].title).toEqual("A");
    expect(newState[1].title).toEqual("B");
    expect(newState[2].title).toEqual("New Title");
  });
});
