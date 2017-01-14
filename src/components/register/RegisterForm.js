import React from 'react';
import TextInput from '../common/TextInput';

const RegisterForm = () => {
	return (
		<form 
			method='POST' 
			action='/register'
			className="form-group">
				<h1>Sign up!</h1>
				<TextInput placeholder="name"/>
				<TextInput placeholder="email"/>
				<TextInput placeholder="password"/>
				<input type="submit" className="btn btn-primary"/>
		</form>
	);
};

export default RegisterForm;