import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CourseListRow = ({course}) => {
	return (
		<tr className="tablerow">
			<td><a href={course.url} target="_blank">{course.course}</a></td>
			<td><Link to={"/course/" + course.id}>{course.title}</Link></td>
			<td>{course.author}</td>
			<td>{course.category}</td>
		</tr>
	);
};

CourseListRow.propTypes = {
	course: PropTypes.object.isRequired
};

export default CourseListRow;