import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			course: { title: '' }
		};
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onTitleChange(e) {
		const course = this.state.course;
		course.title = e.target.value;
		this.setState({ course: course });
	}

	onClickSave() {
		this.props.actions.createCourse(this.state.course);
	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	render() {
		return (
			<div>
				<h1>Courses</h1>
				{this.props.courses.map(this.courseRow)}
				<h2>Add course</h2>
				<input 
					type="text" 
					onChange={this.onTitleChange} 
					value={this.state.course.title} />
				<input
					type="submit"
					onClick={this.onClickSave}
					value="Save" />
			</div>
		);
	}
}

CoursesPage.propTypes = {
	actions: PropTypes.object.isRequired,
	courses: PropTypes.array.isRequired
};

// make courses available from redux store as this.props.courses
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