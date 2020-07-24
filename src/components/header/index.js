import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/register">Register</Link>
            <Link to="/auth/forgot-password">Forgot Password</Link>
            <Link to="/event/add">Add Event</Link>
        </>
    );
}
export default Header;
