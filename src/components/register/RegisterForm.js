import React from 'react';
import TextInput from '../common/TextInput';

const RegisterForm = () => {
	return (
		<form 
			onSubmit={}
			className="form-group">
				<h1>Sign up!</h1>
				<TextInput placeholder="name" name="name"/>
				<TextInput placeholder="email" name="email"/>
				<TextInput placeholder="password" name="password"/>
				<input type="submit" className="btn btn-primary"/>
		</form>
	);
};

export default RegisterForm;

// use fetch, superagent, request