import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCourse = this.redirectToAddCourse.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }
  redirectToAddCourse() {
    browserHistory.push('/course');
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1> Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCourse}
        />
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
