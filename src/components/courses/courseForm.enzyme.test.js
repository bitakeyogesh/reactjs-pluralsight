import React from "react";
import CourseForm from "./CourseForm";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
import { shallow, mount } from "enzyme";

function setup(saving) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe("Enzyme Test for course form", () => {
  it("renders form and h1", () => {
    const wrapper = setup(false);
    expect(wrapper.find("form").length).toBe(1);
    expect(wrapper.find("h1").text()).toEqual("Manage Course");
  });

  it('save button is labelled "Save" When not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find("input").props().value).toEqual("Save");
  });

  it('save button is labelled "Saving" When saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find("input").props().value).toEqual("Saving...");
  });
});
