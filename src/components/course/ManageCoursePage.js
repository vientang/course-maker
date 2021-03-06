import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			course: Object.assign({}, props.course),
			errors: {},
			saving: false
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
		this.setState({saving: true});

		// Make active when ready to save to Firebase
		// const course = {
	  //   id: this.state.course.id + 1,
	  //   course: this.state.course.course,
	  //   title: this.state.course.title,
	  //   url: this.state.course.url,
	  //   author: this.state.course.author,
	  //   category: this.state.course.category
			// startedAt: firebase.database.ServerValue.TIMESTAMP
		// }
		// firebase.database().ref('courses/' + course.id).set(course);
		// this.setState({message: ''});


		this.props.actions.saveCourse(this.state.course)
			.then(() => this.redirect())
			.catch(error => {
				toastr.error(error);
				this.setState({saving: false});
			});		
	}

	redirect() {
		this.setState({saving: false});
		toastr.success("Course saved");
		this.context.router.push('/courses');
	}

	render() {
		return (
			<div>				
				<CourseForm 
					onSave={this.saveCourse}
					onChange={this.updateCoursesState}
					course={this.state.course}
					errors={this.state.errors}
					saving={this.state.saving} />
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