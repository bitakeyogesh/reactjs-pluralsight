import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import CoursePage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="course" component={ManageCoursePage} />
    </Route> 
);