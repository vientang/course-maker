import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Course Maker</h1>
				<p>Build your own custom curriculum classes, books, workshops, videos and tutorials to keep track of your customized learning plan.</p>
				<Link to="register" className="btn btn-primary btn-lg">See a demo</Link>
			</div>
		);
	}
}

export default HomePage;