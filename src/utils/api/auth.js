import transport from '../transport';

export default {
    // Logs a user in
    logUserIn: function (data) {
        return transport.post('/api/auth/login', data);
    },
    // Logs a user out
    logUserOut: function () {
        return transport.post('/api/auth/logout');
    },
    // Retrieve logged in user
    getLoggedUser: function () {
        return transport.get('/api/auth/me')
    },
    // Sends a password reset link email to the user
    userPasswordReset: function (email) {
        return transport.post(`/api/${email}/forgot`);
    },
    // other routes here
};
