import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

export default function UserPasswordForgotForm() {
    const { forgotPassword } = useContext(AuthContext);

    const [email, setEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        forgotPassword(email);

        setEmail('');
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter a valid email address"
                />
            </div>
            <button className="btn">Send Password Reset</button>
        </form>
    );
}
