import React from 'react';
import RegisterForm from '../../components/forms/UserRegistrationForm';

// RegisterForm component is for context api testing
function Register() {
    return (
        <div className="App">
            <div className="container">
                <RegisterForm />
            </div>
        </div>
    );
}
export default Register;
