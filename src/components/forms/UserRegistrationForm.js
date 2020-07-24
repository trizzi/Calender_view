import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext/UserProvider';

export default function UserRegistrationForm() {
    const { addUser } = useContext(UserContext);

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [jobTitle, setJobTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            user_name: username,
            email,
            first_name: firstName,
            last_name: lastName,
            job_title: jobTitle,
        };

        addUser(newUser);

        setEmail('');
        setFirstName('');
        setLastName('');
        setJobTitle('');
        setUserName('');
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter text..."
                />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter text..."
                />
            </div>
            <div className="form-control">
                <label htmlFor="first_name">First name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter text..."
                />
            </div>
            <div className="form-control">
                <label htmlFor="last_name">Last name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter text..."
                />
            </div>
            <div className="form-control">
                <label htmlFor="job_title">Job title</label>
                <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Enter text..."
                />
            </div>
            <button className="btn">Register</button>
        </form>
    );
}
