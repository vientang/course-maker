import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Course Maker</h1>
				<p>Build your own custom curriculum classes, books, workshops, videos, tutorials, and whatever else you've done.</p>
				<Link to='login' className='btn btn-primary btn-lg'>Start Now</Link>
			</div>
		);
	}
}

export default HomePage;