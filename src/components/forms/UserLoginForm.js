import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

export default function UserLoginForm() {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        login(data);

        setEmail('');
        setPassword('');
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Username</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email..."
                />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password..."
                />
            </div>
            <button className="btn">Login</button>
        </form>
    );
}
