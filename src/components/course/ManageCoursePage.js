import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			course: Object.assign({}, props.course),
			errors: {}
		};
		this.saveCourse = this.saveCourse.bind(this);
		this.updateCoursesState = this.updateCoursesState.bind(this);
	}

	componentWillReceiveProps(newProps) {
		if (this.props.course.id !== newProps.course.id) {
			this.setState({course: Object.assign({}, newProps.course)});
		}
	}
	
	updateCoursesState(event) {
		const field = event.target.name;
		let course = this.state.course;
		course[field] = event.target.value;
		return this.setState({course: course});
	}

	// updateCourseLink(course) {
	// 	this.setState({course: 'http://' + course})
	// }

	saveCourse(event) {
		event.preventDefault();
		// console.log(this.state.course)
		// if this.state.course.course isn't prefixed with 'http://'
		// call updateCourseLink to add it
		this.props.actions.saveCourse(this.state.course);
		this.context.router.push('/courses');
	}

	render() {
		return (
			<div>				
				<CourseForm 
					onSave={this.saveCourse}
					onChange={this.updateCoursesState}
					course={this.state.course}
					errors={this.state.errors} />
			</div>
		);
	}
}

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
	router: PropTypes.object
};

function getCourseById(courses, id) {
	const course = courses.filter(course => course.id === id);
	if (course.length) return course[0];
	return null;
}

// make courses available from redux store as this.props.courses
function mapStateToProps(state, ownProps) {
	const courseId = ownProps.params.id;
	let course = {id: '', title: '', author: '', category: ''};
	if (courseId && state.courses.length > 0) {
		course = getCourseById(state.courses, courseId);
	}
	return {
		course: course
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);